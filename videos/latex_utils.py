"""
LaTeX utilities for Manim question videos.
- build_mobject: Convert KaTeX-delimited text to Manim Tex/MathTex objects
- latex_to_speech: Convert LaTeX math to speakable English
- fit_to_screen: Scale down oversized mobjects
"""
import re
from manim import MathTex, Tex, VGroup, Text, TexTemplate


# Preamble with amssymb for \mathbb
_TEX_TEMPLATE = TexTemplate()
_TEX_TEMPLATE.add_to_preamble(r"\usepackage{amssymb}")


# ── build_mobject ─────────────────────────────────────────────────────

def build_mobject(text, font_size=36, color=None):
    """Convert a question string (with \\( ... \\) delimiters) to a Manim mobject.

    Pure math (entire string is one \\( ... \\) block) → MathTex.
    Mixed text+math → Tex with $...$ delimiters.
    Plain text (no math) → Text.
    """
    text = text.strip()
    kwargs = {"font_size": font_size, "tex_template": _TEX_TEMPLATE}
    if color:
        kwargs["color"] = color

    # Check if the entire string is a single math block
    stripped = text.strip()
    if stripped.startswith("\\(") and stripped.endswith("\\)"):
        inner = stripped[2:-2].strip()
        # Check there's no other \\( \\) inside (i.e. it's a single block)
        if "\\(" not in inner and "\\)" not in inner:
            return MathTex(inner, **kwargs)

    # Check if there's any math at all
    if "\\(" not in text:
        return Text(text, font_size=font_size, color=color) if color else Text(text, font_size=font_size)

    # Mixed text + math — convert \\( ... \\) to $...$
    converted = text.replace("\\(", "$").replace("\\)", "$")
    # Also handle \\[ ... \\] display math
    converted = converted.replace("\\[", "$$").replace("\\]", "$$")
    # Handle \\dfrac -> \\frac (Tex doesn't support dfrac well)
    converted = converted.replace("\\dfrac", "\\frac")
    # Replace Unicode symbols that break Tex compilation
    converted = converted.replace("→", "$\\to$")
    converted = converted.replace("≤", "$\\leq$")
    converted = converted.replace("≥", "$\\geq$")
    converted = converted.replace("≠", "$\\neq$")
    converted = converted.replace("—", "--")
    converted = converted.replace("–", "--")
    converted = converted.replace("−", "-")
    try:
        return Tex(converted, **kwargs)
    except Exception:
        # Fallback to plain Text if LaTeX compilation fails
        return Text(text, font_size=font_size, color=color) if color else Text(text, font_size=font_size)


def build_math(latex_str, font_size=36, color=None):
    """Build a MathTex from a raw LaTeX string (no delimiters)."""
    kwargs = {"font_size": font_size, "tex_template": _TEX_TEMPLATE}
    if color:
        kwargs["color"] = color
    return MathTex(latex_str, **kwargs)


# ── fit_to_screen ─────────────────────────────────────────────────────

def fit_to_screen(mob, max_width=13, max_height=7):
    """Scale down a mobject if it exceeds screen dimensions."""
    if mob.width > max_width:
        mob.scale(max_width / mob.width)
    if mob.height > max_height:
        mob.scale(max_height / mob.height)
    return mob


# ── latex_to_speech ───────────────────────────────────────────────────

def latex_to_speech(text):
    """Convert a string with LaTeX (\\( ... \\) delimiters) to spoken English.

    Handles common IB math notation: fractions, exponents, roots, trig, etc.
    """
    # Remove delimiters
    s = text.replace("\\(", "").replace("\\)", "")
    s = s.replace("\\[", "").replace("\\]", "")
    s = s.replace("$$", "")

    # Fractions: \frac{a}{b} or \dfrac{a}{b} → "a over b"
    def replace_frac(m):
        num = m.group(1)
        den = m.group(2)
        return f"{_clean(num)} over {_clean(den)}"
    s = re.sub(r'\\d?frac\{([^{}]+)\}\{([^{}]+)\}', replace_frac, s)
    # Handle nested fractions (one more pass)
    s = re.sub(r'\\d?frac\{([^{}]+)\}\{([^{}]+)\}', replace_frac, s)

    # Square roots: \sqrt{x} → "square root of x"
    s = re.sub(r'\\sqrt\{([^{}]+)\}', r'square root of \1', s)

    # Inverse notation: f^{-1} → "f inverse"
    s = re.sub(r'(\w)\^\{-1\}', r'\1 inverse', s)

    # Exponents: x^{2} → "x squared", x^{3} → "x cubed", x^{n} → "x to the n"
    def replace_exp(m):
        base = m.group(1)
        exp = m.group(2).strip()
        if exp == "2":
            return f"{base} squared"
        elif exp == "3":
            return f"{base} cubed"
        else:
            return f"{base} to the {_clean(exp)}"
    s = re.sub(r'(\w)\^\{([^{}]+)\}', replace_exp, s)
    # Simple exponents: x^2
    s = re.sub(r'(\w)\^(\d)', lambda m: f"{m.group(1)} squared" if m.group(2) == "2" else f"{m.group(1)} to the {m.group(2)}", s)

    # Subscripts: x_{1} → "x sub 1", or just "x 1"
    s = re.sub(r'(\w)_\{([^{}]+)\}', r'\1 sub \2', s)
    s = re.sub(r'(\w)_(\w)', r'\1 sub \2', s)

    # Trig functions
    s = s.replace("\\sin", "sine").replace("\\cos", "cosine").replace("\\tan", "tangent")
    s = s.replace("\\arcsin", "arc sine").replace("\\arccos", "arc cosine")
    s = s.replace("\\ln", "natural log of").replace("\\log", "log")

    # Comparison operators
    s = s.replace("\\geq", "greater than or equal to")
    s = s.replace("\\leq", "less than or equal to")
    s = s.replace("\\neq", "not equal to")
    s = s.replace("\\approx", "approximately")

    # Common symbols
    s = s.replace("\\pi", "pi")
    s = s.replace("\\infty", "infinity")
    s = s.replace("\\pm", "plus or minus")
    s = s.replace("\\times", "times")
    s = s.replace("\\to", "maps to")
    s = s.replace("\\Rightarrow", ", therefore,")
    s = s.replace("\\in", "in")
    s = s.replace("\\mathbb{R}", "the real numbers")

    # Remove \\left, \\right
    s = s.replace("\\left", "").replace("\\right", "")

    # Remove \\quad
    s = s.replace("\\quad", " ")
    s = s.replace("\\,", " ")

    # Clean up remaining backslashes and braces
    s = re.sub(r'\\[a-zA-Z]+', '', s)  # remove any remaining commands
    s = s.replace("{", "").replace("}", "")
    s = s.replace("  ", " ").strip()

    # Clean up math notation for speech
    s = s.replace("=", " equals ").replace("+", " plus ").replace("−", " minus ")
    # Handle negative sign (hyphen-minus used as minus)
    s = re.sub(r'(?<=\s)-(?=\d)', 'negative ', s)
    s = re.sub(r'^-(?=\d)', 'negative ', s)

    # Clean double spaces
    s = re.sub(r'\s+', ' ', s).strip()

    return s


def _clean(s):
    """Light cleanup for sub-expressions in speech conversion."""
    s = s.strip()
    s = s.replace("{", "").replace("}", "")
    return s

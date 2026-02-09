"""
Section 5.2 — Domain and Range
IB DP1 Mathematics: Functions Chapter 5
~3 minutes | 5 scenes | With narration
"""
from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
import numpy as np


class DomainAndRange(VoiceoverScene):
    """Complete video for Section 5.2: Domain and Range."""

    def construct(self):
        self.set_speech_service(GTTSService())
        self.title_scene()
        self.visual_definition()
        self.reading_from_graphs()
        self.three_restrictions()
        self.compound_restriction()
        self.exam_tip()

    # ── Scene 1: Title ──────────────────────────────────────────────
    def title_scene(self):
        title = Text("5.2 Domain and Range", font_size=48, weight=BOLD)
        subtitle = Text(
            "IB DP1 Mathematics — Chapter 5",
            font_size=28,
            color=GREY_B,
        )
        subtitle.next_to(title, DOWN, buff=0.4)

        with self.voiceover(
            text="Section 5.2: Domain and Range. "
                 "These are two of the most important ideas in functions."
        ) as tracker:
            self.play(Write(title), run_time=tracker.duration / 2)
            self.play(FadeIn(subtitle, shift=UP * 0.3), run_time=tracker.duration / 4)

        self.play(FadeOut(title), FadeOut(subtitle))

    # ── Scene 2: Visual Definition ──────────────────────────────────
    def visual_definition(self):
        heading = Text("What are Domain & Range?", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        # Axes
        axes = Axes(
            x_range=[-4, 4, 1], y_range=[-1, 5, 1],
            x_length=7, y_length=4.5,
            axis_config={"include_numbers": True, "font_size": 24},
        ).move_to(DOWN * 0.3)
        labels = axes.get_axis_labels(
            MathTex("x", font_size=28), MathTex("y", font_size=28),
        )

        # Parabola  y = -x^2/2 + 4
        graph = axes.plot(
            lambda x: -x**2 / 2 + 4,
            x_range=[-3.5, 3.5],
            color=BLUE,
        )

        with self.voiceover(
            text="The domain is the set of all possible x values you can input. "
                 "The range is the set of all possible y values the function outputs."
        ) as tracker:
            self.play(Create(axes), Write(labels), run_time=tracker.duration * 0.4)
            self.play(Create(graph), run_time=tracker.duration * 0.4)

        # Domain highlight on x-axis
        domain_line = axes.plot(
            lambda x: 0, x_range=[-3.5, 3.5], color=GREEN, stroke_width=6,
        )
        domain_label = Text("Domain (x-values)", font_size=22, color=GREEN)
        domain_label.next_to(axes, DOWN, buff=0.3)

        with self.voiceover(
            text="The domain is shown along the x-axis in green. "
                 "For this parabola, x can be any real number."
        ) as tracker:
            self.play(
                Create(domain_line), Write(domain_label),
                run_time=tracker.duration,
            )

        # Range highlight on y-axis
        range_line = Line(
            axes.c2p(0, -1.125), axes.c2p(0, 4),
            color=YELLOW, stroke_width=6,
        )
        range_label = Text("Range (y-values)", font_size=22, color=YELLOW)
        range_label.next_to(axes, RIGHT, buff=0.3).shift(DOWN * 0.5)

        with self.voiceover(
            text="The range is shown along the y-axis in yellow. "
                 "This parabola has a maximum at y equals 4, so the range is y less than or equal to 4."
        ) as tracker:
            self.play(
                Create(range_line), Write(range_label),
                run_time=tracker.duration,
            )

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 3: Reading Domain/Range from Graphs ───────────────────
    def reading_from_graphs(self):
        heading = Text("Reading from Graphs", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        # Three small axes side by side
        configs = [
            {
                "title": "Linear",
                "fn": lambda x: 0.5 * x + 1,
                "x_range": [-3, 3],
                "domain": r"\mathbb{R}",
                "range": r"\mathbb{R}",
            },
            {
                "title": "Parabola",
                "fn": lambda x: -(x**2) + 2,
                "x_range": [-2.5, 2.5],
                "domain": r"\mathbb{R}",
                "range": r"y \leq 2",
            },
            {
                "title": "Sqrt curve",
                "fn": lambda x: np.sqrt(x) + 1,
                "x_range": [0, 4],
                "domain": r"x \geq 0",
                "range": r"y \geq 1",
            },
        ]

        panels = VGroup()
        for cfg in configs:
            ax = Axes(
                x_range=[-4, 5, 2], y_range=[-3, 4, 2],
                x_length=3.2, y_length=2.8,
                axis_config={"include_numbers": False, "font_size": 18},
            )
            curve = ax.plot(cfg["fn"], x_range=cfg["x_range"], color=BLUE)
            t = Text(cfg["title"], font_size=20, weight=BOLD)
            t.next_to(ax, UP, buff=0.15)
            d = MathTex(r"\text{D: }" + cfg["domain"], font_size=22, color=GREEN)
            r_ = MathTex(r"\text{R: }" + cfg["range"], font_size=22, color=YELLOW)
            d.next_to(ax, DOWN, buff=0.15)
            r_.next_to(d, DOWN, buff=0.1)
            panel = VGroup(t, ax, curve, d, r_)
            panels.add(panel)

        panels.arrange(RIGHT, buff=0.6)
        panels.next_to(heading, DOWN, buff=0.5)
        panels.scale_to_fit_width(12)

        with self.voiceover(
            text="Here are three examples. "
                 "A straight line has domain and range of all real numbers. "
                 "A parabola opening down has all reals for domain, but the range is limited by the vertex. "
                 "A square root curve starts at a point, so both domain and range are restricted."
        ) as tracker:
            self.play(
                LaggedStart(*[FadeIn(p) for p in panels], lag_ratio=0.3),
                run_time=tracker.duration,
            )

        self.wait(1)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 4: Three Restrictions ─────────────────────────────────
    def three_restrictions(self):
        heading = Text("3 Domain Restrictions", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        restrictions = [
            {
                "icon": MathTex(r"\sqrt{\,\cdot\,}", font_size=44, color=RED),
                "rule": r"\text{No } \sqrt{\text{negative}}",
                "example": r"\sqrt{x-2} \;\Rightarrow\; x \geq 2",
            },
            {
                "icon": MathTex(r"\frac{1}{0}", font_size=44, color=RED),
                "rule": r"\text{No division by } 0",
                "example": r"\frac{2}{x} \;\Rightarrow\; x \neq 0",
            },
            {
                "icon": MathTex(r"\ln", font_size=44, color=RED),
                "rule": r"\text{No } \ln(0 \text{ or neg})",
                "example": r"\ln(x+3) \;\Rightarrow\; x > -3",
            },
        ]

        cards = VGroup()
        for r in restrictions:
            box = RoundedRectangle(
                width=3.5, height=3, corner_radius=0.15,
                fill_color=DARK_BLUE, fill_opacity=0.3, stroke_color=BLUE,
            )
            icon = r["icon"]
            icon.move_to(box.get_top() + DOWN * 0.5)
            rule = MathTex(r["rule"], font_size=24)
            rule.next_to(icon, DOWN, buff=0.3)
            ex = MathTex(r["example"], font_size=24, color=GREEN)
            ex.next_to(rule, DOWN, buff=0.3)
            card = VGroup(box, icon, rule, ex)
            cards.add(card)

        cards.arrange(RIGHT, buff=0.4)
        cards.next_to(heading, DOWN, buff=0.5)
        cards.scale_to_fit_width(12)

        narrations = [
            "Rule 1: You cannot take the square root of a negative number. "
            "For root of x minus 2, we need x minus 2 to be at least zero, so x must be at least 2.",

            "Rule 2: You cannot divide by zero. "
            "For 2 over x, x cannot equal zero.",

            "Rule 3: You cannot take the natural log of zero or a negative number. "
            "For ln of x plus 3, we need x plus 3 to be positive, so x must be greater than negative 3.",
        ]

        for card, narration in zip(cards, narrations):
            with self.voiceover(text=narration) as tracker:
                self.play(FadeIn(card), run_time=min(tracker.duration, 2))

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 5: Compound Restriction ───────────────────────────────
    def compound_restriction(self):
        heading = Text("Compound Restriction", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        fn = MathTex(r"h(x) = \frac{5}{\sqrt{x-1}}", font_size=44)
        fn.next_to(heading, DOWN, buff=0.6)

        with self.voiceover(
            text="What if a function has more than one restriction? "
                 "Consider h of x equals 5 over the square root of x minus 1."
        ) as tracker:
            self.play(Write(fn), run_time=tracker.duration)

        # Two restrictions
        r1 = MathTex(
            r"\text{Denominator} \neq 0: \; \sqrt{x-1} \neq 0 \;\Rightarrow\; x \neq 1",
            font_size=30,
        )
        r2 = MathTex(
            r"\text{Square root} \geq 0: \; x-1 \geq 0 \;\Rightarrow\; x \geq 1",
            font_size=30,
        )
        r1.next_to(fn, DOWN, buff=0.5)
        r2.next_to(r1, DOWN, buff=0.3)

        with self.voiceover(
            text="First, the denominator cannot be zero, so x cannot be 1. "
                 "Second, the expression under the square root must be non-negative, so x must be at least 1."
        ) as tracker:
            self.play(Write(r1), run_time=tracker.duration * 0.4)
            self.play(Write(r2), run_time=tracker.duration * 0.4)

        # Combined
        combined = MathTex(
            r"\text{Combined: } x > 1",
            font_size=36, color=GREEN,
        )
        combined.next_to(r2, DOWN, buff=0.5)
        box = SurroundingRectangle(combined, color=GREEN, buff=0.15)

        with self.voiceover(
            text="Combining both restrictions: x must be strictly greater than 1."
        ) as tracker:
            self.play(Write(combined), Create(box), run_time=tracker.duration)

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Exam Tip ────────────────────────────────────────────────────
    def exam_tip(self):
        tip_box = RoundedRectangle(
            width=10, height=2.5, corner_radius=0.3,
            fill_color=GOLD_E, fill_opacity=0.15, stroke_color=GOLD,
        )
        tip_title = Text("IB Exam Tip", font_size=32, weight=BOLD, color=GOLD)
        tip_title.next_to(tip_box.get_top(), DOWN, buff=0.3)
        tip_text = Text(
            "No fractions, no roots, no logs?\n"
            "Then the domain is all real numbers.",
            font_size=26,
            line_spacing=1.3,
        )
        tip_text.next_to(tip_title, DOWN, buff=0.3)

        with self.voiceover(
            text="IB exam tip: if a function has no fractions, no square roots, "
                 "and no logarithms, then the domain is all real numbers. "
                 "Polynomials always have domain of all reals."
        ) as tracker:
            self.play(FadeIn(tip_box), Write(tip_title), run_time=tracker.duration * 0.4)
            self.play(FadeIn(tip_text, shift=UP * 0.2), run_time=tracker.duration * 0.3)

        self.wait(1)
        self.play(FadeOut(Group(*self.mobjects)))

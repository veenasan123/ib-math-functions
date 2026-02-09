#!/usr/bin/env python3
"""
Extract the QUESTIONS array from js/questions.js into questions.json.
Uses regex to convert JS object literal syntax to Python-evaluable syntax.
"""
import json
import re
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
JS_PATH = os.path.join(SCRIPT_DIR, "..", "js", "questions.js")
OUT_PATH = os.path.join(SCRIPT_DIR, "questions.json")


def _js_to_json(js_str):
    """Convert a JS object/array literal string to valid JSON.

    Tokenizes strings first so regex replacements don't affect string contents.
    """
    # Tokenize: split into string literals and non-string segments
    # Match double-quoted strings (with escaped chars)
    tokens = re.split(r'("(?:[^"\\]|\\.)*")', js_str)

    result = []
    for i, tok in enumerate(tokens):
        if i % 2 == 1:
            # This is a string literal — keep as-is
            result.append(tok)
        else:
            # Non-string segment — apply transformations
            s = tok
            # Remove single-line comments
            s = re.sub(r'//[^\n]*', '', s)
            # Quote unquoted object keys: word chars followed by colon
            s = re.sub(r'(?<=[{,\n])\s*(\w+)\s*:', r' "\1":', s)
            # Remove trailing commas before } or ]
            s = re.sub(r',\s*([}\]])', r'\1', s)
            result.append(s)

    return ''.join(result)


def extract_questions():
    with open(JS_PATH, "r") as f:
        js_src = f.read()

    # Extract the QUESTIONS array — everything between "const QUESTIONS = [" and the final "];"
    m = re.search(r"const QUESTIONS\s*=\s*\[", js_src)
    if not m:
        raise ValueError("Could not find QUESTIONS array in questions.js")

    start = m.start() + len("const QUESTIONS = ")
    # Find matching closing bracket
    depth = 0
    end = None
    for i in range(start, len(js_src)):
        if js_src[i] == "[":
            depth += 1
        elif js_src[i] == "]":
            depth -= 1
            if depth == 0:
                end = i + 1
                break
    if end is None:
        raise ValueError("Could not find end of QUESTIONS array")

    array_str = js_src[start:end]

    array_str = _js_to_json(array_str)
    questions = json.loads(array_str)

    # Also extract SECTIONS
    m2 = re.search(r"const SECTIONS\s*=\s*\[", js_src)
    if m2:
        s_start = m2.start() + len("const SECTIONS = ")
        depth = 0
        s_end = None
        for i in range(s_start, len(js_src)):
            if js_src[i] == "[":
                depth += 1
            elif js_src[i] == "]":
                depth -= 1
                if depth == 0:
                    s_end = i + 1
                    break
        if s_end:
            sec_str = js_src[s_start:s_end]
            sec_str = _js_to_json(sec_str)
            sections = json.loads(sec_str)
        else:
            sections = []
    else:
        sections = []

    data = {"sections": sections, "questions": questions}

    with open(OUT_PATH, "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Extracted {len(questions)} questions and {len(sections)} sections to {OUT_PATH}")
    return data


if __name__ == "__main__":
    extract_questions()

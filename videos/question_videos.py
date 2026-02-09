"""
question_videos.py — Dynamically creates 49 Manim scene classes (Q5_1_1 ... Q5_5_8).

Usage:
    manim -ql question_videos.py Q5_1_1    # render one question
    manim -ql question_videos.py            # render all (slow!)
"""
import json
import os

from question_scene import QuestionScene

# Load question data
_DATA_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "questions.json")
with open(_DATA_PATH, "r") as _f:
    _ALL_QUESTIONS = json.load(_f)["questions"]

# Dynamically create a scene class for each question
for _q in _ALL_QUESTIONS:
    _name = "Q" + _q["id"].replace(".", "_")  # e.g. "Q5_1_1"
    globals()[_name] = type(_name, (QuestionScene,), {"question_data": _q})

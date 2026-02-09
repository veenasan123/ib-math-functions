"""
QuestionScene — Reusable Manim scene template for per-question solution videos.

Each question video follows this structure:
  1. Title scene (question ID + label)
  2. Statement display
  3. Per-part solution walkthrough (steps revealed one by one, color-coded)
  4. Exam tip (gold box, if present)

Subclasses only need to set `question_data` (a dict from questions.json).
"""
from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService

from latex_utils import build_mobject, latex_to_speech, fit_to_screen


# Step type → color mapping (matches the web app)
STEP_COLORS = {
    "concept": BLUE,
    "algebra": WHITE,
    "answer": GREEN,
    "note": YELLOW,
}

# Section ID → title mapping
SECTION_TITLES = {
    "5.1": "Concept of a Function",
    "5.2": "Domain and Range",
    "5.3": "Inverse Functions",
    "5.4": "Sketching Graphs",
    "5.5": "Exam Style Questions",
}


class QuestionScene(VoiceoverScene):
    """Template scene for rendering a single question's solution.

    Subclasses must define:
        question_data: dict  — one entry from questions.json
    """
    question_data = None  # Override in subclass or via type()

    def construct(self):
        if self.question_data is None:
            raise ValueError("question_data must be set")

        self.set_speech_service(GTTSService())
        q = self.question_data

        self.title_scene(q)
        self.statement_scene(q)

        for i, part in enumerate(q["parts"]):
            self.render_part(q, part, i)

        if q.get("examTip"):
            self.exam_tip_scene(q["examTip"])

    # ── Title Scene ───────────────────────────────────────────────

    def title_scene(self, q):
        section_title = SECTION_TITLES.get(q["section"], "")
        title = Text(
            f"Q{q['id']} — {q['label']}",
            font_size=44, weight=BOLD,
        )
        subtitle = Text(
            f"Section {q['section']}: {section_title}",
            font_size=26, color=GREY_B,
        )
        subtitle.next_to(title, DOWN, buff=0.4)
        group = VGroup(title, subtitle).move_to(ORIGIN)

        speech = f"Question {q['id']}, {q['label']}. {section_title}."
        with self.voiceover(text=speech) as tracker:
            self.play(Write(title), run_time=tracker.duration * 0.5)
            self.play(FadeIn(subtitle, shift=UP * 0.3), run_time=tracker.duration * 0.3)

        self.wait(0.3)
        self.play(FadeOut(group))

    # ── Statement Scene ───────────────────────────────────────────

    def statement_scene(self, q):
        heading = Text("Question", font_size=32, weight=BOLD, color=BLUE)
        heading.to_edge(UP, buff=0.5)

        stmt_mob = build_mobject(q["statement"], font_size=34)
        fit_to_screen(stmt_mob, max_width=12)
        stmt_mob.next_to(heading, DOWN, buff=0.5)

        # If there are marks, show them
        marks_mob = None
        if q.get("marks"):
            marks_mob = Text(
                f"[{q['marks']} marks]",
                font_size=22, color=GREY_B,
            )
            marks_mob.next_to(stmt_mob, DOWN, buff=0.3)

        speech = latex_to_speech(q["statement"])
        if q.get("marks"):
            speech += f" This question is worth {q['marks']} marks."

        with self.voiceover(text=speech) as tracker:
            self.play(Write(heading), run_time=0.5)
            self.play(FadeIn(stmt_mob), run_time=tracker.duration * 0.6)
            if marks_mob:
                self.play(FadeIn(marks_mob), run_time=0.3)

        self.wait(0.3)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Render One Part ───────────────────────────────────────────

    def render_part(self, q, part, part_idx):
        total_parts = len(q["parts"])

        # Part header
        if total_parts > 1:
            part_label = Text(
                f"Part {part['label']}",
                font_size=34, weight=BOLD, color=TEAL,
            )
        else:
            part_label = Text("Solution", font_size=34, weight=BOLD, color=TEAL)
        part_label.to_edge(UP, buff=0.5)
        self.play(Write(part_label), run_time=0.4)

        # Part question text (if any)
        y_pos = part_label.get_bottom()[1] - 0.6
        if part.get("text"):
            part_text = build_mobject(part["text"], font_size=30)
            fit_to_screen(part_text, max_width=12)
            part_text.move_to([0, y_pos, 0])
            y_pos = part_text.get_bottom()[1] - 0.5

            part_speech = latex_to_speech(part["text"])
            with self.voiceover(text=part_speech) as tracker:
                self.play(FadeIn(part_text), run_time=tracker.duration)
        else:
            part_text = None

        # Reveal steps one by one
        step_mobs = []
        for si, step in enumerate(part["steps"]):
            color = STEP_COLORS.get(step["type"], WHITE)
            step_mob = build_mobject(step["content"], font_size=28, color=color)
            fit_to_screen(step_mob, max_width=12)
            step_mob.move_to([0, y_pos, 0])

            # Check if it would go off screen
            if y_pos < -3.2:
                # Scroll up: fade out earlier items and reset position
                to_remove = [m for m in step_mobs[:max(1, len(step_mobs)-2)]]
                if part_text and part_text in self.mobjects:
                    to_remove.append(part_text)
                    part_text = None
                if to_remove:
                    self.play(*[FadeOut(m) for m in to_remove], run_time=0.3)
                    for m in to_remove:
                        if m in step_mobs:
                            step_mobs.remove(m)
                # Shift remaining up
                if step_mobs:
                    shift_amount = step_mobs[0].get_center()[1] - (part_label.get_bottom()[1] - 0.6)
                    shift_amount = -shift_amount  # positive means UP
                    self.play(*[m.animate.shift(UP * shift_amount) for m in step_mobs], run_time=0.3)
                    for m in step_mobs:
                        pass  # positions updated by animation
                y_pos = step_mobs[-1].get_bottom()[1] - 0.5 if step_mobs else part_label.get_bottom()[1] - 0.6
                step_mob.move_to([0, y_pos, 0])

            step_speech = latex_to_speech(step["content"])
            with self.voiceover(text=step_speech) as tracker:
                self.play(FadeIn(step_mob), run_time=min(tracker.duration, 2))

            # Box the final answer in green
            if step["type"] == "answer":
                box = SurroundingRectangle(step_mob, color=GREEN, buff=0.15)
                self.play(Create(box), run_time=0.4)
                step_mobs.append(box)

            step_mobs.append(step_mob)
            y_pos = step_mob.get_bottom()[1] - 0.45

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Exam Tip Scene ────────────────────────────────────────────

    def exam_tip_scene(self, tip_text):
        tip_box = RoundedRectangle(
            width=11, height=3, corner_radius=0.3,
            fill_color=GOLD_E, fill_opacity=0.15, stroke_color=GOLD,
        )
        tip_title = Text("IB Exam Tip", font_size=32, weight=BOLD, color=GOLD)
        tip_title.next_to(tip_box.get_top(), DOWN, buff=0.35)

        tip_content = build_mobject(tip_text, font_size=26)
        fit_to_screen(tip_content, max_width=10)
        tip_content.next_to(tip_title, DOWN, buff=0.35)

        group = VGroup(tip_box, tip_title, tip_content).move_to(ORIGIN)

        speech = "IB exam tip: " + latex_to_speech(tip_text)
        with self.voiceover(text=speech) as tracker:
            self.play(FadeIn(tip_box), Write(tip_title), run_time=tracker.duration * 0.4)
            self.play(FadeIn(tip_content, shift=UP * 0.2), run_time=tracker.duration * 0.4)

        self.wait(0.8)
        self.play(FadeOut(Group(*self.mobjects)))

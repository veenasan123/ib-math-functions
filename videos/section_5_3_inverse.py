"""
Section 5.3 — Inverse Functions
IB DP1 Mathematics: Functions Chapter 5
~3 minutes | 5 scenes | With narration
"""
from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
import numpy as np


class InverseFunctions(VoiceoverScene):
    """Complete video for Section 5.3: Inverse Functions."""

    def construct(self):
        self.set_speech_service(GTTSService())
        self.title_scene()
        self.concept_scene()
        self.finding_inverse_value()
        self.graphical_inverse()
        self.big_trick()
        self.exam_tip()

    # ── Scene 1: Title ──────────────────────────────────────────────
    def title_scene(self):
        title = Text("5.3 Inverse Functions", font_size=48, weight=BOLD)
        subtitle = Text(
            "IB DP1 Mathematics — Chapter 5",
            font_size=28,
            color=GREY_B,
        )
        subtitle.next_to(title, DOWN, buff=0.4)

        with self.voiceover(
            text="Section 5.3: Inverse Functions. "
                 "This is one of the most tested topics on the IB exam."
        ) as tracker:
            self.play(Write(title), run_time=tracker.duration / 2)
            self.play(FadeIn(subtitle, shift=UP * 0.3), run_time=tracker.duration / 4)

        self.play(FadeOut(title), FadeOut(subtitle))

    # ── Scene 2: Concept — arrows reversing ─────────────────────────
    def concept_scene(self):
        heading = Text("What is an Inverse?", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        # f(2) = 3
        fwd = MathTex(r"f(2) = 3", font_size=44, color=BLUE)
        fwd.move_to(UP * 1.5 + LEFT * 2.5)

        # Arrow
        arrow_fwd = Arrow(LEFT * 0.5, RIGHT * 0.5, color=BLUE)
        arrow_fwd.next_to(fwd, RIGHT, buff=0.3)

        # f⁻¹(3) = 2
        rev = MathTex(r"f^{-1}(3) = 2", font_size=44, color=GREEN)
        rev.move_to(UP * 1.5 + RIGHT * 2.5)

        with self.voiceover(
            text="An inverse function reverses the process. "
                 "If f of 2 equals 3, then f inverse of 3 equals 2. "
                 "The input and output swap."
        ) as tracker:
            self.play(Write(fwd), run_time=tracker.duration * 0.3)
            self.play(GrowArrow(arrow_fwd), Write(rev), run_time=tracker.duration * 0.4)

        # Visual: two circles with mapping arrows
        circle_a = Circle(radius=1, color=BLUE).move_to(DOWN * 1 + LEFT * 2.5)
        circle_b = Circle(radius=1, color=GREEN).move_to(DOWN * 1 + RIGHT * 2.5)
        label_a = Text("Domain", font_size=20).next_to(circle_a, UP, buff=0.15)
        label_b = Text("Range", font_size=20).next_to(circle_b, UP, buff=0.15)

        dot2 = Dot(circle_a.get_center() + UP * 0.2, color=BLUE)
        dot3 = Dot(circle_b.get_center() + UP * 0.2, color=GREEN)
        label_2 = MathTex("2", font_size=28).next_to(dot2, LEFT, buff=0.1)
        label_3 = MathTex("3", font_size=28).next_to(dot3, RIGHT, buff=0.1)

        arr_f = Arrow(
            dot2.get_center(), dot3.get_center(),
            buff=0.15, color=BLUE, stroke_width=3,
        )
        arr_finv = Arrow(
            dot3.get_center(), dot2.get_center(),
            buff=0.15, color=GREEN, stroke_width=3,
        ).shift(DOWN * 0.4)

        f_label = MathTex("f", font_size=24, color=BLUE).next_to(arr_f, UP, buff=0.1)
        finv_label = MathTex("f^{-1}", font_size=24, color=GREEN).next_to(arr_finv, DOWN, buff=0.1)

        with self.voiceover(
            text="Here you can see: f takes 2 to 3, and f inverse takes 3 back to 2."
        ) as tracker:
            self.play(
                Create(circle_a), Create(circle_b),
                Write(label_a), Write(label_b),
                FadeIn(dot2), FadeIn(dot3),
                Write(label_2), Write(label_3),
                run_time=tracker.duration * 0.4,
            )
            self.play(GrowArrow(arr_f), Write(f_label), run_time=tracker.duration * 0.2)
            self.play(GrowArrow(arr_finv), Write(finv_label), run_time=tracker.duration * 0.2)

        # Warning
        warning = MathTex(
            r"f^{-1}(x) \neq \frac{1}{f(x)}",
            font_size=40, color=RED,
        )
        warning.to_edge(DOWN, buff=0.5)
        warn_box = SurroundingRectangle(warning, color=RED, buff=0.15)

        with self.voiceover(
            text="Very important: f inverse is NOT the same as 1 over f of x. "
                 "The negative 1 means inverse, not reciprocal!"
        ) as tracker:
            self.play(Write(warning), Create(warn_box), run_time=tracker.duration)

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 3: Finding Inverse Values ─────────────────────────────
    def finding_inverse_value(self):
        heading = Text("Finding Inverse Values", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        problem = MathTex(
            r"f(x) = 3x + 5", r"\qquad\text{Find } f^{-1}(11)",
            font_size=36,
        )
        problem.next_to(heading, DOWN, buff=0.5)

        with self.voiceover(
            text="Let's find f inverse of 11 when f of x equals 3x plus 5."
        ) as tracker:
            self.play(Write(problem), run_time=tracker.duration)

        # Method
        method = Text("Set f(x) = 11 and solve for x:", font_size=26, color=GREY_B)
        method.next_to(problem, DOWN, buff=0.5)

        steps = VGroup(
            MathTex(r"3x + 5 = 11", font_size=38),
            MathTex(r"3x = 6", font_size=38),
            MathTex(r"x = 2", font_size=38),
        )
        steps.arrange(DOWN, buff=0.35)
        steps.next_to(method, DOWN, buff=0.4)

        with self.voiceover(
            text="Set 3x plus 5 equal to 11 and solve. "
                 "Subtract 5 to get 3x equals 6. "
                 "Divide by 3 to get x equals 2."
        ) as tracker:
            self.play(Write(method), run_time=tracker.duration * 0.15)
            anim_time = tracker.duration * 0.25
            for step in steps:
                self.play(Write(step), run_time=anim_time)

        answer = MathTex(r"\therefore\; f^{-1}(11) = 2", font_size=40, color=GREEN)
        answer.next_to(steps, DOWN, buff=0.5)
        box = SurroundingRectangle(answer, color=GREEN, buff=0.15)

        with self.voiceover(
            text="Therefore, f inverse of 11 equals 2."
        ) as tracker:
            self.play(Write(answer), Create(box), run_time=tracker.duration)

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 4: Graphical Inverse — reflection in y=x ──────────────
    def graphical_inverse(self):
        heading = Text("Graphical Inverse: Reflect in y = x", font_size=34, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        axes = Axes(
            x_range=[-4, 5, 1], y_range=[-4, 5, 1],
            x_length=6, y_length=6,
            axis_config={"include_numbers": True, "font_size": 20},
        ).move_to(DOWN * 0.2)
        axis_labels = axes.get_axis_labels(
            MathTex("x", font_size=24), MathTex("y", font_size=24),
        )
        self.play(Create(axes), Write(axis_labels))

        # y = x line (mirror)
        mirror = axes.plot(lambda x: x, x_range=[-3.5, 4.5], color=GREY)
        mirror_dashed = DashedVMobject(mirror, num_dashes=30)
        mirror_label = MathTex(r"y = x", font_size=24, color=GREY)
        mirror_label.next_to(axes.c2p(4, 4), RIGHT, buff=0.1)

        with self.voiceover(
            text="To graph an inverse, we reflect the original curve in the line y equals x."
        ) as tracker:
            self.play(
                Create(mirror_dashed), Write(mirror_label),
                run_time=tracker.duration,
            )

        # f(x) = e^x - 2
        f_graph = axes.plot(
            lambda x: np.exp(x) - 2,
            x_range=[-3.5, np.log(6.5)],
            color=BLUE,
        )
        f_label = MathTex(r"f(x) = e^x - 2", font_size=26, color=BLUE)
        f_label.next_to(axes.c2p(1.5, 3), RIGHT, buff=0.2)

        with self.voiceover(
            text="Here is f of x equals e to the x minus 2."
        ) as tracker:
            self.play(Create(f_graph), Write(f_label), run_time=tracker.duration)

        # Key point (0, -1) and HA at y = -2
        dot_f = Dot(axes.c2p(0, -1), color=BLUE)
        dot_f_label = MathTex(r"(0, -1)", font_size=22, color=BLUE)
        dot_f_label.next_to(dot_f, DOWN + RIGHT, buff=0.1)
        ha = DashedLine(
            axes.c2p(-4, -2), axes.c2p(5, -2), color=RED, dash_length=0.1,
        )
        ha_label = MathTex(r"y = -2", font_size=22, color=RED)
        ha_label.next_to(axes.c2p(-3.5, -2), UP, buff=0.1)
        self.play(FadeIn(dot_f), Write(dot_f_label), Create(ha), Write(ha_label))

        # Animate reflection
        finv_graph = axes.plot(
            lambda x: np.log(x + 2),
            x_range=[-1.95, 4.5],
            color=GREEN,
        )
        finv_label = MathTex(r"f^{-1}(x) = \ln(x+2)", font_size=26, color=GREEN)
        finv_label.next_to(axes.c2p(3, 1.2), RIGHT, buff=0.2)

        f_copy = f_graph.copy().set_color(GREEN).set_stroke(opacity=0.3)

        with self.voiceover(
            text="Reflecting in y equals x gives us the inverse: "
                 "f inverse of x equals natural log of x plus 2. "
                 "Notice the key point 0 comma negative 1 becomes negative 1 comma 0."
        ) as tracker:
            self.play(Transform(f_copy, finv_graph), run_time=tracker.duration * 0.4)
            self.play(Write(finv_label), run_time=tracker.duration * 0.2)

        # Reflected key point and VA
        dot_finv = Dot(axes.c2p(-1, 0), color=GREEN)
        dot_finv_label = MathTex(r"(-1, 0)", font_size=22, color=GREEN)
        dot_finv_label.next_to(dot_finv, UP + LEFT, buff=0.1)
        va = DashedLine(
            axes.c2p(-2, -4), axes.c2p(-2, 5), color=ORANGE, dash_length=0.1,
        )
        va_label = MathTex(r"x = -2", font_size=22, color=ORANGE)
        va_label.next_to(axes.c2p(-2, 4), LEFT, buff=0.1)

        note = Text("HA of f becomes VA of f\u207B\u00B9", font_size=22, color=YELLOW)
        note.to_edge(DOWN, buff=0.3)

        with self.voiceover(
            text="And the horizontal asymptote of f at y equals negative 2 "
                 "becomes a vertical asymptote of the inverse at x equals negative 2."
        ) as tracker:
            self.play(
                FadeIn(dot_finv), Write(dot_finv_label),
                Create(va), Write(va_label),
                run_time=tracker.duration * 0.6,
            )
            self.play(Write(note), run_time=tracker.duration * 0.2)

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 5: The Big Trick — f(x) = f⁻¹(x) ────────────────────
    def big_trick(self):
        heading = Text("The Big Trick", font_size=36, weight=BOLD, color=YELLOW)
        heading.to_edge(UP)
        self.play(Write(heading))

        trick = MathTex(
            r"f(x) = f^{-1}(x) \;\Longrightarrow\; \text{solve } f(x) = x",
            font_size=36, color=YELLOW,
        )
        trick.next_to(heading, DOWN, buff=0.5)
        trick_box = SurroundingRectangle(trick, color=YELLOW, buff=0.15)

        with self.voiceover(
            text="Here's the big trick. If the exam asks you to solve "
                 "f of x equals f inverse of x, just solve f of x equals x instead. "
                 "This works because f and f inverse meet on the line y equals x."
        ) as tracker:
            self.play(Write(trick), Create(trick_box), run_time=tracker.duration * 0.5)

        why = Text(
            "Points where f and f\u207B\u00B9 meet lie on y = x",
            font_size=24, color=GREY_B,
        )
        why.next_to(trick_box, DOWN, buff=0.3)
        self.play(Write(why))

        # Example
        example_title = MathTex(r"f(x) = x^3 + x - 8", font_size=36)
        example_title.next_to(why, DOWN, buff=0.5)

        steps = VGroup(
            MathTex(r"\text{Set } f(x) = x:", font_size=30, color=GREY_B),
            MathTex(r"x^3 + x - 8 = x", font_size=34),
            MathTex(r"x^3 = 8", font_size=34),
            MathTex(r"x = 2", font_size=34, color=GREEN),
        )
        steps.arrange(DOWN, buff=0.3)
        steps.next_to(example_title, DOWN, buff=0.4)

        with self.voiceover(
            text="Example: f of x equals x cubed plus x minus 8. "
                 "Set it equal to x: x cubed plus x minus 8 equals x. "
                 "The x terms cancel, giving x cubed equals 8. "
                 "So x equals 2. The intersection is at the point 2 comma 2."
        ) as tracker:
            self.play(Write(example_title), run_time=tracker.duration * 0.15)
            anim_time = tracker.duration * 0.2
            for step in steps:
                self.play(Write(step), run_time=anim_time)

        point = MathTex(
            r"\text{Intersection at } (2, 2) \text{ on } y = x",
            font_size=30, color=GREEN,
        )
        point.next_to(steps, DOWN, buff=0.4)
        self.play(Write(point))
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
            'f(x) = f\u207B\u00B9(x)  \u2192  solve f(x) = x\n'
            "This saves huge time on Paper 1!",
            font_size=26,
            line_spacing=1.3,
        )
        tip_text.next_to(tip_title, DOWN, buff=0.3)

        with self.voiceover(
            text="Remember: f of x equals f inverse of x means solve f of x equals x. "
                 "This saves huge time on Paper 1. Write this down!"
        ) as tracker:
            self.play(FadeIn(tip_box), Write(tip_title), run_time=tracker.duration * 0.4)
            self.play(FadeIn(tip_text, shift=UP * 0.2), run_time=tracker.duration * 0.3)

        self.wait(1)
        self.play(FadeOut(Group(*self.mobjects)))

"""
Section 5.1 — What is a Function?
IB DP1 Mathematics: Functions Chapter 5
~2 minutes | 5 scenes | With narration
"""
from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService


class WhatIsAFunction(VoiceoverScene):
    """Complete video for Section 5.1: Concept of a Function."""

    def construct(self):
        self.set_speech_service(GTTSService())
        self.title_scene()
        self.function_machine()
        self.notation_scene()
        self.reverse_problem()
        self.rational_function()
        self.exam_tip()

    # ── Scene 1: Title ──────────────────────────────────────────────
    def title_scene(self):
        title = Text("5.1 Concept of a Function", font_size=48, weight=BOLD)
        subtitle = Text(
            "IB DP1 Mathematics — Chapter 5",
            font_size=28,
            color=GREY_B,
        )
        subtitle.next_to(title, DOWN, buff=0.4)

        with self.voiceover(
            text="Welcome to section 5.1: Concept of a Function. "
                 "Let's start with the basics."
        ) as tracker:
            self.play(Write(title), run_time=tracker.duration / 2)
            self.play(FadeIn(subtitle, shift=UP * 0.3), run_time=tracker.duration / 4)

        self.play(FadeOut(title), FadeOut(subtitle))

    # ── Scene 2: Function Machine ───────────────────────────────────
    def function_machine(self):
        heading = Text("The Function Machine", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        # Machine box
        box = RoundedRectangle(
            width=3, height=2, corner_radius=0.2,
            fill_color=BLUE_E, fill_opacity=0.3, stroke_color=BLUE,
        )
        rule_label = MathTex(r"2x + 5", font_size=40)
        rule_label.move_to(box)

        # Input / output arrows
        in_arrow = Arrow(LEFT * 3.5, LEFT * 1.6, buff=0, color=GREEN)
        out_arrow = Arrow(RIGHT * 1.6, RIGHT * 3.5, buff=0, color=YELLOW)
        in_label = Text("input x", font_size=24, color=GREEN)
        in_label.next_to(in_arrow, UP, buff=0.15)
        out_label = Text("output", font_size=24, color=YELLOW)
        out_label.next_to(out_arrow, UP, buff=0.15)

        machine = VGroup(box, rule_label, in_arrow, out_arrow, in_label, out_label)
        machine.move_to(ORIGIN + UP * 0.3)

        with self.voiceover(
            text="Think of a function as a machine. "
                 "You feed in an input x, a rule is applied, and an output comes out. "
                 "Here, the rule is 2x plus 5."
        ) as tracker:
            self.play(
                FadeIn(box), Write(rule_label),
                GrowArrow(in_arrow), GrowArrow(out_arrow),
                FadeIn(in_label), FadeIn(out_label),
                run_time=tracker.duration,
            )

        # Example 1: x = 2
        ex1_in = MathTex(r"x = 2", font_size=32, color=GREEN)
        ex1_in.next_to(in_arrow, DOWN, buff=0.3)
        ex1_out = MathTex(r"2(2)+5 = 9", font_size=32, color=YELLOW)
        ex1_out.next_to(out_arrow, DOWN, buff=0.3)

        with self.voiceover(
            text="If we put in x equals 2, we get 2 times 2 plus 5, which equals 9."
        ) as tracker:
            self.play(Write(ex1_in), run_time=tracker.duration * 0.3)
            self.play(Write(ex1_out), run_time=tracker.duration * 0.4)

        # Example 2: x = -3
        ex2_in = MathTex(r"x = -3", font_size=32, color=GREEN)
        ex2_in.next_to(ex1_in, DOWN, buff=0.3)
        ex2_out = MathTex(r"2(-3)+5 = -1", font_size=32, color=YELLOW)
        ex2_out.next_to(ex1_out, DOWN, buff=0.3)

        with self.voiceover(
            text="If we put in x equals negative 3, we get 2 times negative 3 plus 5, "
                 "which equals negative 1."
        ) as tracker:
            self.play(Write(ex2_in), run_time=tracker.duration * 0.3)
            self.play(Write(ex2_out), run_time=tracker.duration * 0.4)

        self.play(FadeOut(VGroup(heading, machine, ex1_in, ex1_out, ex2_in, ex2_out)))

    # ── Scene 3: Function Notation ──────────────────────────────────
    def notation_scene(self):
        heading = Text("Function Notation", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        fn = MathTex(r"f", r"(", r"x", r")", r"=", r"2x + 5", font_size=44)
        fn.move_to(UP * 1.5)

        with self.voiceover(
            text="In proper notation, we write f of x equals 2x plus 5. "
                 "Let's break this down."
        ) as tracker:
            self.play(Write(fn), run_time=tracker.duration)

        # Annotations
        brace_name = Brace(fn[0], DOWN, buff=0.15)
        label_name = Text("name", font_size=22, color=TEAL)
        label_name.next_to(brace_name, DOWN, buff=0.1)

        brace_input = Brace(fn[2], DOWN, buff=0.15)
        label_input = Text("input", font_size=22, color=GREEN)
        label_input.next_to(brace_input, DOWN, buff=0.1)

        brace_rule = Brace(fn[5], DOWN, buff=0.15)
        label_rule = Text("rule", font_size=22, color=YELLOW)
        label_rule.next_to(brace_rule, DOWN, buff=0.1)

        with self.voiceover(
            text="f is the name of the function. x is the input variable. "
                 "And 2x plus 5 is the rule that tells us what to do with x."
        ) as tracker:
            self.play(
                GrowFromCenter(brace_name), FadeIn(label_name),
                GrowFromCenter(brace_input), FadeIn(label_input),
                GrowFromCenter(brace_rule), FadeIn(label_rule),
                run_time=tracker.duration,
            )

        # Substitution: f(2)
        sub_title = Text("Substituting x = 2:", font_size=28, color=GREY_B)
        sub_title.move_to(DOWN * 0.5)
        step1 = MathTex(r"f(2) = 2(2) + 5", font_size=40)
        step1.next_to(sub_title, DOWN, buff=0.4)
        step2 = MathTex(r"= 4 + 5", font_size=40)
        step2.next_to(step1, DOWN, buff=0.3)
        step3 = MathTex(r"= 9", font_size=40, color=GREEN)
        step3.next_to(step2, DOWN, buff=0.3)

        with self.voiceover(
            text="To find f of 2, we replace every x with 2. "
                 "So we get 2 times 2 plus 5, which is 4 plus 5, which equals 9."
        ) as tracker:
            anim_time = tracker.duration / 4
            self.play(Write(sub_title), run_time=anim_time)
            self.play(Write(step1), run_time=anim_time)
            self.play(Write(step2), run_time=anim_time)
            self.play(Write(step3), run_time=anim_time)

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 4: Reverse Problem ────────────────────────────────────
    def reverse_problem(self):
        heading = Text("Reverse Problem — Find x", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        problem = MathTex(
            r"f(x) = 3x - 2", r"\quad\text{Find }x\text{ if }f(x)=13",
            font_size=36,
        )
        problem.next_to(heading, DOWN, buff=0.6)

        with self.voiceover(
            text="Now for a reverse problem. If f of x equals 3x minus 2, "
                 "find x when f of x equals 13."
        ) as tracker:
            self.play(Write(problem), run_time=tracker.duration)

        steps = VGroup(
            MathTex(r"3x - 2 = 13", font_size=38),
            MathTex(r"3x = 15", font_size=38),
            MathTex(r"x = 5", font_size=38, color=GREEN),
        )
        steps.arrange(DOWN, buff=0.4)
        steps.next_to(problem, DOWN, buff=0.6)

        with self.voiceover(
            text="We set 3x minus 2 equal to 13. "
                 "Add 2 to both sides to get 3x equals 15. "
                 "Divide by 3 and we find x equals 5."
        ) as tracker:
            anim_time = tracker.duration / 3
            for step in steps:
                self.play(Write(step), run_time=anim_time)

        box = SurroundingRectangle(steps[-1], color=GREEN, buff=0.15)
        self.play(Create(box))
        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 5: Rational Function ──────────────────────────────────
    def rational_function(self):
        heading = Text("Rational Functions", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        fn = MathTex(r"g(x) = \frac{2x+3}{x-4}", font_size=44)
        fn.next_to(heading, DOWN, buff=0.6)

        with self.voiceover(
            text="A rational function has a fraction with x in the denominator. "
                 "Here, g of x equals 2x plus 3 over x minus 4."
        ) as tracker:
            self.play(Write(fn), run_time=tracker.duration)

        # Substitute x=2
        sub = MathTex(
            r"g(2) = \frac{2(2)+3}{2-4} = \frac{7}{-2} = -3.5",
            font_size=36,
        )
        sub.next_to(fn, DOWN, buff=0.5)

        with self.voiceover(
            text="Substituting x equals 2: the numerator is 7, "
                 "the denominator is negative 2, so g of 2 equals negative 3.5."
        ) as tracker:
            self.play(Write(sub), run_time=tracker.duration)

        # Warning about denominator
        warning = VGroup(
            MathTex(r"x - 4 \neq 0", font_size=36, color=RED),
            MathTex(r"\Rightarrow x \neq 4", font_size=36, color=RED),
        )
        warning.arrange(RIGHT, buff=0.4)
        warning.next_to(sub, DOWN, buff=0.6)

        warn_box = SurroundingRectangle(warning, color=RED, buff=0.2)
        warn_label = Text(
            "Denominator cannot be zero!",
            font_size=24, color=RED,
        )
        warn_label.next_to(warn_box, DOWN, buff=0.2)

        with self.voiceover(
            text="But be careful! The denominator cannot equal zero. "
                 "So x minus 4 cannot be zero, meaning x cannot be 4. "
                 "This is a domain restriction."
        ) as tracker:
            self.play(
                Write(warning), Create(warn_box), FadeIn(warn_label),
                run_time=tracker.duration,
            )

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
            "Always show your substitution step!\n"
            "You earn method marks even if the\n"
            "final answer is wrong.",
            font_size=26,
            line_spacing=1.3,
        )
        tip_text.next_to(tip_title, DOWN, buff=0.3)

        with self.voiceover(
            text="IB exam tip: always show your substitution step. "
                 "You earn method marks even if the final answer is wrong. "
                 "Never skip steps!"
        ) as tracker:
            self.play(FadeIn(tip_box), Write(tip_title), run_time=tracker.duration * 0.4)
            self.play(FadeIn(tip_text, shift=UP * 0.2), run_time=tracker.duration * 0.3)

        self.wait(1)
        self.play(FadeOut(Group(*self.mobjects)))

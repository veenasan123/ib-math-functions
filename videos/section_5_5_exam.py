"""
Section 5.5 — Exam Strategies
IB DP1 Mathematics: Functions Chapter 5
~2 minutes | 5 scenes | With narration
"""
from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
import numpy as np


class ExamStrategies(VoiceoverScene):
    """Complete video for Section 5.5: Exam Style Key Strategies."""

    def construct(self):
        self.set_speech_service(GTTSService())
        self.title_scene()
        self.inverse_context()
        self.inequality_flip()
        self.restricted_range()
        self.f_equals_finv_recap()
        self.summary_checklist()

    # ── Scene 1: Title ──────────────────────────────────────────────
    def title_scene(self):
        title = Text("5.5 Exam Strategies", font_size=48, weight=BOLD)
        subtitle = Text(
            "IB DP1 Mathematics — Chapter 5",
            font_size=28,
            color=GREY_B,
        )
        subtitle.next_to(title, DOWN, buff=0.4)

        with self.voiceover(
            text="Section 5.5: Exam Strategies. "
                 "Let's review the key techniques you need for the IB exam."
        ) as tracker:
            self.play(Write(title), run_time=tracker.duration / 2)
            self.play(FadeIn(subtitle, shift=UP * 0.3), run_time=tracker.duration / 4)

        self.play(FadeOut(title), FadeOut(subtitle))

    # ── Scene 2: Inverse in Context ─────────────────────────────────
    def inverse_context(self):
        heading = Text("Inverse in Context", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        context = Text(
            "A company's profit P (dollars) for n items sold:",
            font_size=24, color=GREY_B,
        )
        context.next_to(heading, DOWN, buff=0.4)

        fn = MathTex(r"P(n) = 40n - 130", font_size=40)
        fn.next_to(context, DOWN, buff=0.4)

        with self.voiceover(
            text="In context problems, the inverse has real-world meaning. "
                 "A company's profit is P of n equals 40n minus 130."
        ) as tracker:
            self.play(Write(context), run_time=tracker.duration * 0.3)
            self.play(Write(fn), run_time=tracker.duration * 0.5)

        question = MathTex(
            r"\text{Find } P^{-1}(1790)",
            font_size=36, color=YELLOW,
        )
        question.next_to(fn, DOWN, buff=0.4)

        meaning = Text(
            '"How many items for $1790 profit?"',
            font_size=22, color=GREY_B,
        )
        meaning.next_to(question, DOWN, buff=0.2)

        with self.voiceover(
            text="Find P inverse of 1790. "
                 "This means: how many items must be sold to earn 1790 dollars profit?"
        ) as tracker:
            self.play(Write(question), run_time=tracker.duration * 0.4)
            self.play(Write(meaning), run_time=tracker.duration * 0.3)

        steps = VGroup(
            MathTex(r"40n - 130 = 1790", font_size=34),
            MathTex(r"40n = 1920", font_size=34),
            MathTex(r"n = 48", font_size=34, color=GREEN),
        )
        steps.arrange(DOWN, buff=0.3)
        steps.next_to(meaning, DOWN, buff=0.4)

        with self.voiceover(
            text="Set 40n minus 130 equal to 1790. "
                 "Add 130 to get 40n equals 1920. "
                 "Divide by 40: n equals 48 items."
        ) as tracker:
            anim_time = tracker.duration / 3
            for step in steps:
                self.play(Write(step), run_time=anim_time)

        box = SurroundingRectangle(steps[-1], color=GREEN, buff=0.12)
        self.play(Create(box))
        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 3: Inequality Flip ────────────────────────────────────
    def inequality_flip(self):
        heading = Text("The Inequality Flip", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        problem = Text(
            "Company A charges $35n. Company B charges $40n - $130.",
            font_size=24, color=GREY_B,
        )
        problem.next_to(heading, DOWN, buff=0.4)
        q = Text(
            "When is Company A cheaper?",
            font_size=24, color=YELLOW,
        )
        q.next_to(problem, DOWN, buff=0.2)

        with self.voiceover(
            text="Company A charges 35n dollars. Company B charges 40n minus 130 dollars. "
                 "When is Company A cheaper?"
        ) as tracker:
            self.play(Write(problem), Write(q), run_time=tracker.duration)

        steps = VGroup(
            MathTex(r"35n < 40n - 130", font_size=36),
            MathTex(r"-5n < -130", font_size=36),
        )
        steps.arrange(DOWN, buff=0.4)
        steps.next_to(q, DOWN, buff=0.5)

        with self.voiceover(
            text="Set up the inequality: 35n less than 40n minus 130. "
                 "Subtract 40n from both sides to get negative 5n less than negative 130."
        ) as tracker:
            self.play(Write(steps[0]), run_time=tracker.duration * 0.4)
            self.play(Write(steps[1]), run_time=tracker.duration * 0.4)

        # The flip!
        flip_warning = Text(
            "Divide by negative  \u2192  FLIP the sign!",
            font_size=28, color=RED, weight=BOLD,
        )
        flip_warning.next_to(steps, DOWN, buff=0.4)
        flash_rect = SurroundingRectangle(flip_warning, color=RED, buff=0.15)

        with self.voiceover(
            text="Now here's the critical step everyone forgets: "
                 "when you divide by a negative number, you must FLIP the inequality sign!"
        ) as tracker:
            self.play(
                Write(flip_warning), Create(flash_rect),
                run_time=tracker.duration * 0.6,
            )
            self.play(
                flash_rect.animate.set_stroke(width=8),
                rate_func=there_and_back,
                run_time=0.6,
            )

        result = MathTex(r"n > 26", font_size=40, color=GREEN)
        result.next_to(flip_warning, DOWN, buff=0.4)
        result_box = SurroundingRectangle(result, color=GREEN, buff=0.12)

        interpret = Text(
            "Company A is cheaper when more than 26 items are sold",
            font_size=22, color=GREY_B,
        )
        interpret.next_to(result_box, DOWN, buff=0.3)

        with self.voiceover(
            text="So n is greater than 26. Company A is cheaper when more than 26 items are sold."
        ) as tracker:
            self.play(Write(result), Create(result_box), run_time=tracker.duration * 0.5)
            self.play(Write(interpret), run_time=tracker.duration * 0.3)

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 4: Range of Restricted Function ───────────────────────
    def restricted_range(self):
        heading = Text("Range of a Restricted Function", font_size=34, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        fn = MathTex(
            r"g(x) = 3 - \frac{12}{x+3}, \quad x \in [-9, 9]",
            font_size=34,
        )
        fn.next_to(heading, DOWN, buff=0.4)

        with self.voiceover(
            text="Finding the range of a restricted function requires checking endpoints and behaviour near asymptotes. "
                 "Consider g of x equals 3 minus 12 over x plus 3 on the interval negative 9 to 9."
        ) as tracker:
            self.play(Write(fn), run_time=tracker.duration)

        axes = Axes(
            x_range=[-10, 10, 2], y_range=[-5, 10, 2],
            x_length=7, y_length=4.5,
            axis_config={"include_numbers": True, "font_size": 18},
        ).move_to(DOWN * 0.8)
        axis_labels = axes.get_axis_labels(
            MathTex("x", font_size=24), MathTex("y", font_size=24),
        )

        left = axes.plot(
            lambda x: 3 - 12 / (x + 3), x_range=[-9, -3.3], color=BLUE,
        )
        right = axes.plot(
            lambda x: 3 - 12 / (x + 3), x_range=[-2.7, 9], color=BLUE,
        )
        va = DashedLine(
            axes.c2p(-3, -5), axes.c2p(-3, 10), color=RED, dash_length=0.1,
        )

        with self.voiceover(
            text="There's a vertical asymptote at x equals negative 3. "
                 "The graph splits into two branches."
        ) as tracker:
            self.play(
                Create(axes), Write(axis_labels),
                Create(left), Create(right), Create(va),
                run_time=tracker.duration,
            )

        # Endpoints
        ep1 = Dot(axes.c2p(-9, 5), color=GREEN, radius=0.08)
        ep2 = Dot(axes.c2p(9, 2), color=GREEN, radius=0.08)
        ep1_label = MathTex(r"(-9, 5)", font_size=20, color=GREEN)
        ep1_label.next_to(ep1, UP + LEFT, buff=0.1)
        ep2_label = MathTex(r"(9, 2)", font_size=20, color=GREEN)
        ep2_label.next_to(ep2, DOWN + RIGHT, buff=0.1)

        ha = DashedLine(
            axes.c2p(-10, 3), axes.c2p(10, 3), color=ORANGE, dash_length=0.1,
        )
        ha_label = MathTex(r"y = 3", font_size=20, color=ORANGE)
        ha_label.next_to(axes.c2p(8, 3), UP, buff=0.1)

        with self.voiceover(
            text="Evaluating the endpoints: g of negative 9 equals 5, and g of 9 equals 2. "
                 "The horizontal asymptote is at y equals 3."
        ) as tracker:
            self.play(
                FadeIn(ep1), Write(ep1_label),
                FadeIn(ep2), Write(ep2_label),
                Create(ha), Write(ha_label),
                run_time=tracker.duration,
            )

        range_text = MathTex(
            r"\text{Range: } y \leq 2 \;\text{ or }\; y \geq 5",
            font_size=30, color=YELLOW,
        )
        range_text.to_edge(DOWN, buff=0.3)
        range_box = SurroundingRectangle(range_text, color=YELLOW, buff=0.12)

        with self.voiceover(
            text="The range is y less than or equal to 2, or y greater than or equal to 5. "
                 "The values between 2 and 5 are never reached."
        ) as tracker:
            self.play(Write(range_text), Create(range_box), run_time=tracker.duration)

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 5: f = f⁻¹ pattern recap ─────────────────────────────
    def f_equals_finv_recap(self):
        heading = Text("Quick Recap: f(x) = f\u207B\u00B9(x)", font_size=34, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        fn = MathTex(r"g(x) = 2x + \ln(x - 2)", font_size=36)
        fn.next_to(heading, DOWN, buff=0.5)

        question = MathTex(
            r"\text{Solve } g(x) = g^{-1}(x)",
            font_size=36, color=YELLOW,
        )
        question.next_to(fn, DOWN, buff=0.4)

        with self.voiceover(
            text="One more recap of the big trick. "
                 "Solve g of x equals g inverse of x for this function."
        ) as tracker:
            self.play(Write(fn), run_time=tracker.duration * 0.4)
            self.play(Write(question), run_time=tracker.duration * 0.4)

        trick = VGroup(
            MathTex(r"\text{Use the trick: solve } g(x) = x", font_size=30, color=TEAL),
            MathTex(r"2x + \ln(x-2) = x", font_size=34),
            MathTex(r"x + \ln(x-2) = 0", font_size=34),
        )
        trick.arrange(DOWN, buff=0.35)
        trick.next_to(question, DOWN, buff=0.5)

        with self.voiceover(
            text="Use the trick: solve g of x equals x. "
                 "So 2x plus ln of x minus 2 equals x. "
                 "Simplify to x plus ln of x minus 2 equals 0."
        ) as tracker:
            anim_time = tracker.duration / 3
            for t in trick:
                self.play(Write(t), run_time=anim_time)

        calc = Text(
            "Use GDC (TI-84): x = 2.28 (3 s.f.)",
            font_size=26, color=GREEN,
        )
        calc.next_to(trick, DOWN, buff=0.4)
        calc_box = SurroundingRectangle(calc, color=GREEN, buff=0.12)

        with self.voiceover(
            text="This can't be solved algebraically, so use your TI-84 calculator. "
                 "The answer is x equals 2.28 to 3 significant figures."
        ) as tracker:
            self.play(Write(calc), Create(calc_box), run_time=tracker.duration)

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Final Slide: Summary Checklist ──────────────────────────────
    def summary_checklist(self):
        title = Text("Top 5 IB Mistakes to Avoid", font_size=36, weight=BOLD, color=RED)
        title.to_edge(UP)
        self.play(Write(title))

        mistakes = [
            "1. Forgetting to show substitution steps",
            "2. Not flipping inequality when dividing by negative",
            '3. Writing f\u207B\u00B9(x) = 1/f(x)  \u2014  it\'s the INVERSE, not reciprocal',
            "4. Missing domain restrictions (roots, fractions, logs)",
            "5. Forgetting asymptotes when sketching rational functions",
        ]

        items = VGroup()
        for m in mistakes:
            t = Text(m, font_size=24)
            items.add(t)
        items.arrange(DOWN, buff=0.35, aligned_edge=LEFT)
        items.next_to(title, DOWN, buff=0.5)
        items.shift(LEFT * 0.5)

        narrations = [
            "Mistake 1: forgetting to show your substitution steps. Always show your working!",
            "Mistake 2: not flipping the inequality sign when dividing by a negative.",
            "Mistake 3: writing f inverse as 1 over f. Remember, it's the inverse function, not the reciprocal.",
            "Mistake 4: missing domain restrictions from roots, fractions, and logarithms.",
            "Mistake 5: forgetting to draw asymptotes when sketching rational functions.",
        ]

        for item, narration in zip(items, narrations):
            with self.voiceover(text=narration) as tracker:
                self.play(FadeIn(item, shift=RIGHT * 0.3), run_time=min(tracker.duration, 1.5))

        # Good luck message
        luck = Text(
            "Good luck on your exam!",
            font_size=36, weight=BOLD, color=GREEN,
        )
        luck.to_edge(DOWN, buff=0.5)

        with self.voiceover(
            text="Good luck on your IB exam! You've got this!"
        ) as tracker:
            self.play(Write(luck), run_time=tracker.duration)

        self.wait(1)
        self.play(FadeOut(Group(*self.mobjects)))

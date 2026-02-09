"""
Section 5.4 — Sketching Graphs
IB DP1 Mathematics: Functions Chapter 5
~3 minutes | 6 scenes | With narration
"""
from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
import numpy as np


class SketchingGraphs(VoiceoverScene):
    """Complete video for Section 5.4: Sketching Graphs."""

    def construct(self):
        self.set_speech_service(GTTSService())
        self.title_scene()
        self.key_features()
        self.vertical_asymptotes()
        self.horizontal_asymptotes()
        self.intersections()
        self.optimization()
        self.exam_tip()

    # ── Scene 1: Title ──────────────────────────────────────────────
    def title_scene(self):
        title = Text("5.4 Sketching Graphs", font_size=48, weight=BOLD)
        subtitle = Text(
            "IB DP1 Mathematics — Chapter 5",
            font_size=28,
            color=GREY_B,
        )
        subtitle.next_to(title, DOWN, buff=0.4)

        with self.voiceover(
            text="Section 5.4: Sketching Graphs. "
                 "Let's learn how to identify key features and sketch functions."
        ) as tracker:
            self.play(Write(title), run_time=tracker.duration / 2)
            self.play(FadeIn(subtitle, shift=UP * 0.3), run_time=tracker.duration / 4)

        self.play(FadeOut(title), FadeOut(subtitle))

    # ── Scene 2: Key Features ───────────────────────────────────────
    def key_features(self):
        heading = Text("Key Graph Features", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        axes = Axes(
            x_range=[-3, 5, 1], y_range=[-3, 5, 1],
            x_length=7, y_length=5,
            axis_config={"include_numbers": True, "font_size": 20},
        ).move_to(DOWN * 0.3 + LEFT * 1)
        axis_labels = axes.get_axis_labels(
            MathTex("x", font_size=24), MathTex("y", font_size=24),
        )

        # Polynomial-like curve: -(x-1)^2 + 3
        graph = axes.plot(
            lambda x: -(x - 1) ** 2 + 3,
            x_range=[-1.5, 3.5],
            color=BLUE,
        )

        with self.voiceover(
            text="Every graph has key features you should label: "
                 "intercepts, vertices, and asymptotes. Let's identify them."
        ) as tracker:
            self.play(Create(axes), Write(axis_labels), run_time=tracker.duration * 0.4)
            self.play(Create(graph), run_time=tracker.duration * 0.4)

        # 1. y-intercept
        y_int = Dot(axes.c2p(0, 2), color=GREEN, radius=0.08)
        y_label = MathTex(r"(0,2)", font_size=22, color=GREEN)
        y_label.next_to(y_int, LEFT, buff=0.15)
        feat1 = Text("y-intercept", font_size=20, color=GREEN)
        feat1.move_to(RIGHT * 4.5 + UP * 2)

        with self.voiceover(
            text="The y-intercept is where the graph crosses the y-axis. Here it's at 0 comma 2."
        ) as tracker:
            self.play(FadeIn(y_int), Write(y_label), Write(feat1), run_time=tracker.duration)

        # 2. x-intercepts
        x1 = 1 - np.sqrt(3)
        x2 = 1 + np.sqrt(3)
        xi1 = Dot(axes.c2p(x1, 0), color=YELLOW, radius=0.08)
        xi2 = Dot(axes.c2p(x2, 0), color=YELLOW, radius=0.08)
        feat2 = Text("x-intercepts", font_size=20, color=YELLOW)
        feat2.next_to(feat1, DOWN, buff=0.3)

        with self.voiceover(
            text="The x-intercepts are where the graph crosses the x-axis."
        ) as tracker:
            self.play(FadeIn(xi1), FadeIn(xi2), Write(feat2), run_time=tracker.duration)

        # 3. Vertex
        vertex = Dot(axes.c2p(1, 3), color=RED, radius=0.08)
        v_label = MathTex(r"(1,3)", font_size=22, color=RED)
        v_label.next_to(vertex, UP + RIGHT, buff=0.1)
        feat3 = Text("vertex (max)", font_size=20, color=RED)
        feat3.next_to(feat2, DOWN, buff=0.3)

        with self.voiceover(
            text="The vertex is the highest or lowest point. This parabola has a maximum at 1 comma 3."
        ) as tracker:
            self.play(FadeIn(vertex), Write(v_label), Write(feat3), run_time=tracker.duration)

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 3: Vertical Asymptotes ────────────────────────────────
    def vertical_asymptotes(self):
        heading = Text("Vertical Asymptotes", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        fn_label = MathTex(r"f(x) = \frac{2}{x-3}", font_size=40)
        fn_label.next_to(heading, DOWN, buff=0.4)

        with self.voiceover(
            text="A vertical asymptote occurs where the denominator equals zero. "
                 "For f of x equals 2 over x minus 3, the denominator is zero when x equals 3."
        ) as tracker:
            self.play(Write(fn_label), run_time=tracker.duration)

        axes = Axes(
            x_range=[-2, 8, 1], y_range=[-6, 6, 2],
            x_length=7, y_length=4.5,
            axis_config={"include_numbers": True, "font_size": 20},
        ).move_to(DOWN * 0.8)
        axis_labels = axes.get_axis_labels(
            MathTex("x", font_size=24), MathTex("y", font_size=24),
        )
        self.play(Create(axes), Write(axis_labels))

        left_branch = axes.plot(
            lambda x: 2 / (x - 3), x_range=[-1.5, 2.6], color=BLUE,
        )
        right_branch = axes.plot(
            lambda x: 2 / (x - 3), x_range=[3.4, 7.5], color=BLUE,
        )

        with self.voiceover(
            text="Watch how the graph shoots off towards positive and negative infinity near x equals 3."
        ) as tracker:
            self.play(Create(left_branch), Create(right_branch), run_time=tracker.duration)

        # VA at x=3
        va_line = DashedLine(
            axes.c2p(3, -6), axes.c2p(3, 6),
            color=RED, dash_length=0.1,
        )
        va_label = MathTex(r"x = 3", font_size=26, color=RED)
        va_label.next_to(axes.c2p(3, 5), RIGHT, buff=0.15)

        expl = MathTex(
            r"\text{Denom} = 0: \; x - 3 = 0 \;\Rightarrow\; x = 3",
            font_size=28, color=RED,
        )
        expl.to_edge(DOWN, buff=0.3)

        with self.voiceover(
            text="The vertical asymptote is the dashed red line at x equals 3. "
                 "The graph gets closer and closer but never touches it."
        ) as tracker:
            self.play(
                Create(va_line), Write(va_label), Write(expl),
                run_time=tracker.duration,
            )

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 4: Horizontal Asymptotes ──────────────────────────────
    def horizontal_asymptotes(self):
        heading = Text("Horizontal Asymptotes", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        cases = [
            {
                "title": "Same degree",
                "fn": r"\frac{3x+1}{2x-5}",
                "ha": r"y = \frac{3}{2}",
                "color": BLUE,
            },
            {
                "title": "Num < Denom",
                "fn": r"\frac{x+1}{x^2+4}",
                "ha": r"y = 0",
                "color": GREEN,
            },
            {
                "title": "Num > Denom",
                "fn": r"\frac{x^2}{x-1}",
                "ha": r"\text{No HA}",
                "color": RED,
            },
        ]

        cards = VGroup()
        for c in cases:
            box = RoundedRectangle(
                width=3.5, height=3.5, corner_radius=0.15,
                fill_color=DARK_BLUE, fill_opacity=0.3, stroke_color=c["color"],
            )
            t = Text(c["title"], font_size=22, weight=BOLD, color=c["color"])
            t.next_to(box.get_top(), DOWN, buff=0.25)
            fn = MathTex(c["fn"], font_size=30)
            fn.next_to(t, DOWN, buff=0.3)
            ha = MathTex(c["ha"], font_size=30, color=c["color"])
            ha.next_to(fn, DOWN, buff=0.4)
            ha_box = SurroundingRectangle(ha, color=c["color"], buff=0.1)
            card = VGroup(box, t, fn, ha, ha_box)
            cards.add(card)

        cards.arrange(RIGHT, buff=0.4)
        cards.next_to(heading, DOWN, buff=0.5)
        cards.scale_to_fit_width(12)

        narrations = [
            "Case 1: when numerator and denominator have the same degree, "
            "the horizontal asymptote is the ratio of leading coefficients. "
            "Here, y equals 3 over 2.",

            "Case 2: when the numerator has a lower degree than the denominator, "
            "the horizontal asymptote is always y equals 0.",

            "Case 3: when the numerator has a higher degree, "
            "there is no horizontal asymptote.",
        ]

        for card, narration in zip(cards, narrations):
            with self.voiceover(text=narration) as tracker:
                self.play(FadeIn(card), run_time=min(tracker.duration, 2))

        rule = Text(
            "Compare degrees of numerator and denominator",
            font_size=24, color=GREY_B,
        )
        rule.to_edge(DOWN, buff=0.4)
        self.play(Write(rule))
        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 5: Intersections ──────────────────────────────────────
    def intersections(self):
        heading = Text("Finding Intersections", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        axes = Axes(
            x_range=[-3, 4, 1], y_range=[-5, 3, 1],
            x_length=6.5, y_length=5,
            axis_config={"include_numbers": True, "font_size": 20},
        ).move_to(DOWN * 0.3 + LEFT * 1.5)
        axis_labels = axes.get_axis_labels(
            MathTex("x", font_size=24), MathTex("y", font_size=24),
        )
        self.play(Create(axes), Write(axis_labels))

        parabola = axes.plot(lambda x: -(x**2), x_range=[-2.3, 2.3], color=BLUE)
        p_label = MathTex(r"y = -x^2", font_size=24, color=BLUE)
        p_label.next_to(axes.c2p(-2, -4), LEFT, buff=0.15)

        line = axes.plot(lambda x: 2 * x - 1, x_range=[-1.5, 3.5], color=GREEN)
        l_label = MathTex(r"y = 2x - 1", font_size=24, color=GREEN)
        l_label.next_to(axes.c2p(3, 5), RIGHT, buff=0.15)

        with self.voiceover(
            text="To find where two graphs intersect, set them equal to each other. "
                 "Here we have y equals negative x squared and y equals 2x minus 1."
        ) as tracker:
            self.play(Create(parabola), Write(p_label), run_time=tracker.duration * 0.4)
            self.play(Create(line), Write(l_label), run_time=tracker.duration * 0.4)

        x1_val = -1 - np.sqrt(2)
        x2_val = -1 + np.sqrt(2)
        y1 = -(x1_val**2)
        y2 = -(x2_val**2)

        dot1 = Dot(axes.c2p(x1_val, y1), color=YELLOW, radius=0.08)
        dot2 = Dot(axes.c2p(x2_val, y2), color=YELLOW, radius=0.08)

        algebra = VGroup(
            MathTex(r"-x^2 = 2x - 1", font_size=28),
            MathTex(r"x^2 + 2x - 1 = 0", font_size=28),
            MathTex(r"x = \frac{-2 \pm \sqrt{8}}{2}", font_size=28),
            MathTex(r"x = -1 \pm \sqrt{2}", font_size=28, color=YELLOW),
        )
        algebra.arrange(DOWN, buff=0.25)
        algebra.move_to(RIGHT * 4 + DOWN * 0.5)

        with self.voiceover(
            text="Set negative x squared equal to 2x minus 1. "
                 "Rearrange to get x squared plus 2x minus 1 equals 0. "
                 "Using the quadratic formula, x equals negative 1 plus or minus root 2."
        ) as tracker:
            self.play(FadeIn(dot1), FadeIn(dot2), run_time=0.5)
            anim_time = tracker.duration * 0.22
            for step in algebra:
                self.play(Write(step), run_time=anim_time)

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Scene 6: Optimization ───────────────────────────────────────
    def optimization(self):
        heading = Text("Optimization (Vertex)", font_size=36, weight=BOLD)
        heading.to_edge(UP)
        self.play(Write(heading))

        problem = MathTex(
            r"P(q) = 9.4q - 0.02q^2 - 420",
            font_size=36,
        )
        problem.next_to(heading, DOWN, buff=0.4)

        with self.voiceover(
            text="In optimization problems, we find the vertex of a parabola. "
                 "Here, profit P depends on quantity q."
        ) as tracker:
            self.play(Write(problem), run_time=tracker.duration)

        axes = Axes(
            x_range=[0, 500, 100], y_range=[-500, 800, 200],
            x_length=7, y_length=4,
            axis_config={"include_numbers": True, "font_size": 18},
        ).move_to(DOWN * 1)
        axis_labels = axes.get_axis_labels(
            MathTex("q", font_size=24), MathTex("P", font_size=24),
        )

        graph = axes.plot(
            lambda q: 9.4 * q - 0.02 * q**2 - 420,
            x_range=[0, 470],
            color=BLUE,
        )

        with self.voiceover(
            text="The profit function is a downward-opening parabola."
        ) as tracker:
            self.play(Create(axes), Write(axis_labels), run_time=tracker.duration * 0.4)
            self.play(Create(graph), run_time=tracker.duration * 0.4)

        # Vertex
        vertex = Dot(axes.c2p(235, 684.5), color=RED, radius=0.1)
        v_label = MathTex(r"(235,\, 684.50)", font_size=24, color=RED)
        v_label.next_to(vertex, UP + RIGHT, buff=0.15)
        h_dash = DashedLine(
            axes.c2p(0, 684.5), axes.c2p(235, 684.5),
            color=RED, dash_length=0.08,
        )
        v_dash = DashedLine(
            axes.c2p(235, 0), axes.c2p(235, 684.5),
            color=RED, dash_length=0.08,
        )

        answer = MathTex(
            r"\text{Max profit} = \$684.50 \text{ at } q = 235",
            font_size=28, color=GREEN,
        )
        answer.to_edge(DOWN, buff=0.3)

        with self.voiceover(
            text="The vertex is at q equals 235 with a maximum profit of 684 dollars and 50 cents. "
                 "This is found using q equals negative b over 2a."
        ) as tracker:
            self.play(
                FadeIn(vertex), Write(v_label),
                Create(h_dash), Create(v_dash),
                run_time=tracker.duration * 0.6,
            )
            self.play(Write(answer), run_time=tracker.duration * 0.3)

        self.wait(0.5)
        self.play(FadeOut(Group(*self.mobjects)))

    # ── Exam Tip ────────────────────────────────────────────────────
    def exam_tip(self):
        tip_box = RoundedRectangle(
            width=10, height=3, corner_radius=0.3,
            fill_color=GOLD_E, fill_opacity=0.15, stroke_color=GOLD,
        )
        tip_title = Text("IB Exam Tip", font_size=32, weight=BOLD, color=GOLD)
        tip_title.next_to(tip_box.get_top(), DOWN, buff=0.3)
        tip_text = Text(
            "Systematic sketch checklist:\n"
            "1. Vertical asymptotes (denom = 0)\n"
            "2. Horizontal asymptotes (degree rule)\n"
            "3. Intercepts (x=0 and y=0)\n"
            "4. Connect the dots!",
            font_size=24,
            line_spacing=1.3,
        )
        tip_text.next_to(tip_title, DOWN, buff=0.25)

        with self.voiceover(
            text="IB exam tip: follow a systematic checklist when sketching. "
                 "Step 1: find vertical asymptotes. "
                 "Step 2: find horizontal asymptotes using the degree rule. "
                 "Step 3: find the intercepts. "
                 "Step 4: connect everything into a smooth curve."
        ) as tracker:
            self.play(FadeIn(tip_box), Write(tip_title), run_time=tracker.duration * 0.3)
            self.play(FadeIn(tip_text, shift=UP * 0.2), run_time=tracker.duration * 0.4)

        self.wait(1)
        self.play(FadeOut(Group(*self.mobjects)))

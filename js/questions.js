// ============================================================
// questions.js — All 49 questions for Chapter 5: Functions
// ============================================================

const SECTIONS = [
  { id: "5.1", title: "Concept of a Function", count: 5, video: "videos/media/videos/section_5_1_concept/480p15/WhatIsAFunction.mp4", subtitle: "videos/media/videos/section_5_1_concept/480p15/WhatIsAFunction.vtt" },
  { id: "5.2", title: "Domain and Range", count: 14, video: "videos/media/videos/section_5_2_domain/480p15/DomainAndRange.mp4", subtitle: "videos/media/videos/section_5_2_domain/480p15/DomainAndRange.vtt" },
  { id: "5.3", title: "Inverse Functions", count: 10, video: "videos/media/videos/section_5_3_inverse/480p15/InverseFunctions.mp4", subtitle: "videos/media/videos/section_5_3_inverse/480p15/InverseFunctions.vtt" },
  { id: "5.4", title: "Sketching Graphs", count: 12, video: "videos/media/videos/section_5_4_graphs/480p15/SketchingGraphs.mp4", subtitle: "videos/media/videos/section_5_4_graphs/480p15/SketchingGraphs.vtt" },
  { id: "5.5", title: "Exam Style Questions", count: 8, video: "videos/media/videos/section_5_5_exam/480p15/ExamStrategies.mp4", subtitle: "videos/media/videos/section_5_5_exam/480p15/ExamStrategies.vtt" }
];

const QUESTIONS = [

  // ===================== 5.1 Concept of a Function =====================

  {
    id: "5.1.1", section: "5.1", label: "Question 1",
    marks: null,
    statement: "If \\(f(x) = 2x + 5\\), find:",
    parts: [
      {
        label: "a", text: "\\(f(2)\\)",
        steps: [
          { type: "concept", content: "Substitute \\(x = 2\\) into the function \\(f(x) = 2x + 5\\)." },
          { type: "algebra", content: "\\(f(2) = 2(2) + 5 = 4 + 5 = 9\\)" },
          { type: "answer", content: "\\(f(2) = 9\\)" }
        ],
        answer: "\\(f(2) = 9\\)"
      },
      {
        label: "b", text: "\\(f(5)\\)",
        steps: [
          { type: "concept", content: "Substitute \\(x = 5\\) into \\(f(x) = 2x + 5\\)." },
          { type: "algebra", content: "\\(f(5) = 2(5) + 5 = 10 + 5 = 15\\)" },
          { type: "answer", content: "\\(f(5) = 15\\)" }
        ],
        answer: "\\(f(5) = 15\\)"
      },
      {
        label: "c", text: "\\(f(-3)\\)",
        steps: [
          { type: "concept", content: "Substitute \\(x = -3\\). Remember: \\(2(-3) = -6\\)." },
          { type: "algebra", content: "\\(f(-3) = 2(-3) + 5 = -6 + 5 = -1\\)" },
          { type: "answer", content: "\\(f(-3) = -1\\)" }
        ],
        answer: "\\(f(-3) = -1\\)"
      }
    ],
    hints: [
      "Replace every \\(x\\) in the formula with the given number.",
      "Remember order of operations: multiply before adding."
    ],
    examTip: "Always show the substitution step clearly — you earn method marks for it even if your arithmetic slips.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_1_1.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_1_1.vtt"
  },

  {
    id: "5.1.2", section: "5.1", label: "Question 2",
    marks: null,
    statement: "For \\(f(x) = 2x^2 - 3x + 2\\), find:",
    parts: [
      {
        label: "a", text: "\\(f(0)\\)",
        steps: [
          { type: "concept", content: "Substitute \\(x = 0\\) into \\(f(x) = 2x^2 - 3x + 2\\)." },
          { type: "algebra", content: "\\(f(0) = 2(0)^2 - 3(0) + 2 = 0 - 0 + 2 = 2\\)" },
          { type: "answer", content: "\\(f(0) = 2\\)" }
        ],
        answer: "\\(f(0) = 2\\)"
      },
      {
        label: "b", text: "\\(f(3)\\)",
        steps: [
          { type: "concept", content: "Substitute \\(x = 3\\)." },
          { type: "algebra", content: "\\(f(3) = 2(3)^2 - 3(3) + 2 = 2(9) - 9 + 2 = 18 - 9 + 2 = 11\\)" },
          { type: "answer", content: "\\(f(3) = 11\\)" }
        ],
        answer: "\\(f(3) = 11\\)"
      },
      {
        label: "c", text: "\\(f(-4)\\)",
        steps: [
          { type: "concept", content: "Substitute \\(x = -4\\). Remember: \\((-4)^2 = 16\\), not \\(-16\\)." },
          { type: "algebra", content: "\\(f(-4) = 2(-4)^2 - 3(-4) + 2 = 2(16) + 12 + 2 = 32 + 12 + 2 = 46\\)" },
          { type: "note", content: "Common mistake: students write \\((-4)^2 = -16\\). The square of a negative number is always positive!" },
          { type: "answer", content: "\\(f(-4) = 46\\)" }
        ],
        answer: "\\(f(-4) = 46\\)"
      }
    ],
    hints: [
      "This is a quadratic — substitute carefully and use BEDMAS/BODMAS.",
      "When squaring a negative number, the result is always positive.",
      "\\(-3(-4) = +12\\), because negative times negative equals positive."
    ],
    examTip: "When substituting negative numbers into quadratics, always use brackets: \\((-4)^2\\), not \\(-4^2\\).",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_1_2.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_1_2.vtt"
  },

  {
    id: "5.1.3", section: "5.1", label: "Question 3",
    marks: null,
    statement: "If \\(h(x) = 2^x + 3\\), find:",
    parts: [
      {
        label: "a", text: "\\(h(1)\\)",
        steps: [
          { type: "concept", content: "Substitute \\(x = 1\\) into \\(h(x) = 2^x + 3\\)." },
          { type: "algebra", content: "\\(h(1) = 2^1 + 3 = 2 + 3 = 5\\)" },
          { type: "answer", content: "\\(h(1) = 5\\)" }
        ],
        answer: "\\(h(1) = 5\\)"
      },
      {
        label: "b", text: "\\(h(0)\\)",
        steps: [
          { type: "concept", content: "Remember: any number to the power of 0 is 1, so \\(2^0 = 1\\)." },
          { type: "algebra", content: "\\(h(0) = 2^0 + 3 = 1 + 3 = 4\\)" },
          { type: "answer", content: "\\(h(0) = 4\\)" }
        ],
        answer: "\\(h(0) = 4\\)"
      },
      {
        label: "c", text: "\\(h(-1)\\)",
        steps: [
          { type: "concept", content: "Negative exponent: \\(2^{-1} = \\frac{1}{2}\\)." },
          { type: "algebra", content: "\\(h(-1) = 2^{-1} + 3 = \\frac{1}{2} + 3 = \\frac{7}{2} = 3.5\\)" },
          { type: "answer", content: "\\(h(-1) = \\frac{7}{2} = 3.5\\)" }
        ],
        answer: "\\(h(-1) = \\frac{7}{2} = 3.5\\)"
      }
    ],
    hints: [
      "This is an exponential function — the variable is in the exponent.",
      "Key rules: \\(a^0 = 1\\) and \\(a^{-n} = \\frac{1}{a^n}\\)."
    ],
    examTip: "Know your exponent rules: \\(a^0 = 1\\), \\(a^{-1} = \\frac{1}{a}\\). These come up frequently in IB exams.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_1_3.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_1_3.vtt"
  },

  {
    id: "5.1.4", section: "5.1", label: "Question 4",
    marks: null,
    statement: "It is known that \\(f(x) = 3x - 2\\). Find \\(x\\) if:",
    parts: [
      {
        label: "a", text: "\\(f(x) = 13\\)",
        steps: [
          { type: "concept", content: "Set \\(f(x) = 13\\) and solve for \\(x\\)." },
          { type: "algebra", content: "\\(3x - 2 = 13\\)" },
          { type: "algebra", content: "\\(3x = 15\\)" },
          { type: "algebra", content: "\\(x = 5\\)" },
          { type: "answer", content: "\\(x = 5\\)" }
        ],
        answer: "\\(x = 5\\)"
      },
      {
        label: "b", text: "\\(f(x) = -14\\)",
        steps: [
          { type: "concept", content: "Set \\(f(x) = -14\\) and solve for \\(x\\)." },
          { type: "algebra", content: "\\(3x - 2 = -14\\)" },
          { type: "algebra", content: "\\(3x = -12\\)" },
          { type: "algebra", content: "\\(x = -4\\)" },
          { type: "answer", content: "\\(x = -4\\)" }
        ],
        answer: "\\(x = -4\\)"
      }
    ],
    hints: [
      "Instead of substituting a number for \\(x\\), you're given the output and need to find the input.",
      "Set the function rule equal to the given value and solve the equation."
    ],
    examTip: "\"Find \\(x\\) if \\(f(x) = k\\)\" means solve the equation. Set the function expression equal to \\(k\\).",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_1_4.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_1_4.vtt"
  },

  {
    id: "5.1.5", section: "5.1", label: "Question 5",
    marks: null,
    statement: "Suppose \\(g(x) = \\dfrac{2x+3}{x-4}\\).",
    parts: [
      {
        label: "a(i)", text: "Evaluate \\(g(2)\\)",
        steps: [
          { type: "concept", content: "Substitute \\(x = 2\\) into \\(g(x) = \\frac{2x+3}{x-4}\\)." },
          { type: "algebra", content: "\\(g(2) = \\frac{2(2)+3}{2-4} = \\frac{7}{-2} = -\\frac{7}{2}\\)" },
          { type: "answer", content: "\\(g(2) = -\\frac{7}{2} = -3.5\\)" }
        ],
        answer: "\\(g(2) = -\\frac{7}{2} = -3.5\\)"
      },
      {
        label: "a(ii)", text: "Evaluate \\(g(0)\\)",
        steps: [
          { type: "concept", content: "Substitute \\(x = 0\\)." },
          { type: "algebra", content: "\\(g(0) = \\frac{2(0)+3}{0-4} = \\frac{3}{-4} = -\\frac{3}{4}\\)" },
          { type: "answer", content: "\\(g(0) = -\\frac{3}{4} = -0.75\\)" }
        ],
        answer: "\\(g(0) = -\\frac{3}{4} = -0.75\\)"
      },
      {
        label: "b", text: "Find \\(x\\) such that \\(g(x) = -3\\)",
        steps: [
          { type: "concept", content: "Set \\(g(x) = -3\\) and solve for \\(x\\)." },
          { type: "algebra", content: "\\(\\frac{2x+3}{x-4} = -3\\)" },
          { type: "algebra", content: "Multiply both sides by \\((x-4)\\): \\(2x + 3 = -3(x - 4)\\)" },
          { type: "algebra", content: "\\(2x + 3 = -3x + 12\\)" },
          { type: "algebra", content: "\\(5x = 9\\)" },
          { type: "algebra", content: "\\(x = \\frac{9}{5} = 1.8\\)" },
          { type: "note", content: "Check: \\(x = 1.8 \\neq 4\\), so denominator is not zero. Valid!" },
          { type: "answer", content: "\\(x = \\frac{9}{5} = 1.8\\)" }
        ],
        answer: "\\(x = \\frac{9}{5} = 1.8\\)"
      }
    ],
    hints: [
      "For part (a), just substitute — watch the signs in the denominator.",
      "For part (b), multiply both sides by the denominator to clear the fraction.",
      "Always check your answer doesn't make the denominator zero!"
    ],
    examTip: "When solving rational equations, always verify your answer doesn't make the denominator zero. If it does, the solution is extraneous.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_1_5.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_1_5.vtt"
  },

  // ===================== 5.2 Domain and Range =====================

  {
    id: "5.2.1", section: "5.2", label: "Question 1",
    marks: null,
    statement: "For each of the following graphs, state the domain and range.",
    parts: [
      {
        label: "a", text: "Line through \\((-4, 2)\\) with arrows both ends",
        steps: [
          { type: "concept", content: "Arrows on both ends mean the line extends infinitely in both directions." },
          { type: "algebra", content: "The \\(x\\)-values cover all real numbers: domain is \\(x \\in \\mathbb{R}\\)." },
          { type: "algebra", content: "The \\(y\\)-values cover all real numbers: range is \\(y \\in \\mathbb{R}\\)." },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R}\\), Range: \\(y \\in \\mathbb{R}\\)" }
        ],
        answer: "Domain: \\(x \\in \\mathbb{R}\\), Range: \\(y \\in \\mathbb{R}\\)"
      },
      {
        label: "b", text: "Parabola with vertex \\((3, 2)\\) opening downward",
        steps: [
          { type: "concept", content: "A parabola opening downward has a maximum at the vertex." },
          { type: "algebra", content: "Domain: \\(x \\in \\mathbb{R}\\) (parabolas extend infinitely left and right)." },
          { type: "algebra", content: "Range: \\(y \\leq 2\\) (the vertex is the highest point)." },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R}\\), Range: \\(y \\leq 2\\)" }
        ],
        answer: "Domain: \\(x \\in \\mathbb{R}\\), Range: \\(y \\leq 2\\)"
      },
      {
        label: "c", text: "Line through \\((1, 6)\\) and \\((-3, -5)\\) with arrows",
        steps: [
          { type: "concept", content: "Arrows mean infinite extension — this is a straight line." },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R}\\), Range: \\(y \\in \\mathbb{R}\\)" }
        ],
        answer: "Domain: \\(x \\in \\mathbb{R}\\), Range: \\(y \\in \\mathbb{R}\\)"
      }
    ],
    hints: [
      "Domain = set of \\(x\\)-values (read left to right).",
      "Range = set of \\(y\\)-values (read bottom to top).",
      "Arrows mean the graph continues to infinity."
    ],
    examTip: "Check for: arrows (infinity), closed dots (\\(\\leq\\)/\\(\\geq\\)), open dots (\\(<\\)/\\(>\\)).",
    graph: {
      type: "domain-range-demo",
      traces: [
        { fn: "2*x + 10", label: "(a) Line", range: [-8, 4] },
        { fn: "-(x-3)*(x-3)+2", label: "(b) Parabola", range: [-2, 8] }
      ]
    },
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_2_1.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_2_1.vtt"
  },

  {
    id: "5.2.2", section: "5.2", label: "Question 2",
    marks: null,
    statement: "For each of the following graphs, state the domain and range.",
    parts: [
      {
        label: "d", text: "Line with arrows both ends",
        steps: [
          { type: "concept", content: "Straight line with arrows — extends infinitely." },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R}\\), Range: \\(y \\in \\mathbb{R}\\)" }
        ],
        answer: "Domain: \\(x \\in \\mathbb{R}\\), Range: \\(y \\in \\mathbb{R}\\)"
      },
      {
        label: "e", text: "Curve with minimum at \\((-2, 1)\\)",
        steps: [
          { type: "concept", content: "The curve has a minimum point, meaning \\(y\\) values start at 1 and go up." },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R}\\), Range: \\(y \\geq 1\\)" }
        ],
        answer: "Domain: \\(x \\in \\mathbb{R}\\), Range: \\(y \\geq 1\\)"
      },
      {
        label: "f", text: "Polynomial through \\((-5, 7)\\) and \\((3, 4)\\) with arrows",
        steps: [
          { type: "concept", content: "With arrows on both sides, both domain and range cover all reals." },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R}\\), Range: \\(y \\in \\mathbb{R}\\)" }
        ],
        answer: "Domain: \\(x \\in \\mathbb{R}\\), Range: \\(y \\in \\mathbb{R}\\)"
      }
    ],
    hints: [
      "A minimum point means the range has a lower bound.",
      "If the graph has arrows in both vertical directions, the range is all reals."
    ],
    examTip: "For parabolas: opens up → range \\(y \\geq\\) vertex; opens down → range \\(y \\leq\\) vertex.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_2_2.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_2_2.vtt"
  },

  {
    id: "5.2.3", section: "5.2", label: "Question 3",
    marks: null,
    statement: "For each of the following graphs, state the domain and range.",
    parts: [
      {
        label: "g", text: "Parabola, vertex at \\((6, 4)\\) opening down",
        steps: [
          { type: "concept", content: "Opening downward means the vertex is the maximum." },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R}\\), Range: \\(y \\leq 4\\)" }
        ],
        answer: "Domain: \\(x \\in \\mathbb{R}\\), Range: \\(y \\leq 4\\)"
      },
      {
        label: "h", text: "Bounded curve (closed endpoints)",
        steps: [
          { type: "concept", content: "Look at the leftmost and rightmost \\(x\\)-values and the lowest and highest \\(y\\)-values." },
          { type: "answer", content: "Domain and range depend on graph endpoints — read coordinates carefully." }
        ],
        answer: "Read coordinates from the graph."
      },
      {
        label: "i", text: "Rational function with asymptotes",
        steps: [
          { type: "concept", content: "Rational functions have asymptotes — the graph approaches but never touches these lines." },
          { type: "algebra", content: "At vertical asymptotes, exclude that \\(x\\)-value from the domain." },
          { type: "algebra", content: "At horizontal asymptotes, exclude that \\(y\\)-value from the range." },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R}, x \\neq\\) vertical asymptote. Range: \\(y \\in \\mathbb{R}, y \\neq\\) horizontal asymptote." }
        ],
        answer: "Exclude asymptote values from domain/range."
      }
    ],
    hints: [
      "Asymptotes create gaps in the domain or range.",
      "Open circles mean that value is NOT included."
    ],
    examTip: "For rational functions, check both vertical asymptotes (domain) and horizontal asymptotes (range).",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_2_3.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_2_3.vtt"
  },

  {
    id: "5.2.4", section: "5.2", label: "Question 4",
    marks: null,
    statement: "Find the domain of \\(f(x) = \\sqrt{x - 2}\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "You cannot square root a negative number. The expression under the root must be \\(\\geq 0\\)." },
          { type: "algebra", content: "\\(x - 2 \\geq 0\\)" },
          { type: "algebra", content: "\\(x \\geq 2\\)" },
          { type: "answer", content: "Domain: \\(x \\geq 2\\)" }
        ],
        answer: "Domain: \\(x \\geq 2\\)"
      }
    ],
    hints: [
      "What's under the square root? Set it \\(\\geq 0\\).",
      "Solve the inequality \\(x - 2 \\geq 0\\)."
    ],
    examTip: "For \\(\\sqrt{\\text{expression}}\\), always set expression \\(\\geq 0\\). Use \\(>\\) if the root is in a denominator.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_2_4.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_2_4.vtt"
  },

  {
    id: "5.2.5", section: "5.2", label: "Question 5",
    marks: null,
    statement: "Find the domain of \\(f(x) = \\dfrac{2}{x}\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "You cannot divide by zero. Set the denominator \\(\\neq 0\\)." },
          { type: "algebra", content: "\\(x \\neq 0\\)" },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R},\\ x \\neq 0\\)" }
        ],
        answer: "Domain: \\(x \\in \\mathbb{R},\\ x \\neq 0\\)"
      }
    ],
    hints: [
      "What value of \\(x\\) makes the denominator zero?"
    ],
    examTip: "For fractions, always check what makes the denominator zero and exclude those values.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_2_5.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_2_5.vtt"
  },

  {
    id: "5.2.6", section: "5.2", label: "Question 6",
    marks: null,
    statement: "Find the domain of \\(f(x) = \\ln(x + 3)\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "You cannot take the logarithm of zero or a negative number. The argument must be \\(> 0\\)." },
          { type: "algebra", content: "\\(x + 3 > 0\\)" },
          { type: "algebra", content: "\\(x > -3\\)" },
          { type: "answer", content: "Domain: \\(x > -3\\)" }
        ],
        answer: "Domain: \\(x > -3\\)"
      }
    ],
    hints: [
      "The argument of \\(\\ln\\) must be strictly positive (\\(> 0\\), not \\(\\geq 0\\))."
    ],
    examTip: "For \\(\\ln(\\text{expression})\\), set expression \\(> 0\\) (strict inequality — log of zero is undefined).",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_2_6.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_2_6.vtt"
  },

  {
    id: "5.2.7", section: "5.2", label: "Question 7",
    marks: null,
    statement: "Find the domain of \\(f(x) = 2x + 1\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "This is a linear function — no square roots, no denominators, no logarithms." },
          { type: "algebra", content: "There are no restrictions on \\(x\\)." },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R}\\) (all real numbers)" }
        ],
        answer: "Domain: \\(x \\in \\mathbb{R}\\)"
      }
    ],
    hints: [
      "Check: is there a denominator? A square root? A logarithm? If none, domain is all reals."
    ],
    examTip: "Polynomials and linear functions always have domain \\(x \\in \\mathbb{R}\\).",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_2_7.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_2_7.vtt"
  },

  {
    id: "5.2.8", section: "5.2", label: "Question 8",
    marks: null,
    statement: "Find the domain of \\(f(x) = 3x^2 - 5x + 1\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "This is a polynomial (quadratic). Polynomials are defined for all real numbers." },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R}\\)" }
        ],
        answer: "Domain: \\(x \\in \\mathbb{R}\\)"
      }
    ],
    hints: [
      "Quadratics (and all polynomials) have no restrictions on their domain."
    ],
    examTip: "Quick check: no fractions, no roots, no logs → domain is all reals.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_2_8.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_2_8.vtt"
  },

  {
    id: "5.2.9", section: "5.2", label: "Question 9",
    marks: null,
    statement: "Find the domain of \\(f(x) = \\dfrac{4}{x}\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Cannot divide by zero." },
          { type: "algebra", content: "\\(x \\neq 0\\)" },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R},\\ x \\neq 0\\)" }
        ],
        answer: "Domain: \\(x \\in \\mathbb{R},\\ x \\neq 0\\)"
      }
    ],
    hints: ["Set the denominator not equal to zero."],
    examTip: "Same logic as Q5 — denominator cannot be zero.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_2_9.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_2_9.vtt"
  },

  {
    id: "5.2.10", section: "5.2", label: "Question 10",
    marks: null,
    statement: "Find the domain of \\(f(x) = \\sqrt{x}\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Cannot square root a negative number." },
          { type: "algebra", content: "\\(x \\geq 0\\)" },
          { type: "answer", content: "Domain: \\(x \\geq 0\\)" }
        ],
        answer: "Domain: \\(x \\geq 0\\)"
      }
    ],
    hints: ["The expression under the root must be non-negative."],
    examTip: "\\(\\sqrt{x}\\) requires \\(x \\geq 0\\). Note: \\(\\sqrt{0} = 0\\) is defined.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_2_10.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_2_10.vtt"
  },

  {
    id: "5.2.11", section: "5.2", label: "Question 11",
    marks: null,
    statement: "Find the domain of \\(f(x) = \\dfrac{5}{\\sqrt{x - 1}}\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Two restrictions: (1) cannot square root a negative, (2) cannot divide by zero." },
          { type: "algebra", content: "\\(x - 1 > 0\\) (strict inequality because the root is in the denominator)" },
          { type: "algebra", content: "\\(x > 1\\)" },
          { type: "note", content: "Note: \\(x = 1\\) gives \\(\\sqrt{0} = 0\\) in the denominator, which is undefined." },
          { type: "answer", content: "Domain: \\(x > 1\\)" }
        ],
        answer: "Domain: \\(x > 1\\)"
      }
    ],
    hints: [
      "The square root is in the denominator — both restrictions apply.",
      "You need \\(x - 1 > 0\\), not just \\(\\geq 0\\), because \\(\\sqrt{0}\\) in a denominator = division by zero."
    ],
    examTip: "When \\(\\sqrt{\\text{expr}}\\) is in a denominator, use strict inequality: expr \\(> 0\\).",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_2_11.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_2_11.vtt"
  },

  {
    id: "5.2.12", section: "5.2", label: "Question 12",
    marks: null,
    statement: "Find the domain of \\(f(x) = \\dfrac{1}{(x-2)(x+3)}\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Set the denominator \\(\\neq 0\\) and solve." },
          { type: "algebra", content: "\\((x-2)(x+3) \\neq 0\\)" },
          { type: "algebra", content: "\\(x \\neq 2\\) and \\(x \\neq -3\\)" },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R},\\ x \\neq 2,\\ x \\neq -3\\)" }
        ],
        answer: "Domain: \\(x \\in \\mathbb{R},\\ x \\neq 2,\\ x \\neq -3\\)"
      }
    ],
    hints: [
      "Each factor of the denominator could be zero — find both values."
    ],
    examTip: "Factored denominators: set each factor \\(= 0\\) separately to find all excluded values.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_2_12.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_2_12.vtt"
  },

  {
    id: "5.2.13", section: "5.2", label: "Question 13",
    marks: null,
    statement: "Find the domain of \\(f(x) = \\dfrac{x}{x^2 - 9}\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Factor the denominator: \\(x^2 - 9 = (x-3)(x+3)\\)." },
          { type: "algebra", content: "\\((x-3)(x+3) \\neq 0\\)" },
          { type: "algebra", content: "\\(x \\neq 3\\) and \\(x \\neq -3\\)" },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R},\\ x \\neq 3,\\ x \\neq -3\\)" }
        ],
        answer: "Domain: \\(x \\in \\mathbb{R},\\ x \\neq 3,\\ x \\neq -3\\)"
      }
    ],
    hints: [
      "Recognize the difference of squares: \\(x^2 - 9 = (x-3)(x+3)\\)."
    ],
    examTip: "Always factor the denominator first — difference of squares \\(a^2 - b^2 = (a-b)(a+b)\\) is very common.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_2_13.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_2_13.vtt"
  },

  {
    id: "5.2.14", section: "5.2", label: "Question 14",
    marks: null,
    statement: "Find the domain of \\(f(x) = \\dfrac{3}{x^2 - 5x + 4}\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Factor the denominator: \\(x^2 - 5x + 4 = (x-1)(x-4)\\)." },
          { type: "algebra", content: "\\((x-1)(x-4) \\neq 0\\)" },
          { type: "algebra", content: "\\(x \\neq 1\\) and \\(x \\neq 4\\)" },
          { type: "answer", content: "Domain: \\(x \\in \\mathbb{R},\\ x \\neq 1,\\ x \\neq 4\\)" }
        ],
        answer: "Domain: \\(x \\in \\mathbb{R},\\ x \\neq 1,\\ x \\neq 4\\)"
      }
    ],
    hints: [
      "Factor \\(x^2 - 5x + 4\\): find two numbers that multiply to 4 and add to \\(-5\\).",
      "Those numbers are \\(-1\\) and \\(-4\\)."
    ],
    examTip: "Always factor quadratic denominators. Practice factoring — it saves time in the exam.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_2_14.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_2_14.vtt"
  },

  // ===================== 5.3 Inverse Functions =====================

  {
    id: "5.3.1", section: "5.3", label: "Question 1",
    marks: null,
    statement: "If \\(f(x) = 3x + 5\\), find \\(f^{-1}(11)\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "\\(f^{-1}(11)\\) means: what value of \\(x\\) gives \\(f(x) = 11\\)?" },
          { type: "algebra", content: "Set \\(f(x) = 11\\): \\(3x + 5 = 11\\)" },
          { type: "algebra", content: "\\(3x = 6\\)" },
          { type: "algebra", content: "\\(x = 2\\)" },
          { type: "note", content: "Alternative method: find the inverse formula \\(f^{-1}(x) = \\frac{x-5}{3}\\), then substitute 11." },
          { type: "answer", content: "\\(f^{-1}(11) = 2\\)" }
        ],
        answer: "\\(f^{-1}(11) = 2\\)"
      }
    ],
    hints: [
      "\\(f^{-1}(11)\\) asks: \"What input gives an output of 11?\"",
      "Set \\(3x + 5 = 11\\) and solve for \\(x\\)."
    ],
    examTip: "\\(f^{-1}\\) is NOT \\(\\frac{1}{f}\\). It is the reverse function — it undoes what \\(f\\) does.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_3_1.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_3_1.vtt"
  },

  {
    id: "5.3.2", section: "5.3", label: "Question 2",
    marks: null,
    statement: "Find the inverse values below.",
    parts: [
      {
        label: "a", text: "If \\(f(x) = 5x\\), find \\(f^{-1}(200)\\)",
        steps: [
          { type: "concept", content: "Inverse of \\(f(x) = 5x\\) is \\(f^{-1}(x) = \\frac{x}{5}\\)." },
          { type: "algebra", content: "\\(f^{-1}(200) = \\frac{200}{5} = 40\\)" },
          { type: "answer", content: "\\(f^{-1}(200) = 40\\)" }
        ],
        answer: "\\(f^{-1}(200) = 40\\)"
      },
      {
        label: "b", text: "If \\(f(x) = 7x\\), find \\(f^{-1}(-49)\\)",
        steps: [
          { type: "concept", content: "Inverse of \\(f(x) = 7x\\) is \\(f^{-1}(x) = \\frac{x}{7}\\)." },
          { type: "algebra", content: "\\(f^{-1}(-49) = \\frac{-49}{7} = -7\\)" },
          { type: "answer", content: "\\(f^{-1}(-49) = -7\\)" }
        ],
        answer: "\\(f^{-1}(-49) = -7\\)"
      }
    ],
    hints: [
      "The inverse of multiplying by \\(k\\) is dividing by \\(k\\)."
    ],
    examTip: "For simple functions like \\(f(x) = kx\\), the inverse is \\(f^{-1}(x) = \\frac{x}{k}\\).",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_3_2.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_3_2.vtt"
  },

  {
    id: "5.3.3", section: "5.3", label: "Question 3",
    marks: null,
    statement: "Find the inverse values below.",
    parts: [
      {
        label: "a", text: "If \\(f(x) = 3x^5\\), find \\(f^{-1}(3)\\)",
        steps: [
          { type: "concept", content: "Set \\(f(x) = 3\\): \\(3x^5 = 3\\)." },
          { type: "algebra", content: "\\(x^5 = 1\\)" },
          { type: "algebra", content: "\\(x = 1\\)" },
          { type: "answer", content: "\\(f^{-1}(3) = 1\\)" }
        ],
        answer: "\\(f^{-1}(3) = 1\\)"
      },
      {
        label: "b", text: "If \\(g(x) = 2x^3\\), find \\(g^{-1}(16)\\)",
        steps: [
          { type: "concept", content: "Set \\(g(x) = 16\\): \\(2x^3 = 16\\)." },
          { type: "algebra", content: "\\(x^3 = 8\\)" },
          { type: "algebra", content: "\\(x = 2\\)" },
          { type: "answer", content: "\\(g^{-1}(16) = 2\\)" }
        ],
        answer: "\\(g^{-1}(16) = 2\\)"
      }
    ],
    hints: [
      "Set the function equal to the given value and solve for \\(x\\).",
      "Remember: \\(\\sqrt[5]{1} = 1\\) and \\(\\sqrt[3]{8} = 2\\)."
    ],
    examTip: "Know your perfect cubes: \\(1, 8, 27, 64, 125\\). They appear often in inverse questions.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_3_3.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_3_3.vtt"
  },

  {
    id: "5.3.4", section: "5.3", label: "Question 4",
    marks: null,
    statement: "Sketch the inverse function of the given graph (exponential-type curve through \\((0, -1)\\)).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "To sketch the inverse, reflect the graph in the line \\(y = x\\)." },
          { type: "algebra", content: "Key point: \\((0, -1)\\) on \\(f\\) becomes \\((-1, 0)\\) on \\(f^{-1}\\)." },
          { type: "algebra", content: "The horizontal asymptote \\(y = -1\\) becomes a vertical asymptote \\(x = -1\\)." },
          { type: "answer", content: "The inverse is a logarithmic-type curve through \\((-1, 0)\\) with vertical asymptote \\(x = -1\\)." }
        ],
        answer: "Logarithmic-type curve through \\((-1, 0)\\) with VA \\(x = -1\\)."
      }
    ],
    hints: [
      "Step 1: Draw the line \\(y = x\\) as a dashed line.",
      "Step 2: Reflect key points — swap \\((a, b)\\) to \\((b, a)\\).",
      "Step 3: Horizontal asymptotes become vertical asymptotes."
    ],
    examTip: "Always draw the line \\(y = x\\) first as a dashed line, then reflect key points. Label them!",
    graph: {
      type: "inverse-sketch",
      fn: "Math.exp(x) - 2",
      inverseFn: "Math.log(x + 2)",
      domain: [-3, 3],
      inverseDomain: [-1.5, 6],
      keyPoints: [[0, -1]],
      inverseKeyPoints: [[-1, 0]],
      asymptote: { original: { type: "horizontal", value: -2 }, inverse: { type: "vertical", value: -2 } }
    },
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_3_4.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_3_4.vtt"
  },

  {
    id: "5.3.5", section: "5.3", label: "Question 5",
    marks: null,
    statement: "Sketch the inverse function of the given graph (\\(y = \\sin(x)\\) from \\(-\\frac{\\pi}{2}\\) to \\(\\frac{\\pi}{2}\\)).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Reflect in \\(y = x\\). The inverse of \\(\\sin(x)\\) (restricted) is \\(\\arcsin(x)\\)." },
          { type: "algebra", content: "Key points: \\((-\\frac{\\pi}{2}, -1) \\to (-1, -\\frac{\\pi}{2})\\) and \\((\\frac{\\pi}{2}, 1) \\to (1, \\frac{\\pi}{2})\\)." },
          { type: "answer", content: "The inverse is the \\(\\arcsin\\) curve from \\((-1, -\\frac{\\pi}{2})\\) to \\((1, \\frac{\\pi}{2})\\)." }
        ],
        answer: "\\(y = \\arcsin(x)\\), domain \\([-1, 1]\\), range \\([-\\frac{\\pi}{2}, \\frac{\\pi}{2}]\\)."
      }
    ],
    hints: ["Swap \\(x\\) and \\(y\\) coordinates of key points."],
    examTip: "The domain of \\(f\\) becomes the range of \\(f^{-1}\\), and vice versa.",
    graph: {
      type: "inverse-sketch",
      fn: "Math.sin(x)",
      inverseFn: "Math.asin(x)",
      domain: [-1.571, 1.571],
      inverseDomain: [-1, 1],
      keyPoints: [[-1.571, -1], [0, 0], [1.571, 1]],
      inverseKeyPoints: [[-1, -1.571], [0, 0], [1, 1.571]]
    },
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_3_5.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_3_5.vtt"
  },

  {
    id: "5.3.6", section: "5.3", label: "Question 6",
    marks: null,
    statement: "Sketch the inverse function of the given graph (line through \\((0, 4)\\) and \\((2, 0)\\)).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Reflect the line in \\(y = x\\)." },
          { type: "algebra", content: "\\((0, 4) \\to (4, 0)\\) and \\((2, 0) \\to (0, 2)\\)." },
          { type: "answer", content: "Inverse line passes through \\((4, 0)\\) and \\((0, 2)\\)." }
        ],
        answer: "Line through \\((4, 0)\\) and \\((0, 2)\\)."
      }
    ],
    hints: ["For linear functions, just swap the coordinates of two points and draw the new line."],
    examTip: "The inverse of a line is always a line (unless the original is horizontal/vertical).",
    graph: {
      type: "inverse-sketch",
      fn: "-2*x + 4",
      inverseFn: "-0.5*x + 2",
      domain: [-1, 4],
      inverseDomain: [-2, 6],
      keyPoints: [[0, 4], [2, 0]],
      inverseKeyPoints: [[4, 0], [0, 2]]
    },
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_3_6.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_3_6.vtt"
  },

  {
    id: "5.3.7", section: "5.3", label: "Question 7",
    marks: null,
    statement: "Sketch the inverse functions of the following graphs.",
    parts: [
      {
        label: "a", text: "Parabola with vertex \\((0, 1)\\) opening upward",
        steps: [
          { type: "concept", content: "Reflect in \\(y = x\\). Vertex \\((0, 1) \\to (1, 0)\\)." },
          { type: "algebra", content: "The parabola becomes a sideways parabola opening to the right." },
          { type: "answer", content: "Sideways parabola from \\((1, 0)\\) opening right." }
        ],
        answer: "Sideways parabola from \\((1, 0)\\) opening right."
      },
      {
        label: "b", text: "Bell curve with max \\((0, 3)\\)",
        steps: [
          { type: "concept", content: "Reflect in \\(y = x\\). Key point \\((0, 3) \\to (3, 0)\\)." },
          { type: "answer", content: "Reflected curve with key point \\((3, 0)\\)." }
        ],
        answer: "Reflected curve through \\((3, 0)\\)."
      }
    ],
    hints: ["For curved graphs, reflect several key points to get the shape right."],
    examTip: "The inverse of a parabola \\(y = x^2\\) is \\(y = \\pm\\sqrt{x}\\) — a sideways parabola.",
    graph: {
      type: "inverse-sketch",
      fn: "x*x + 1",
      inverseFn: "Math.sqrt(x - 1)",
      domain: [-2, 2],
      inverseDomain: [1, 5],
      keyPoints: [[0, 1], [-1, 2], [1, 2]],
      inverseKeyPoints: [[1, 0], [2, 1], [2, -1]]
    },
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_3_7.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_3_7.vtt"
  },

  {
    id: "5.3.8", section: "5.3", label: "Question 8",
    marks: null,
    statement: "Sketch the inverse functions of the following graphs.",
    parts: [
      {
        label: "a", text: "\\(y = \\cos(x)\\), \\(0 \\leq x \\leq \\pi\\)",
        steps: [
          { type: "concept", content: "The inverse of \\(\\cos(x)\\) on \\([0, \\pi]\\) is \\(\\arccos(x)\\)." },
          { type: "algebra", content: "Key points: \\((0, 1) \\to (1, 0)\\) and \\((\\pi, -1) \\to (-1, \\pi)\\)." },
          { type: "answer", content: "\\(y = \\arccos(x)\\), domain \\([-1, 1]\\), range \\([0, \\pi]\\)." }
        ],
        answer: "\\(y = \\arccos(x)\\)"
      },
      {
        label: "b", text: "Log-type curve from \\((0, 3)\\)",
        steps: [
          { type: "concept", content: "Reflect in \\(y = x\\). \\((0, 3) \\to (3, 0)\\)." },
          { type: "answer", content: "Exponential-type curve from \\((3, 0)\\)." }
        ],
        answer: "Exponential-type curve through \\((3, 0)\\)."
      }
    ],
    hints: ["Swap \\(x\\) and \\(y\\) for all key points."],
    examTip: "The inverse of a log function is an exponential, and vice versa.",
    graph: {
      type: "inverse-sketch",
      fn: "Math.cos(x)",
      inverseFn: "Math.acos(x)",
      domain: [0, 3.1416],
      inverseDomain: [-1, 1],
      keyPoints: [[0, 1], [1.5708, 0], [3.1416, -1]],
      inverseKeyPoints: [[1, 0], [0, 1.5708], [-1, 3.1416]]
    },
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_3_8.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_3_8.vtt"
  },

  {
    id: "5.3.9", section: "5.3", label: "Question 9",
    marks: null,
    statement: "Let \\(h(x) = \\log(7 - 3x)\\).",
    parts: [
      {
        label: "a", text: "Find the largest possible domain of \\(h\\).",
        steps: [
          { type: "concept", content: "The argument of \\(\\log\\) must be \\(> 0\\)." },
          { type: "algebra", content: "\\(7 - 3x > 0\\)" },
          { type: "algebra", content: "\\(-3x > -7\\)" },
          { type: "note", content: "When dividing by a negative number, flip the inequality sign!" },
          { type: "algebra", content: "\\(x < \\frac{7}{3}\\)" },
          { type: "answer", content: "Domain: \\(x < \\frac{7}{3}\\)" }
        ],
        answer: "Domain: \\(x < \\frac{7}{3}\\)"
      },
      {
        label: "b", text: "Find \\(h^{-1}(2)\\).",
        steps: [
          { type: "concept", content: "Set \\(h(x) = 2\\) and solve for \\(x\\)." },
          { type: "algebra", content: "\\(\\log(7 - 3x) = 2\\)" },
          { type: "algebra", content: "\\(7 - 3x = 10^2 = 100\\)" },
          { type: "algebra", content: "\\(-3x = 93\\)" },
          { type: "algebra", content: "\\(x = -31\\)" },
          { type: "answer", content: "\\(h^{-1}(2) = -31\\)" }
        ],
        answer: "\\(h^{-1}(2) = -31\\)"
      }
    ],
    hints: [
      "For part (a), remember to flip the inequality when dividing by a negative.",
      "For part (b), \\(\\log(A) = B\\) means \\(A = 10^B\\)."
    ],
    examTip: "The most common mistake: forgetting to flip the inequality when multiplying or dividing by a negative.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_3_9.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_3_9.vtt"
  },

  {
    id: "5.3.10", section: "5.3", label: "Question 10",
    marks: null,
    statement: "A function is defined by \\(f(x) = x^3 + x - 8\\).",
    parts: [
      {
        label: "a", text: "Use technology to sketch \\(y = f(x)\\).",
        steps: [
          { type: "concept", content: "Enter \\(x^3 + x - 8\\) in Y= on the TI-84." },
          { type: "algebra", content: "Key features: y-intercept at \\((0, -8)\\), x-intercept at approximately \\((1.79, 0)\\)." },
          { type: "answer", content: "Cubic curve passing through \\((0, -8)\\) and \\((1.79, 0)\\)." }
        ],
        answer: "Cubic curve with y-intercept \\((0, -8)\\) and x-intercept \\(\\approx (1.79, 0)\\)."
      },
      {
        label: "b", text: "Sketch \\(y = f^{-1}(x)\\) on the same axis.",
        steps: [
          { type: "concept", content: "Reflect in \\(y = x\\)." },
          { type: "algebra", content: "\\((0, -8) \\to (-8, 0)\\) and \\((1.79, 0) \\to (0, 1.79)\\)." },
          { type: "answer", content: "Reflected cubic through \\((-8, 0)\\) and \\((0, 1.79)\\)." }
        ],
        answer: "Reflected cubic through \\((-8, 0)\\)."
      },
      {
        label: "c", text: "Solve \\(f(x) = f^{-1}(x)\\).",
        steps: [
          { type: "concept", content: "Key insight: \\(f(x) = f^{-1}(x)\\) occurs where the graphs intersect, which must lie on the line \\(y = x\\)." },
          { type: "algebra", content: "So solve \\(f(x) = x\\): \\(x^3 + x - 8 = x\\)" },
          { type: "algebra", content: "\\(x^3 = 8\\)" },
          { type: "algebra", content: "\\(x = 2\\)" },
          { type: "answer", content: "\\(f(x) = f^{-1}(x)\\) when \\(x = 2\\). Point: \\((2, 2)\\)." }
        ],
        answer: "\\(x = 2\\), point \\((2, 2)\\)."
      }
    ],
    hints: [
      "For part (c): \\(f(x) = f^{-1}(x)\\) always happens on the line \\(y = x\\).",
      "So you can simplify to solving \\(f(x) = x\\).",
      "\\(x^3 + x - 8 = x\\) simplifies to \\(x^3 = 8\\)."
    ],
    examTip: "\\(f(x) = f^{-1}(x)\\) \\(\\Rightarrow\\) solve \\(f(x) = x\\). This trick saves huge amounts of time in exams!",
    graph: {
      type: "inverse-sketch",
      fn: "x*x*x + x - 8",
      inverseFn: null,
      domain: [-2.5, 3.5],
      inverseDomain: [-10, 5],
      keyPoints: [[0, -8], [2, 2]],
      inverseKeyPoints: [[-8, 0], [2, 2]],
      showYequalsX: true,
      cubic: true
    },
    ti84: [
      "Press Y= and enter X^3+X-8",
      "Press ZOOM > 6:ZStandard",
      "Press 2nd TRACE > 2:zero to find x-intercept",
      "For inverse: press Y= and enter a second equation using DrawInv or reflect key points manually"
    ],
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_3_10.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_3_10.vtt"
  },

  // ===================== 5.4 Sketching Graphs =====================

  {
    id: "5.4.1", section: "5.4", label: "Question 1",
    marks: null,
    statement: "Find the vertical asymptote of \\(f(x) = \\dfrac{2}{x - 3}\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Vertical asymptotes occur where the denominator equals zero." },
          { type: "algebra", content: "\\(x - 3 = 0\\)" },
          { type: "algebra", content: "\\(x = 3\\)" },
          { type: "answer", content: "Vertical asymptote: \\(x = 3\\)" }
        ],
        answer: "Vertical asymptote: \\(x = 3\\)"
      }
    ],
    hints: ["Set the denominator equal to zero and solve."],
    examTip: "Vertical asymptotes: set denominator = 0. Always state as \\(x = \\text{value}\\).",
    graph: {
      type: "asymptote-demo",
      fn: "2/(x-3)",
      domain: [-5, 10],
      va: [3],
      ha: 0
    },
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_4_1.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_4_1.vtt"
  },

  {
    id: "5.4.2", section: "5.4", label: "Question 2",
    marks: null,
    statement: "Find the horizontal asymptote of \\(f(x) = \\dfrac{3x^2 - x + 5}{2x^2 + 4}\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "When the highest powers in numerator and denominator are the same, the HA is the ratio of leading coefficients." },
          { type: "algebra", content: "Both are degree 2. Leading coefficients: \\(3\\) (numerator) and \\(2\\) (denominator)." },
          { type: "algebra", content: "\\(y = \\frac{3}{2} = 1.5\\)" },
          { type: "answer", content: "Horizontal asymptote: \\(y = \\frac{3}{2}\\)" }
        ],
        answer: "Horizontal asymptote: \\(y = \\frac{3}{2}\\)"
      }
    ],
    hints: [
      "Compare the degree (highest power) in the numerator and denominator.",
      "Same degree → HA = leading coefficient of numerator ÷ leading coefficient of denominator."
    ],
    examTip: "Three cases for HA: same degree → ratio of leading coefficients; numerator degree < denominator → \\(y = 0\\); numerator degree > denominator → no HA.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_4_2.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_4_2.vtt"
  },

  {
    id: "5.4.3", section: "5.4", label: "Question 3",
    marks: null,
    statement: "Find the horizontal asymptote of \\(f(x) = \\dfrac{x + 1}{x^2 + 5}\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Numerator degree (1) < denominator degree (2)." },
          { type: "algebra", content: "When numerator degree is less, the HA is \\(y = 0\\)." },
          { type: "answer", content: "Horizontal asymptote: \\(y = 0\\)" }
        ],
        answer: "Horizontal asymptote: \\(y = 0\\)"
      }
    ],
    hints: ["Compare degrees: numerator is degree 1, denominator is degree 2."],
    examTip: "If the numerator has a lower degree than the denominator, the horizontal asymptote is always \\(y = 0\\).",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_4_3.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_4_3.vtt"
  },

  {
    id: "5.4.4", section: "5.4", label: "Question 4",
    marks: null,
    statement: "Find the horizontal asymptote of \\(f(x) = \\dfrac{2x^3 + 5x + 7}{7x^2 - 1}\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Numerator degree (3) > denominator degree (2)." },
          { type: "algebra", content: "When the numerator has a higher degree, there is no horizontal asymptote." },
          { type: "answer", content: "No horizontal asymptote." }
        ],
        answer: "No horizontal asymptote."
      }
    ],
    hints: ["The numerator (degree 3) grows faster than the denominator (degree 2)."],
    examTip: "No HA when numerator degree > denominator degree. The function grows without bound.",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_4_4.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_4_4.vtt"
  },

  {
    id: "5.4.5", section: "5.4", label: "Question 5",
    marks: null,
    statement: "Use technology to sketch \\(y = \\dfrac{x - 3}{x + 4}\\), labelling all axis intercepts and asymptotes.",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Find asymptotes, intercepts, then sketch." },
          { type: "algebra", content: "Vertical asymptote: \\(x + 4 = 0 \\Rightarrow x = -4\\)" },
          { type: "algebra", content: "Horizontal asymptote: same degree → \\(y = \\frac{1}{1} = 1\\)" },
          { type: "algebra", content: "x-intercept: numerator = 0 → \\(x = 3\\), point \\((3, 0)\\)" },
          { type: "algebra", content: "y-intercept: \\(f(0) = \\frac{-3}{4} = -0.75\\), point \\((0, -0.75)\\)" },
          { type: "answer", content: "VA: \\(x = -4\\), HA: \\(y = 1\\), x-int: \\((3, 0)\\), y-int: \\((0, -0.75)\\)" }
        ],
        answer: "VA: \\(x = -4\\), HA: \\(y = 1\\), x-int: \\((3, 0)\\), y-int: \\((0, -0.75)\\)"
      }
    ],
    hints: [
      "VA: set denominator = 0. HA: compare degrees.",
      "x-intercept: set numerator = 0. y-intercept: substitute \\(x = 0\\)."
    ],
    examTip: "Systematic approach: (1) Find VA, (2) Find HA, (3) Find intercepts, (4) Sketch.",
    graph: {
      type: "asymptote-demo",
      fn: "(x-3)/(x+4)",
      domain: [-15, 15],
      va: [-4],
      ha: 1,
      xInt: [3],
      yInt: -0.75
    },
    ti84: [
      "Press Y= and enter (X-3)/(X+4)",
      "Press ZOOM > 6:ZStandard",
      "Press 2nd TRACE > 1:value, enter X=0 for y-intercept",
      "Press 2nd TRACE > 2:zero to find x-intercept",
      "Look for the vertical gap near x = -4 (VA)"
    ],
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_4_5.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_4_5.vtt"
  },

  {
    id: "5.4.6", section: "5.4", label: "Question 6",
    marks: null,
    statement: "Use technology to find the minimum value of \\(f(x) = xe^x\\). Hence find the range of \\(f\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Use TI-84 CALC > minimum to find the lowest point." },
          { type: "algebra", content: "Minimum at \\(x = -1\\): \\(f(-1) = (-1)e^{-1} = -\\frac{1}{e} \\approx -0.368\\)" },
          { type: "answer", content: "Minimum value: \\(-\\frac{1}{e}\\). Range: \\(y \\geq -\\frac{1}{e}\\)" }
        ],
        answer: "Minimum = \\(-\\frac{1}{e} \\approx -0.368\\). Range: \\(y \\geq -\\frac{1}{e}\\)"
      }
    ],
    hints: [
      "Graph \\(y = xe^x\\) and use CALC > 3:minimum.",
      "The minimum occurs at \\(x = -1\\)."
    ],
    examTip: "When asked to \"find the range\", look for the minimum (or maximum) value using your calculator.",
    graph: {
      type: "function-plot",
      fn: "x * Math.exp(x)",
      domain: [-5, 3],
      range: [-1, 5],
      label: "f(x) = xe^x",
      highlights: [{ x: -1, y: -0.368, label: "min (-1, -1/e)" }]
    },
    ti84: [
      "Press Y= and enter X*e^(X)",
      "Press ZOOM > 6:ZStandard",
      "Press 2nd TRACE > 3:minimum",
      "Set left bound, right bound, and guess",
      "Read minimum: X ≈ -1, Y ≈ -0.368"
    ],
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_4_6.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_4_6.vtt"
  },

  {
    id: "5.4.7", section: "5.4", label: "Question 7",
    marks: null,
    statement: "Find the coordinates of the vertices on the graph of \\(f(x) = x^4 - 4x^3 + 2x^2 + 4x - 3\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Vertices are local maxima and minima. Use TI-84 CALC > minimum/maximum." },
          { type: "algebra", content: "Factored: \\(f(x) = (x-1)^2(x+1)(x-3)\\). Zeros at \\(x = -1, 1, 3\\)." },
          { type: "algebra", content: "Local min: \\((1 - \\sqrt{2}, -4) \\approx (-0.41, -4)\\)" },
          { type: "algebra", content: "Local max: \\((1, 0)\\)" },
          { type: "algebra", content: "Local min: \\((1 + \\sqrt{2}, -4) \\approx (2.41, -4)\\)" },
          { type: "answer", content: "Vertices: \\((-0.41, -4)\\), \\((1, 0)\\), \\((2.41, -4)\\)" }
        ],
        answer: "\\((-0.41, -4)\\), \\((1, 0)\\), \\((2.41, -4)\\)"
      }
    ],
    hints: [
      "Use the calculator's minimum and maximum functions to find all turning points.",
      "This is a degree-4 polynomial, so expect up to 3 turning points."
    ],
    examTip: "A degree-\\(n\\) polynomial has at most \\(n-1\\) turning points.",
    graph: {
      type: "function-plot",
      fn: "Math.pow(x,4) - 4*Math.pow(x,3) + 2*x*x + 4*x - 3",
      domain: [-2, 4],
      range: [-6, 4],
      label: "f(x) = x⁴ - 4x³ + 2x² + 4x - 3",
      highlights: [
        { x: -0.41, y: -4, label: "min" },
        { x: 1, y: 0, label: "max" },
        { x: 2.41, y: -4, label: "min" }
      ]
    },
    ti84: [
      "Press Y= and enter X^4-4X^3+2X^2+4X-3",
      "Press ZOOM > 6:ZStandard (adjust window if needed)",
      "Use 2nd TRACE > 3:minimum and 4:maximum to find all vertices",
      "Record each (X, Y) coordinate"
    ],
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_4_7.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_4_7.vtt"
  },

  {
    id: "5.4.8", section: "5.4", label: "Question 8",
    marks: null,
    statement: "Find the points of intersection of \\(y = -x^2\\) and \\(y = 2x - 1\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Set the two equations equal to each other." },
          { type: "algebra", content: "\\(-x^2 = 2x - 1\\)" },
          { type: "algebra", content: "\\(x^2 + 2x - 1 = 0\\)" },
          { type: "algebra", content: "Using the quadratic formula: \\(x = \\frac{-2 \\pm \\sqrt{4 + 4}}{2} = \\frac{-2 \\pm 2\\sqrt{2}}{2} = -1 \\pm \\sqrt{2}\\)" },
          { type: "algebra", content: "\\(x_1 = -1 + \\sqrt{2} \\approx 0.41\\), \\(y_1 = -(0.41)^2 \\approx -0.17\\)" },
          { type: "algebra", content: "\\(x_2 = -1 - \\sqrt{2} \\approx -2.41\\), \\(y_2 = -(-2.41)^2 \\approx -5.83\\)" },
          { type: "answer", content: "\\((-1+\\sqrt{2},\\ -3+2\\sqrt{2})\\) and \\((-1-\\sqrt{2},\\ -3-2\\sqrt{2})\\)" }
        ],
        answer: "\\((-1+\\sqrt{2},\\ -3+2\\sqrt{2})\\) and \\((-1-\\sqrt{2},\\ -3-2\\sqrt{2})\\)"
      }
    ],
    hints: [
      "Set \\(-x^2 = 2x - 1\\) and rearrange to standard form.",
      "Use the quadratic formula when you can't factor easily."
    ],
    examTip: "For intersection problems: set equations equal, solve, then substitute back to find \\(y\\)-values.",
    graph: {
      type: "intersection",
      fns: [
        { expr: "-x*x", label: "y = -x²" },
        { expr: "2*x - 1", label: "y = 2x - 1" }
      ],
      domain: [-5, 4],
      range: [-10, 3],
      intersections: [
        { x: 0.414, y: -0.172 },
        { x: -2.414, y: -5.828 }
      ]
    },
    ti84: [
      "Press Y= and enter Y1 = -X² and Y2 = 2X-1",
      "Press GRAPH",
      "Press 2nd TRACE > 5:intersect",
      "Select first curve, second curve, guess near each intersection"
    ],
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_4_8.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_4_8.vtt"
  },

  {
    id: "5.4.9", section: "5.4", label: "Question 9",
    marks: null,
    statement: "Find the coordinates of the point of intersection of \\(y = 5 - x^2\\) and \\(y = e^x\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "This cannot be solved algebraically — use the graphical calculator." },
          { type: "algebra", content: "Graph both \\(y = 5 - x^2\\) and \\(y = e^x\\) and use CALC > intersect." },
          { type: "answer", content: "Intersection at approximately \\((1.24,\\ 3.46)\\)" }
        ],
        answer: "Approximately \\((1.24,\\ 3.46)\\)"
      }
    ],
    hints: [
      "You cannot solve \\(5 - x^2 = e^x\\) algebraically — technology required.",
      "Graph both and use the intersect function."
    ],
    examTip: "When you see a mix of polynomial and exponential/log, you'll need the calculator. Don't waste time trying algebra.",
    graph: {
      type: "intersection",
      fns: [
        { expr: "5 - x*x", label: "y = 5 - x²" },
        { expr: "Math.exp(x)", label: "y = eˣ" }
      ],
      domain: [-4, 4],
      range: [-2, 8],
      intersections: [
        { x: 1.24, y: 3.46 }
      ]
    },
    ti84: [
      "Y1 = 5-X², Y2 = e^(X)",
      "Press GRAPH, then 2nd TRACE > 5:intersect",
      "Read intersection: X ≈ 1.24, Y ≈ 3.46"
    ],
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_4_9.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_4_9.vtt"
  },

  {
    id: "5.4.10", section: "5.4", label: "Question 10",
    marks: null,
    statement: "Find the root(s) of the equation \\(x^3 = e^x\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Graph both sides: \\(y = x^3\\) and \\(y = e^x\\), then find intersections." },
          { type: "algebra", content: "Use TI-84 CALC > intersect for each crossing." },
          { type: "answer", content: "\\(x \\approx 1.86\\) and \\(x \\approx 4.54\\)" }
        ],
        answer: "\\(x \\approx 1.86\\) and \\(x \\approx 4.54\\)"
      }
    ],
    hints: [
      "Rewrite as two functions: \\(y = x^3\\) and \\(y = e^x\\).",
      "Graph them and find where they cross."
    ],
    examTip: "\"Find the roots\" = \"find the solutions\". Graph each side and use intersect.",
    graph: {
      type: "intersection",
      fns: [
        { expr: "x*x*x", label: "y = x³" },
        { expr: "Math.exp(x)", label: "y = eˣ" }
      ],
      domain: [-2, 6],
      range: [-5, 100],
      intersections: [
        { x: 1.86, y: 6.42 },
        { x: 4.54, y: 93.7 }
      ]
    },
    ti84: [
      "Y1 = X^3, Y2 = e^(X)",
      "Adjust window: Xmin=-2, Xmax=6, Ymin=-5, Ymax=100",
      "Press 2nd TRACE > 5:intersect for each crossing"
    ],
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_4_10.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_4_10.vtt"
  },

  {
    id: "5.4.11", section: "5.4", label: "Question 11",
    marks: null,
    statement: "Solve the equation \\(x^2 = \\dfrac{1}{x + 1}\\).",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "Graph both sides or rearrange: \\(x^2(x+1) = 1 \\Rightarrow x^3 + x^2 - 1 = 0\\)." },
          { type: "algebra", content: "Graph \\(y = x^3 + x^2 - 1\\) and find the zero." },
          { type: "answer", content: "\\(x \\approx 0.755\\)" }
        ],
        answer: "\\(x \\approx 0.755\\)"
      }
    ],
    hints: [
      "Multiply both sides by \\((x+1)\\) to clear the fraction.",
      "Then graph the resulting equation and find where it crosses the x-axis."
    ],
    examTip: "\"Solve\" with a mix of polynomial and fraction? Use technology — graph and find zeros.",
    graph: {
      type: "function-plot",
      fn: "x*x*x + x*x - 1",
      domain: [-3, 3],
      range: [-5, 5],
      label: "y = x³ + x² - 1",
      highlights: [
        { x: 0.755, y: 0, label: "root" }
      ]
    },
    ti84: [
      "Y1 = X^3+X^2-1",
      "Press GRAPH, then 2nd TRACE > 2:zero",
      "Read root: X ≈ 0.755"
    ],
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_4_11.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_4_11.vtt"
  },

  {
    id: "5.4.12", section: "5.4", label: "Question 12",
    marks: null,
    statement: "A manufacturing firm uses the following model for their monthly profit:\n\\(P = 9.4q - 0.02q^2 - 420\\)\nwhere \\(P\\) is the profit and \\(q\\) is the number of items produced that month.\nHow many items a month should the firm produce in order to maximize the profit?",
    parts: [
      {
        label: "", text: "",
        steps: [
          { type: "concept", content: "This is a downward-opening parabola. The maximum is at the vertex." },
          { type: "algebra", content: "For \\(P = -0.02q^2 + 9.4q - 420\\), the vertex is at \\(q = -\\frac{b}{2a}\\)." },
          { type: "algebra", content: "\\(q = -\\frac{9.4}{2(-0.02)} = \\frac{9.4}{0.04} = 235\\)" },
          { type: "algebra", content: "\\(P(235) = 9.4(235) - 0.02(235)^2 - 420 = 2209 - 1104.5 - 420 = 684.50\\)" },
          { type: "answer", content: "Produce 235 items per month. Maximum profit = \\$684.50" }
        ],
        answer: "235 items/month. Max profit = \\$684.50"
      }
    ],
    hints: [
      "This is a quadratic in \\(q\\). Since the coefficient of \\(q^2\\) is negative, it opens downward.",
      "The vertex formula gives the maximum: \\(q = -\\frac{b}{2a}\\)."
    ],
    examTip: "Real-world optimization: identify it as a quadratic, find the vertex. The vertex formula \\(x = -\\frac{b}{2a}\\) is on the formula sheet.",
    graph: {
      type: "function-plot",
      fn: "9.4*x - 0.02*x*x - 420",
      domain: [0, 500],
      range: [-500, 800],
      label: "P(q) = 9.4q - 0.02q² - 420",
      highlights: [
        { x: 235, y: 684.5, label: "max (235, 684.50)" }
      ],
      xLabel: "q (items)",
      yLabel: "P ($)"
    },
    ti84: [
      "Press Y= and enter 9.4X-0.02X²-420",
      "Set window: Xmin=0, Xmax=500, Ymin=-500, Ymax=800",
      "Press 2nd TRACE > 4:maximum",
      "Read: X = 235, Y = 684.50"
    ],
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_4_12.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_4_12.vtt"
  },

  // ===================== 5.5 Exam Style Questions =====================

  {
    id: "5.5.1", section: "5.5", label: "Question 1",
    marks: 7,
    statement: "The subscription fee for an online project management software by AB-Tech is \\$40 per month. If the customer buys for a whole year in advance, a discount of \\$130 is applied. This can be modelled by:\n\\(P(n) = 40n - 130,\\ n \\geq 12\\)\nwhere \\(n\\) is the number of months.\n\nThe subscription price for a different tool by YZ-Tech is \\$35 per month (annual purchase only, no discount). The total subscription cost of YZ-Tech is less than AB-Tech when \\(n > k\\).",
    parts: [
      {
        label: "a", text: "Find the total cost of buying a subscription for 2 years. [2 marks]",
        steps: [
          { type: "concept", content: "2 years = 24 months. Substitute \\(n = 24\\) into \\(P(n)\\)." },
          { type: "algebra", content: "\\(P(24) = 40(24) - 130 = 960 - 130 = 830\\)" },
          { type: "answer", content: "Total cost = \\$830" }
        ],
        answer: "\\$830"
      },
      {
        label: "b", text: "Find \\(P^{-1}(1790)\\). [2 marks]",
        steps: [
          { type: "concept", content: "Set \\(P(n) = 1790\\) and solve for \\(n\\)." },
          { type: "algebra", content: "\\(40n - 130 = 1790\\)" },
          { type: "algebra", content: "\\(40n = 1920\\)" },
          { type: "algebra", content: "\\(n = 48\\)" },
          { type: "answer", content: "\\(P^{-1}(1790) = 48\\) months" }
        ],
        answer: "\\(P^{-1}(1790) = 48\\) months"
      },
      {
        label: "c", text: "Find the minimum value of \\(k\\). [3 marks]",
        steps: [
          { type: "concept", content: "YZ-Tech cost: \\(Q(n) = 35n\\). We need \\(35n < 40n - 130\\)." },
          { type: "algebra", content: "\\(35n < 40n - 130\\)" },
          { type: "algebra", content: "\\(-5n < -130\\)" },
          { type: "note", content: "Dividing by \\(-5\\) flips the inequality!" },
          { type: "algebra", content: "\\(n > 26\\)" },
          { type: "answer", content: "Minimum value of \\(k = 26\\)" }
        ],
        answer: "\\(k = 26\\)"
      }
    ],
    hints: [
      "Part (a): Convert years to months first.",
      "Part (b): \\(P^{-1}\\) means find \\(n\\) when \\(P = 1790\\).",
      "Part (c): Set up the inequality and remember to flip when dividing by a negative."
    ],
    examTip: "Inequality flips when you divide by a negative. This is one of the most common errors in IB exams!",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_5_1.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_5_1.vtt"
  },

  {
    id: "5.5.2", section: "5.5", label: "Question 2",
    marks: 5,
    statement: "The circumference, \\(C\\), of a given circle can be represented by:\n\\(C(A) = 2\\pi\\sqrt{\\frac{A}{\\pi}}\\)\nwhere \\(A\\) is the area of the circle, for \\(0 \\leq A \\leq 24\\).",
    parts: [
      {
        label: "a", text: "Find the value of \\(C(24)\\). [1 mark]",
        steps: [
          { type: "algebra", content: "\\(C(24) = 2\\pi\\sqrt{\\frac{24}{\\pi}} = 2\\pi \\times 2.764... = 17.4\\) (3 s.f.)" },
          { type: "answer", content: "\\(C(24) \\approx 17.4\\)" }
        ],
        answer: "\\(C(24) \\approx 17.4\\)"
      },
      {
        label: "b", text: "Draw the graph of the inverse function \\(C^{-1}\\). [3 marks]",
        steps: [
          { type: "concept", content: "Reflect the graph of \\(C(A)\\) in the line \\(y = x\\)." },
          { type: "algebra", content: "Key points: \\((0, 0)\\) stays, \\((24, 17.4) \\to (17.4, 24)\\)." },
          { type: "algebra", content: "The inverse curves upward (like a parabola) since the original was a square root." },
          { type: "answer", content: "Parabola-like curve from \\((0, 0)\\) through \\((17.4, 24)\\)." }
        ],
        answer: "Reflected curve from \\((0,0)\\) through \\((17.4, 24)\\)."
      },
      {
        label: "c", text: "Explain the meaning of \\(C^{-1}(2\\pi) = \\pi\\). [1 mark]",
        steps: [
          { type: "concept", content: "Put it in context: \\(C^{-1}\\) converts circumference to area." },
          { type: "answer", content: "A circle with circumference \\(2\\pi\\) has area \\(\\pi\\). (This is the unit circle, \\(r = 1\\).)" }
        ],
        answer: "A circle with circumference \\(2\\pi\\) has area \\(\\pi\\)."
      }
    ],
    hints: [
      "Part (a): Substitute directly into the formula.",
      "Part (b): Draw \\(y = x\\) and reflect key points.",
      "Part (c): Think about what the inverse function does — it reverses input/output."
    ],
    examTip: "\"Explain the meaning\" questions: state what the input represents, what the output represents, and connect them in context.",
    graph: {
      type: "inverse-sketch",
      fn: "2 * Math.PI * Math.sqrt(x / Math.PI)",
      inverseFn: "x * x / (4 * Math.PI)",
      domain: [0, 24],
      inverseDomain: [0, 17.5],
      keyPoints: [[0, 0], [24, 17.4]],
      inverseKeyPoints: [[0, 0], [17.4, 24]]
    },
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_5_2.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_5_2.vtt"
  },

  {
    id: "5.5.3", section: "5.5", label: "Question 3",
    marks: 7,
    statement: "The radius of a cylindrical container with height \\(x\\) cm is:\n\\(r(x) = \\dfrac{56}{x},\\quad 4 \\leq x \\leq 16\\)",
    parts: [
      {
        label: "a", text: "Find the range of \\(r\\). [3 marks]",
        steps: [
          { type: "concept", content: "\\(r(x) = \\frac{56}{x}\\) is a decreasing function on \\([4, 16]\\)." },
          { type: "algebra", content: "\\(r(4) = \\frac{56}{4} = 14\\)" },
          { type: "algebra", content: "\\(r(16) = \\frac{56}{16} = 3.5\\)" },
          { type: "algebra", content: "Since \\(r\\) is decreasing, the range goes from the largest to smallest value." },
          { type: "answer", content: "Range: \\(3.5 \\leq r \\leq 14\\)" }
        ],
        answer: "Range: \\(3.5 \\leq r \\leq 14\\)"
      },
      {
        label: "b(i)", text: "Find \\(r^{-1}(8)\\). [2 marks]",
        steps: [
          { type: "concept", content: "Set \\(r(x) = 8\\) and solve for \\(x\\)." },
          { type: "algebra", content: "\\(\\frac{56}{x} = 8\\)" },
          { type: "algebra", content: "\\(x = \\frac{56}{8} = 7\\)" },
          { type: "answer", content: "\\(r^{-1}(8) = 7\\)" }
        ],
        answer: "\\(r^{-1}(8) = 7\\)"
      },
      {
        label: "b(ii)", text: "Find the range of \\(r^{-1}\\). [1 mark]",
        steps: [
          { type: "concept", content: "The range of \\(f^{-1}\\) = domain of \\(f\\)." },
          { type: "answer", content: "Range of \\(r^{-1}\\): \\(4 \\leq x \\leq 16\\)" }
        ],
        answer: "\\(4 \\leq x \\leq 16\\)"
      },
      {
        label: "b(iii)", text: "Interpret the answer to part (b)(i) in context. [1 mark]",
        steps: [
          { type: "answer", content: "When the radius of the container is 8 cm, the height is 7 cm." }
        ],
        answer: "When the radius is 8 cm, the height is 7 cm."
      }
    ],
    hints: [
      "For part (a): evaluate \\(r\\) at both endpoints of the domain.",
      "For part (b)(ii): range of inverse = domain of original."
    ],
    examTip: "Range of \\(f^{-1}\\) = Domain of \\(f\\), and Domain of \\(f^{-1}\\) = Range of \\(f\\). This is always true!",
    graph: null,
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_5_3.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_5_3.vtt"
  },

  {
    id: "5.5.4", section: "5.5", label: "Question 4",
    marks: 5,
    statement: "The area, \\(A\\), of a given square can be represented by:\n\\(A(P) = \\dfrac{P^2}{16}\\)\nwhere \\(P\\) is the perimeter of the square, for \\(P \\geq 0\\).",
    parts: [
      {
        label: "a", text: "Find the value of \\(A(20)\\). [1 mark]",
        steps: [
          { type: "algebra", content: "\\(A(20) = \\frac{(20)^2}{16} = \\frac{400}{16} = 25\\)" },
          { type: "answer", content: "\\(A(20) = 25\\)" }
        ],
        answer: "\\(A(20) = 25\\)"
      },
      {
        label: "b", text: "Draw the graph of the inverse function \\(A^{-1}\\). [3 marks]",
        steps: [
          { type: "concept", content: "Reflect in \\(y = x\\). The inverse of \\(\\frac{P^2}{16}\\) is \\(A^{-1}(x) = 4\\sqrt{x}\\)." },
          { type: "algebra", content: "Key points: \\((0, 0)\\) stays, \\((20, 25) \\to (25, 20)\\)." },
          { type: "answer", content: "Square root curve from \\((0, 0)\\) through \\((25, 20)\\)." }
        ],
        answer: "Square root curve through \\((0, 0)\\) and \\((25, 20)\\)."
      },
      {
        label: "c", text: "Explain the meaning of \\(A^{-1}(4) = 8\\). [1 mark]",
        steps: [
          { type: "concept", content: "\\(A^{-1}\\) converts area to perimeter." },
          { type: "answer", content: "A square with area 4 cm² has perimeter 8 cm." }
        ],
        answer: "A square with area 4 cm² has perimeter 8 cm."
      }
    ],
    hints: [
      "Part (c): side = \\(\\sqrt{4} = 2\\), perimeter = \\(4 \\times 2 = 8\\). Checks out!"
    ],
    examTip: "For \"explain the meaning\" questions, always refer back to the real-world context (area, perimeter, etc.).",
    graph: {
      type: "inverse-sketch",
      fn: "x*x/16",
      inverseFn: "4*Math.sqrt(x)",
      domain: [0, 24],
      inverseDomain: [0, 36],
      keyPoints: [[0, 0], [20, 25]],
      inverseKeyPoints: [[0, 0], [25, 20]]
    },
    ti84: null,
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_5_4.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_5_4.vtt"
  },

  {
    id: "5.5.5", section: "5.5", label: "Question 5",
    marks: 5,
    statement: "A function is defined by \\(g(x) = 3 - \\dfrac{12}{x + 3}\\) for \\(-9 \\leq x \\leq 9,\\ x \\neq -3\\).",
    parts: [
      {
        label: "a", text: "Find the range of \\(g\\). [3 marks]",
        steps: [
          { type: "concept", content: "This function has a vertical asymptote at \\(x = -3\\) and horizontal asymptote \\(y = 3\\). Analyse each piece." },
          { type: "algebra", content: "Left piece \\([-9, -3)\\): \\(g(-9) = 3 - \\frac{12}{-6} = 3 + 2 = 5\\). As \\(x \\to -3^-\\), \\(g \\to +\\infty\\)." },
          { type: "algebra", content: "So on the left: \\(y \\geq 5\\)." },
          { type: "algebra", content: "Right piece \\((-3, 9]\\): As \\(x \\to -3^+\\), \\(g \\to -\\infty\\). \\(g(9) = 3 - \\frac{12}{12} = 3 - 1 = 2\\)." },
          { type: "algebra", content: "So on the right: \\(y \\leq 2\\)." },
          { type: "answer", content: "Range: \\(y \\leq 2\\) or \\(y \\geq 5\\)" }
        ],
        answer: "Range: \\(y \\leq 2\\) or \\(y \\geq 5\\)"
      },
      {
        label: "b", text: "Find the value of \\(g^{-1}(0)\\). [2 marks]",
        steps: [
          { type: "concept", content: "Set \\(g(x) = 0\\) and solve." },
          { type: "algebra", content: "\\(3 - \\frac{12}{x+3} = 0\\)" },
          { type: "algebra", content: "\\(\\frac{12}{x+3} = 3\\)" },
          { type: "algebra", content: "\\(x + 3 = 4\\)" },
          { type: "algebra", content: "\\(x = 1\\)" },
          { type: "answer", content: "\\(g^{-1}(0) = 1\\)" }
        ],
        answer: "\\(g^{-1}(0) = 1\\)"
      }
    ],
    hints: [
      "For part (a), evaluate \\(g\\) at the endpoints and analyse behaviour near the asymptote.",
      "For part (b), set the function equal to 0 and solve."
    ],
    examTip: "Rational functions with restricted domains: always check both pieces (left and right of the asymptote).",
    graph: {
      type: "asymptote-demo",
      fn: "3 - 12/(x+3)",
      domain: [-9, 9],
      va: [-3],
      ha: 3,
      restrictedDomain: true
    },
    ti84: [
      "Press Y= and enter 3-12/(X+3)",
      "Set window: Xmin=-9, Xmax=9",
      "Press GRAPH to visualize the two branches"
    ],
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_5_5.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_5_5.vtt"
  },

  {
    id: "5.5.6", section: "5.5", label: "Question 6",
    marks: 6,
    statement: "A function is defined by \\(f(x) = \\dfrac{\\sqrt{x+1}}{x^2 - 4}\\) for \\(-1 \\leq x \\leq 5,\\ x \\neq 2\\).",
    parts: [
      {
        label: "a", text: "Find the range of \\(f\\). [4 marks]",
        steps: [
          { type: "concept", content: "Analyse the function behaviour. VA at \\(x = 2\\) (within domain). \\(x = -2\\) is outside the domain." },
          { type: "algebra", content: "\\(f(-1) = \\frac{\\sqrt{0}}{1-4} = 0\\)" },
          { type: "algebra", content: "As \\(x \\to 2^-\\): numerator \\(\\to \\sqrt{3}\\), denominator \\(\\to 0^-\\), so \\(f \\to -\\infty\\)." },
          { type: "algebra", content: "As \\(x \\to 2^+\\): numerator \\(\\to \\sqrt{3}\\), denominator \\(\\to 0^+\\), so \\(f \\to +\\infty\\)." },
          { type: "algebra", content: "\\(f(5) = \\frac{\\sqrt{6}}{21} \\approx 0.117\\). The right piece decreases from \\(+\\infty\\) to \\(0.117\\)." },
          { type: "answer", content: "Range: \\(y \\leq 0\\) or \\(y \\geq \\frac{\\sqrt{6}}{21}\\)" }
        ],
        answer: "Range: \\(y \\leq 0\\) or \\(y \\geq \\frac{\\sqrt{6}}{21}\\)"
      },
      {
        label: "b", text: "Find \\(f^{-1}\\left(\\frac{2}{5}\\right)\\). [2 marks]",
        steps: [
          { type: "concept", content: "Find \\(x\\) such that \\(f(x) = \\frac{2}{5}\\)." },
          { type: "algebra", content: "Try \\(x = 3\\): \\(f(3) = \\frac{\\sqrt{4}}{9-4} = \\frac{2}{5}\\). It works!" },
          { type: "answer", content: "\\(f^{-1}\\left(\\frac{2}{5}\\right) = 3\\)" }
        ],
        answer: "\\(f^{-1}\\left(\\frac{2}{5}\\right) = 3\\)"
      }
    ],
    hints: [
      "Check where the denominator is zero within the domain.",
      "For part (b), try integer values — the IB often designs questions with nice answers."
    ],
    examTip: "In IB exams, inverse values usually come out as integers or simple fractions. Try small integers first!",
    graph: {
      type: "asymptote-demo",
      fn: "Math.sqrt(x+1)/(x*x - 4)",
      domain: [-1, 5],
      va: [2],
      ha: 0,
      restrictedDomain: true
    },
    ti84: [
      "Y1 = √(X+1)/(X²-4)",
      "Set window: Xmin=-1, Xmax=5",
      "Observe the two branches around x = 2"
    ],
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_5_6.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_5_6.vtt"
  },

  {
    id: "5.5.7", section: "5.5", label: "Question 7",
    marks: 6,
    statement: "Consider the function \\(y = \\dfrac{x - 12}{\\sqrt{x^2 - 4}}\\).",
    parts: [
      {
        label: "a", text: "Sketch the graph of \\(y\\). [3 marks]",
        steps: [
          { type: "concept", content: "Domain: \\(x^2 - 4 > 0\\), so \\(x > 2\\) or \\(x < -2\\)." },
          { type: "algebra", content: "Vertical asymptotes at \\(x = 2\\) and \\(x = -2\\)." },
          { type: "algebra", content: "Horizontal asymptotes: as \\(x \\to +\\infty\\), \\(y \\to 1\\); as \\(x \\to -\\infty\\), \\(y \\to -1\\)." },
          { type: "answer", content: "Sketch with VA at \\(x = \\pm 2\\), HA at \\(y = \\pm 1\\), x-intercept at \\((12, 0)\\)." }
        ],
        answer: "Graph with VA \\(x = \\pm 2\\), HA \\(y = \\pm 1\\), x-int \\((12, 0)\\)."
      },
      {
        label: "b(i)", text: "Write down the x-intercept. [1 mark]",
        steps: [
          { type: "algebra", content: "Set numerator = 0: \\(x - 12 = 0 \\Rightarrow x = 12\\)." },
          { type: "answer", content: "x-intercept: \\((12, 0)\\)" }
        ],
        answer: "\\((12, 0)\\)"
      },
      {
        label: "b(ii)", text: "Write down the equations of all asymptotes. [2 marks]",
        steps: [
          { type: "algebra", content: "Vertical: \\(x^2 - 4 = 0 \\Rightarrow x = 2\\) and \\(x = -2\\)." },
          { type: "algebra", content: "Horizontal: \\(y = 1\\) (as \\(x \\to +\\infty\\)) and \\(y = -1\\) (as \\(x \\to -\\infty\\))." },
          { type: "answer", content: "VA: \\(x = 2\\), \\(x = -2\\). HA: \\(y = 1\\), \\(y = -1\\)." }
        ],
        answer: "\\(x = 2,\\ x = -2,\\ y = 1,\\ y = -1\\)"
      }
    ],
    hints: [
      "The denominator involves \\(\\sqrt{x^2 - 4}\\), which requires \\(x^2 > 4\\).",
      "For horizontal asymptotes, consider the behaviour as \\(x \\to \\pm\\infty\\)."
    ],
    examTip: "Functions with \\(\\sqrt{x^2 - a}\\) in the denominator can have different horizontal asymptotes for \\(x \\to +\\infty\\) vs \\(x \\to -\\infty\\).",
    graph: {
      type: "asymptote-demo",
      fn: "(x - 12) / Math.sqrt(x*x - 4)",
      domain: [-15, 20],
      va: [-2, 2],
      ha: [1, -1],
      xInt: [12]
    },
    ti84: [
      "Y1 = (X-12)/√(X²-4)",
      "Set window: Xmin=-15, Xmax=20, Ymin=-5, Ymax=5",
      "Observe VAs at x = ±2 and HAs at y = ±1"
    ],
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_5_7.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_5_7.vtt"
  },

  {
    id: "5.5.8", section: "5.5", label: "Question 8",
    marks: 7,
    statement: "A function is defined by \\(g(x) = 2x + \\ln(x - 2)\\).",
    parts: [
      {
        label: "a", text: "State the domain and range of \\(g\\). [2 marks]",
        steps: [
          { type: "concept", content: "For \\(\\ln(x-2)\\) to be defined: \\(x - 2 > 0 \\Rightarrow x > 2\\)." },
          { type: "algebra", content: "As \\(x \\to 2^+\\), \\(\\ln(x-2) \\to -\\infty\\), so \\(g(x) \\to -\\infty\\)." },
          { type: "algebra", content: "As \\(x \\to \\infty\\), \\(g(x) \\to \\infty\\)." },
          { type: "answer", content: "Domain: \\(x > 2\\). Range: \\(y \\in \\mathbb{R}\\) (all real numbers)." }
        ],
        answer: "Domain: \\(x > 2\\). Range: \\(y \\in \\mathbb{R}\\)."
      },
      {
        label: "b", text: "Sketch \\(y = g(x)\\) and \\(y = g^{-1}(x)\\) on the same axes. [3 marks]",
        steps: [
          { type: "concept", content: "\\(g\\) has a vertical asymptote at \\(x = 2\\). Key point: \\(g(3) = 6 + 0 = 6\\)." },
          { type: "algebra", content: "\\(g(x)\\): through \\((3, 6)\\) with VA \\(x = 2\\)." },
          { type: "algebra", content: "\\(g^{-1}(x)\\): through \\((6, 3)\\) with HA \\(y = 2\\)." },
          { type: "answer", content: "Draw both curves reflected in \\(y = x\\), with \\(y = x\\) as dashed line." }
        ],
        answer: "\\(g\\) through \\((3, 6)\\) with VA \\(x = 2\\); \\(g^{-1}\\) through \\((6, 3)\\) with HA \\(y = 2\\)."
      },
      {
        label: "c", text: "Solve \\(g(x) = g^{-1}(x)\\). [2 marks]",
        steps: [
          { type: "concept", content: "\\(g(x) = g^{-1}(x)\\) occurs on \\(y = x\\). So solve \\(g(x) = x\\)." },
          { type: "algebra", content: "\\(2x + \\ln(x-2) = x\\)" },
          { type: "algebra", content: "\\(x + \\ln(x-2) = 0\\)" },
          { type: "algebra", content: "Using TI-84: \\(x \\approx 2.12\\)." },
          { type: "answer", content: "\\(x \\approx 2.12\\). Point: \\((2.12, 2.12)\\)." }
        ],
        answer: "\\(x \\approx 2.12\\)"
      }
    ],
    hints: [
      "Part (a): \\(\\ln\\) requires a positive argument.",
      "Part (c): Use the key trick: \\(g(x) = g^{-1}(x)\\) \\(\\Rightarrow\\) solve \\(g(x) = x\\)."
    ],
    examTip: "Intersection of \\(f\\) and \\(f^{-1}\\) always occurs on the line \\(y = x\\). This is a classic IB exam question!",
    graph: {
      type: "inverse-sketch",
      fn: "2*x + Math.log(x - 2)",
      inverseFn: null,
      domain: [2.01, 6],
      inverseDomain: [-5, 15],
      keyPoints: [[3, 6]],
      inverseKeyPoints: [[6, 3]],
      showYequalsX: true,
      asymptote: { original: { type: "vertical", value: 2 }, inverse: { type: "horizontal", value: 2 } }
    },
    ti84: [
      "Y1 = 2X+ln(X-2), Y2 = X",
      "Set window: Xmin=2, Xmax=6",
      "Press 2nd TRACE > 5:intersect",
      "Read intersection: X ≈ 2.12"
    ],
    questionVideo: "videos/media/videos/question_videos/480p15/Q5_5_8.mp4",
    questionSubtitle: "videos/media/videos/question_videos/480p15/Q5_5_8.vtt"
  }
];

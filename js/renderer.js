// ============================================================
// renderer.js — Question card rendering, step revealer, hints, tips
// ============================================================

const Renderer = (() => {
  let currentPartIndex = 0;
  let revealedSteps = {};  // key: "partIndex" -> count of revealed steps
  let answerShown = {};    // key: "partIndex" -> boolean
  let hintIndex = 0;
  let tipShown = false;
  let ti84Shown = false;

  function reset() {
    currentPartIndex = 0;
    revealedSteps = {};
    answerShown = {};
    hintIndex = 0;
    tipShown = false;
    ti84Shown = false;
  }

  function render(question) {
    reset();
    const container = document.getElementById('question-container');
    container.style.display = 'block';
    document.getElementById('welcome').style.display = 'none';

    const q = question;
    const totalParts = q.parts.length;

    // Video banner for each section
    const sec = SECTIONS.find(s => s.id === q.section);
    let html = '';
    if (sec && sec.video) {
      html += `<div class="video-banner" id="video-banner">
        <span class="video-banner__icon">&#9654;</span>
        <span class="video-banner__text">Watch the <strong>${sec.id} ${sec.title}</strong> explainer video</span>
        <button class="btn btn--video btn--sm" id="btn-section-video" data-section="${sec.id}">Watch Video</button>
      </div>`;
    }

    html += `<div class="q-card">`;

    // Header
    html += `<div class="q-card__header">
      <span class="q-card__id">${q.id} — ${q.label}</span>
      ${q.marks ? `<span class="q-card__marks">${q.marks} marks</span>` : ''}
    </div>`;

    // Statement
    html += `<div class="q-card__statement">${q.statement}</div>`;

    // Part tabs (if multiple parts)
    if (totalParts > 1) {
      html += `<div class="part-tabs" id="part-tabs">`;
      q.parts.forEach((part, i) => {
        html += `<button class="part-tab${i === 0 ? ' active' : ''}" data-part="${i}">${part.label}</button>`;
      });
      html += `</div>`;
    }

    // Part contents
    q.parts.forEach((part, i) => {
      html += `<div class="part-content" id="part-${i}" ${i !== 0 ? 'hidden' : ''}>`;

      // Part text
      if (part.text) {
        html += `<p style="margin-bottom:12px; font-size:0.95rem;">${part.text}</p>`;
      }

      // Steps area
      html += `<div class="steps-area" id="steps-${i}">`;
      part.steps.forEach((step, si) => {
        html += `<div class="step step--${step.type}" id="step-${i}-${si}" hidden>${step.content}</div>`;
      });
      html += `</div>`;

      // Answer box
      html += `<div class="answer-box" id="answer-${i}" hidden>${part.answer}</div>`;

      html += `</div>`;
    });

    // Action buttons
    html += `<div class="q-card__actions" id="q-actions">
      <button class="btn btn--primary" id="btn-next-step">Show Next Step</button>
      <button class="btn btn--green" id="btn-show-answer">Show Answer</button>
    </div>`;

    // Bottom toolbar
    html += `<div class="q-card__toolbar" id="q-toolbar">`;
    if (q.hints && q.hints.length > 0) {
      html += `<button class="btn btn--amber" id="btn-hint">Hint (1 of ${q.hints.length})</button>`;
    }
    if (q.examTip) {
      html += `<button class="btn btn--purple" id="btn-tip">IB Exam Tip</button>`;
    }
    if (q.ti84) {
      html += `<button class="btn btn--teal" id="btn-ti84">TI-84 Steps</button>`;
    }
    html += `</div>`;

    // Hint callout
    html += `<div class="callout callout--hint" id="hint-box" hidden>
      <div class="callout__title callout__title--hint">Hint</div>
      <div id="hint-content"></div>
    </div>`;

    // Exam tip callout
    if (q.examTip) {
      html += `<div class="callout callout--tip" id="tip-box" hidden>
        <div class="callout__title callout__title--tip">IB Exam Tip</div>
        <div>${q.examTip}</div>
      </div>`;
    }

    // TI-84 callout
    if (q.ti84) {
      html += `<div class="callout callout--ti84" id="ti84-box" hidden>
        <div class="callout__title callout__title--ti84">TI-84 CE-T Steps</div>
        <ol>${q.ti84.map(s => `<li>${s}</li>`).join('')}</ol>
      </div>`;
    }

    // Graph area
    if (q.graph) {
      html += `<div class="graph-area" id="graph-area">
        <div class="graph-area__plot" id="graph-plot"></div>
        <div class="graph-area__controls" id="graph-controls"></div>
      </div>`;
    }

    html += `</div>`; // close q-card

    // Navigation
    const allQ = QUESTIONS;
    const idx = allQ.findIndex(qq => qq.id === q.id);
    const prev = idx > 0 ? allQ[idx - 1] : null;
    const next = idx < allQ.length - 1 ? allQ[idx + 1] : null;

    html += `<div class="q-nav">
      <button class="q-nav__btn" id="btn-prev" ${!prev ? 'disabled' : ''} data-id="${prev ? prev.id : ''}">
        &larr; <span class="q-nav__label">${prev ? prev.id : ''}</span>
      </button>
      <button class="mark-complete ${Progress.isCompleted(q.id) ? 'completed' : ''}" id="btn-complete" data-id="${q.id}">
        ${Progress.isCompleted(q.id) ? '&#10003; Completed' : 'Mark Complete'}
      </button>
      <button class="q-nav__btn" id="btn-next" ${!next ? 'disabled' : ''} data-id="${next ? next.id : ''}">
        <span class="q-nav__label">${next ? next.id : ''}</span> &rarr;
      </button>
    </div>`;

    container.innerHTML = html;

    // Render KaTeX
    renderMath(container);

    // Render graph if present
    if (q.graph) {
      setTimeout(() => Graphs.render(q.graph, 'graph-plot', 'graph-controls'), 100);
    }

    // Bind video banner
    const btnVideo = document.getElementById('btn-section-video');
    if (btnVideo) {
      btnVideo.addEventListener('click', () => App.openVideo(btnVideo.dataset.section));
    }

    // Bind events
    bindEvents(q);

    // Mark as in-progress
    if (!Progress.isCompleted(q.id)) {
      Progress.setStatus(q.id, 'in-progress');
    }
  }

  function bindEvents(q) {
    // Part tabs
    const tabs = document.querySelectorAll('.part-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const partIdx = parseInt(tab.dataset.part);
        switchPart(partIdx, tabs, q);
      });
    });

    // Show next step
    const btnStep = document.getElementById('btn-next-step');
    if (btnStep) {
      btnStep.addEventListener('click', () => showNextStep(q));
    }

    // Show answer
    const btnAnswer = document.getElementById('btn-show-answer');
    if (btnAnswer) {
      btnAnswer.addEventListener('click', () => toggleAnswer(q));
    }

    // Hint
    const btnHint = document.getElementById('btn-hint');
    if (btnHint) {
      btnHint.addEventListener('click', () => showNextHint(q));
    }

    // Exam tip
    const btnTip = document.getElementById('btn-tip');
    if (btnTip) {
      btnTip.addEventListener('click', () => toggleTip());
    }

    // TI-84
    const btnTi84 = document.getElementById('btn-ti84');
    if (btnTi84) {
      btnTi84.addEventListener('click', () => toggleTi84());
    }

    // Navigation
    const btnPrev = document.getElementById('btn-prev');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (btnPrev.dataset.id) App.navigateTo(btnPrev.dataset.id);
      });
    }
    const btnNext = document.getElementById('btn-next');
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (btnNext.dataset.id) App.navigateTo(btnNext.dataset.id);
      });
    }

    // Mark complete
    const btnComplete = document.getElementById('btn-complete');
    if (btnComplete) {
      btnComplete.addEventListener('click', () => {
        const id = btnComplete.dataset.id;
        if (Progress.isCompleted(id)) {
          Progress.setStatus(id, 'in-progress');
          btnComplete.classList.remove('completed');
          btnComplete.innerHTML = 'Mark Complete';
        } else {
          Progress.setStatus(id, 'completed');
          btnComplete.classList.add('completed');
          btnComplete.innerHTML = '&#10003; Completed';
        }
        App.updateSidebar();
        Progress.updateHeader();
      });
    }
  }

  function switchPart(idx, tabs, q) {
    currentPartIndex = idx;
    tabs.forEach(t => t.classList.remove('active'));
    tabs[idx].classList.add('active');
    q.parts.forEach((_, i) => {
      const el = document.getElementById(`part-${i}`);
      if (el) el.hidden = (i !== idx);
    });

    // Update "Show Next Step" button state for this part
    const key = idx.toString();
    const revealed = revealedSteps[key] || 0;
    const totalSteps = q.parts[idx].steps.length;
    const btnStep = document.getElementById('btn-next-step');
    if (btnStep) btnStep.disabled = (revealed >= totalSteps);

    // Update "Show Answer" button text for this part
    const btnAnswer = document.getElementById('btn-show-answer');
    if (btnAnswer) btnAnswer.textContent = answerShown[key] ? 'Hide Answer' : 'Show Answer';
  }

  function showNextStep(q) {
    const pi = currentPartIndex;
    const key = pi.toString();
    if (!(key in revealedSteps)) revealedSteps[key] = 0;

    const totalSteps = q.parts[pi].steps.length;
    if (revealedSteps[key] < totalSteps) {
      const stepEl = document.getElementById(`step-${pi}-${revealedSteps[key]}`);
      if (stepEl) {
        stepEl.hidden = false;
        renderMath(stepEl);
      }
      revealedSteps[key]++;
    }

    if (revealedSteps[key] >= totalSteps) {
      const btn = document.getElementById('btn-next-step');
      if (btn) btn.disabled = true;
    }
  }

  function toggleAnswer(q) {
    const pi = currentPartIndex;
    const key = pi.toString();
    const box = document.getElementById(`answer-${pi}`);
    if (!box) return;

    if (answerShown[key]) {
      box.hidden = true;
      answerShown[key] = false;
      document.getElementById('btn-show-answer').textContent = 'Show Answer';
    } else {
      box.hidden = false;
      renderMath(box);
      answerShown[key] = true;
      document.getElementById('btn-show-answer').textContent = 'Hide Answer';
    }
  }

  function showNextHint(q) {
    if (!q.hints || q.hints.length === 0) return;
    const hintBox = document.getElementById('hint-box');
    const hintContent = document.getElementById('hint-content');
    const btnHint = document.getElementById('btn-hint');

    if (hintIndex < q.hints.length) {
      hintBox.hidden = false;
      const hintsToShow = q.hints.slice(0, hintIndex + 1);
      hintContent.innerHTML = hintsToShow.map((h, i) => `<p style="margin-bottom:6px;"><strong>Hint ${i+1}:</strong> ${h}</p>`).join('');
      renderMath(hintBox);
      hintIndex++;
      if (hintIndex < q.hints.length) {
        btnHint.textContent = `Hint (${hintIndex + 1} of ${q.hints.length})`;
      } else {
        btnHint.textContent = 'All hints shown';
        btnHint.disabled = true;
      }
    }
  }

  function toggleTip() {
    const tipBox = document.getElementById('tip-box');
    if (!tipBox) return;
    tipShown = !tipShown;
    tipBox.hidden = !tipShown;
    if (!tipBox.hidden) renderMath(tipBox);
  }

  function toggleTi84() {
    const ti84Box = document.getElementById('ti84-box');
    if (!ti84Box) return;
    ti84Shown = !ti84Shown;
    ti84Box.hidden = !ti84Shown;
  }

  function renderMath(el) {
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(el, {
        delimiters: [
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
          { left: "$$", right: "$$", display: true }
        ],
        throwOnError: false
      });
    }
  }

  return { render, renderMath };
})();

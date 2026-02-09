// ============================================================
// app.js — App controller: routing, navigation, sidebar, init
// ============================================================

const App = (() => {
  function init() {
    buildSidebar();
    bindGlobalEvents();
    Progress.updateHeader();
    handleRoute();
    window.addEventListener('hashchange', handleRoute);
  }

  function buildSidebar() {
    const nav = document.getElementById('sidebar-nav');
    if (!nav) return;

    let html = '';
    SECTIONS.forEach(sec => {
      const sectionQuestions = QUESTIONS.filter(q => q.section === sec.id);
      html += `<div class="sidebar-section" data-section="${sec.id}">
        <div class="sidebar-section__header">
          <span class="arrow">&#9660;</span>
          ${sec.id} ${sec.title}
          ${sec.video ? `<button class="sidebar-video-btn" data-section="${sec.id}" title="Watch explainer video">&#9654;</button>` : ''}
        </div>
        <div class="sidebar-section__items">`;

      sectionQuestions.forEach(q => {
        const status = Progress.getStatus(q.id);
        let statusClass = '';
        let statusIcon = '';
        if (status === 'completed') {
          statusClass = 'completed';
          statusIcon = '&#10003;';
        } else if (status === 'in-progress') {
          statusClass = 'in-progress';
          statusIcon = '&#8226;';
        }

        html += `<a class="sidebar-item" data-id="${q.id}" href="#${q.id}">
          <span class="sidebar-item__status ${statusClass}">${statusIcon}</span>
          ${q.label}${q.marks ? ` <small style="opacity:0.6">[${q.marks}m]</small>` : ''}
        </a>`;
      });

      html += `</div></div>`;
    });

    nav.innerHTML = html;

    // Section collapse toggle
    nav.querySelectorAll('.sidebar-section__header').forEach(header => {
      header.addEventListener('click', () => {
        header.parentElement.classList.toggle('collapsed');
      });
    });
  }

  function updateSidebar() {
    const items = document.querySelectorAll('.sidebar-item');
    items.forEach(item => {
      const id = item.dataset.id;
      const status = Progress.getStatus(id);
      const statusEl = item.querySelector('.sidebar-item__status');
      statusEl.className = 'sidebar-item__status';
      statusEl.innerHTML = '';
      if (status === 'completed') {
        statusEl.classList.add('completed');
        statusEl.innerHTML = '&#10003;';
      } else if (status === 'in-progress') {
        statusEl.classList.add('in-progress');
        statusEl.innerHTML = '&#8226;';
      }
    });
  }

  function setActiveItem(questionId) {
    document.querySelectorAll('.sidebar-item').forEach(item => {
      item.classList.toggle('active', item.dataset.id === questionId);
    });
  }

  function handleRoute() {
    const hash = window.location.hash.replace('#', '');
    if (hash && QUESTIONS.find(q => q.id === hash)) {
      navigateTo(hash);
    } else {
      showWelcome();
    }
  }

  function showWelcome() {
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('question-container').style.display = 'none';
    setActiveItem('');
  }

  function navigateTo(questionId) {
    const q = QUESTIONS.find(qq => qq.id === questionId);
    if (!q) return;

    window.location.hash = questionId;
    setActiveItem(questionId);
    Renderer.render(q);

    // Close sidebar on mobile
    closeSidebar();

    // Scroll to top
    window.scrollTo(0, 0);
  }

  function bindGlobalEvents() {
    // Hamburger
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    // Home link
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
      homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '';
        showWelcome();
      });
    }

    if (hamburger) {
      hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
      });
    }
    if (overlay) {
      overlay.addEventListener('click', closeSidebar);
    }

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    if (themeToggle) {
      // Load saved theme
      const saved = localStorage.getItem('ib-math-theme');
      if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.innerHTML = '&#9728;';
      }

      themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        themeIcon.innerHTML = next === 'dark' ? '&#9728;' : '&#9790;';
        localStorage.setItem('ib-math-theme', next);
      });
    }

    // Reset progress
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Reset all progress? This cannot be undone.')) {
          Progress.resetAll();
          updateSidebar();
          Progress.updateHeader();
        }
      });
    }

    // Welcome section cards
    document.querySelectorAll('.welcome__card').forEach(card => {
      card.addEventListener('click', () => {
        const sec = card.dataset.section;
        const firstQ = QUESTIONS.find(q => q.section === sec);
        if (firstQ) navigateTo(firstQ.id);
      });
    });

    // Video buttons — welcome cards
    document.querySelectorAll('.btn--video').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openVideo(btn.dataset.section);
      });
    });

    // Video buttons — sidebar
    document.querySelectorAll('.sidebar-video-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openVideo(btn.dataset.section);
      });
    });

    // Video modal close
    const videoClose = document.getElementById('video-close');
    const videoBackdrop = document.getElementById('video-backdrop');
    if (videoClose) videoClose.addEventListener('click', closeVideo);
    if (videoBackdrop) videoBackdrop.addEventListener('click', closeVideo);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeVideo();
    });
  }

  function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }

  function openVideo(sectionId) {
    const sec = SECTIONS.find(s => s.id === sectionId);
    if (!sec || !sec.video) return;

    const modal = document.getElementById('video-modal');
    const player = document.getElementById('video-player');
    const title = document.getElementById('video-title');

    title.textContent = `${sec.id} ${sec.title}`;
    player.src = sec.video;

    // Remove any existing tracks and add subtitle track
    player.querySelectorAll('track').forEach(t => t.remove());
    if (sec.subtitle) {
      const track = document.createElement('track');
      track.kind = 'captions';
      track.label = 'English';
      track.srclang = 'en';
      track.src = sec.subtitle;
      track.default = true;
      player.appendChild(track);
    }

    modal.hidden = false;
    player.play();
  }

  function closeVideo() {
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('video-player');
    player.pause();
    player.src = '';
    modal.hidden = true;
  }

  // Public API
  return { init, navigateTo, updateSidebar, openVideo };
})();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', App.init);

// ============================================================
// progress.js — localStorage progress tracking
// ============================================================

const Progress = (() => {
  const STORAGE_KEY = 'ib-math-ch5-progress';

  function load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  function save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch { /* storage full or unavailable */ }
  }

  function getStatus(questionId) {
    const data = load();
    return data[questionId] || 'not-started';
  }

  function setStatus(questionId, status) {
    const data = load();
    data[questionId] = status;
    save(data);
  }

  function isCompleted(questionId) {
    return getStatus(questionId) === 'completed';
  }

  function getCompletedCount() {
    const data = load();
    return Object.values(data).filter(s => s === 'completed').length;
  }

  function getTotalCount() {
    return typeof QUESTIONS !== 'undefined' ? QUESTIONS.length : 49;
  }

  function updateHeader() {
    const completed = getCompletedCount();
    const total = getTotalCount();
    const pct = total > 0 ? (completed / total) * 100 : 0;

    const fill = document.getElementById('progress-fill');
    const text = document.getElementById('progress-text');
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `${completed} / ${total}`;
  }

  function resetAll() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch { /* ok */ }
    updateHeader();
  }

  return { load, getStatus, setStatus, isCompleted, getCompletedCount, getTotalCount, updateHeader, resetAll };
})();

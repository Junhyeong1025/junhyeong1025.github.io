// Highlight current page in nav
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });
})();

// Expand a collapsed publication group when it is linked to directly
(function () {
  function openFromHash() {
    if (!window.location.hash) return;
    let target;
    try {
      target = document.querySelector(window.location.hash);
    } catch (e) {
      return;
    }
    const details = target && target.querySelector('details');
    if (details && !details.open) {
      details.open = true;
      target.scrollIntoView();
    }
  }
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
})();

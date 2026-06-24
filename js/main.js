// Highlight current page in nav
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });
})();

// Open pub thumbnails in new tab on click
document.querySelectorAll('.pub-thumb img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => window.open(img.src, '_blank'));
});

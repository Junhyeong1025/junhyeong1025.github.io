// Open pub thumbnails in new tab on click
document.querySelectorAll('.pub-thumb img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => window.open(img.src, '_blank'));
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function onScroll() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 80;
    if (window.scrollY >= top) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

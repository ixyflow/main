// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

function setMenuOpen(isOpen) {
  navLinks?.classList.toggle('open', isOpen);
  navToggle?.setAttribute('aria-expanded', String(isOpen));
}

navToggle?.addEventListener('click', () => {
  setMenuOpen(!navLinks?.classList.contains('open'));
});

// Close mobile nav on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});

// Let the browser submit the form without pretending delivery succeeded.
document.getElementById('contactForm')?.addEventListener('submit', e => {
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Opening Email...';
  setTimeout(() => {
    btn.textContent = originalText;
  }, 4000);
});

// Fade-in on scroll
const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  }),
  { threshold: 0.15 }
);

document.querySelectorAll('.service-card, .stat, .about-text, .trust-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

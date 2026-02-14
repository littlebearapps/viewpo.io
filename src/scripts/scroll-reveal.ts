// Scroll reveal: applies .visible to .reveal elements when they enter viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

function observeRevealElements(): void {
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

observeRevealElements();
document.addEventListener('astro:after-swap', observeRevealElements);

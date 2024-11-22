const sections = document.querySelectorAll('.stacked-section');

const revealSection = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

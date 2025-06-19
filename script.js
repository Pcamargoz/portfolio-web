document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('.cta-button');
  button.addEventListener('mouseenter', () => {
    button.style.boxShadow = '0 0 15px #ff4b2b';
  });
  button.addEventListener('mouseleave', () => {
    button.style.boxShadow = 'none';
  });
});

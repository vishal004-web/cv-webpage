// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll to top button
const toTopBtn = document.getElementById("toTop");
window.onscroll = () => {
  toTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

toTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Dark mode toggle
const toggleBtn = document.getElementById("mode-toggle");
toggleBtn.onclick = () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.innerHTML = document.body.classList.contains("dark-mode")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
};

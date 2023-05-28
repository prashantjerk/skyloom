const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle('active');
  navItems.classList.toggle("show-menu");
});

const navLinks = document.querySelectorAll('.nav-item');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navItems.classList.remove('show-menu');
  });
});

const main = document.querySelector('main');
main.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navItems.classList.remove('show-menu');
});

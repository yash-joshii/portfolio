// let sections = document.querySelectorAll('section')
// let navlinks = document.querySelectorAll('header nav a')
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let header = document.querySelector(".header");
window.onscroll = () => {
  header.classList.toggle("sticky", window.scroll > 100);
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let darkModeIcon = document.querySelector("#darkmode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

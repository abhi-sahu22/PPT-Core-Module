const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
});




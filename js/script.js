let menu = document.querySelector(".hamburger__menu");
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");

menu.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  content.classList.toggle("active");
});

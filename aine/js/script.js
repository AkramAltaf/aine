let menu = document.querySelector(".hamburger__menu");
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");

menu.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  content.classList.toggle("active");
});

let list = document.querySelectorAll(".active");

list.addEventListener("click", function (e) {
  list.forEach.call(elems, function (el) {
    el.classList.remove("active");
  });
  e.target.className = "active";
});

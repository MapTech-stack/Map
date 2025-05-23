const menuIcon = document.getElementById("navbar-toggle");
const nav = document.getElementById("primary-navigation");
const menuImg = "url('images/icon-menu.svg')";
const closeImg = "url('images/icon-close-menu.svg')";
let isOpen = false;

menuIcon.addEventListener("click", () => {
  isOpen = nav.classList.toggle("open");

  menuIcon.style.backgroundImage = isOpen ? closeImg : menuImg;
});

document.addEventListener("click", (e) => {
  const clickedOut = !nav.contains(e.target) && !menuIcon.contains(e.target);

  if (clickedOut && nav.classList.contains("open")) {
    nav.classList.remove("open");
    menuIcon.style.backgroundImage = menuImg;
  }
});

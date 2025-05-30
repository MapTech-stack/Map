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

const container = document.getElementById("carousel");
const testimonials = container.querySelectorAll(".testimonial");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
let intervalId;

function showSlide(i) {
  index = (i + testimonials.length) % testimonials.length;
  container.style.transform = `translateX(-${index * 105}%)`;
}

function startAutoplay() {
  intervalId = setInterval(() => {
    showSlide(index + 1);
  }, 5000); // 5 seconds
}

function stopAutoplay() {
  clearInterval(intervalId);
}

function resetAutoplay() {
  stopAutoplay();
  startAutoplay();
}

prevBtn.addEventListener("click", () => {
  showSlide(index - 1);
  resetAutoplay();
});

nextBtn.addEventListener("click", () => {
  showSlide(index + 1);
  resetAutoplay();
});

let startX = 0;

container.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  stopAutoplay();
});

container.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (diff > 50) showSlide(index + 1);
  else if (diff < -50) showSlide(index - 1);

  resetAutoplay();
});

startAutoplay();

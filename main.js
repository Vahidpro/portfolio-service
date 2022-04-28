var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var closeButton = document.querySelector(".close-button");

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  setTimeout(function () {
    backdrop.classList.add("open");
  }, 10);
});

closeButton.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  setTimeout(function () {
    backdrop.classList.remove("open");
  }, 10);
});

// Scroll nav
var nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

var scroller = window.scrollY;
console.log(scroller);

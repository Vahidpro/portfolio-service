var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var closeButton = document.querySelector(".close-button");

toggleButton.addEventListener("click", function () {
  // mobileNav.classList.add("open");
  mobileNav.classList.add("slide");
});

closeButton.addEventListener("click", function () {
  // mobileNav.classList.remove("open");
  mobileNav.classList.remove("slide");
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

// Animate mobile nav

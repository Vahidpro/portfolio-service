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

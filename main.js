var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var closeButton = document.querySelector(".close-button");

// console.log(mobileNav);

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  toggleButton.style.display = "none";
  setTimeout(function () {
    backdrop.classList.add("open");
  }, 10);
});

closeButton.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  toggleButton.style.display = "block";
  setTimeout(function () {
    backdrop.classList.remove("open");
  }, 10);
});

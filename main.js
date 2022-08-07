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

const header = document.querySelector(".header");

const cookieMessage = document.createElement("div");
cookieMessage.classList.add("cookie-message");

cookieMessage.innerHTML = `ما از کوکی ها برای بهبود تجربه کاربری شما استفاده میکنیم

<button class="btn light btn--close-cookie">فهمیدم!</button>`;

header.append(cookieMessage);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    cookieMessage.remove();
  });

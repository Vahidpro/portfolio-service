// Backdrop

var backdrop = document.querySelector(".backdrop");
var planButtons = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var closeModalNoButton = document.querySelector(".modal-action-no");

console.log(closeModalNoButton);

for (let i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener("click", function () {
    backdrop.style.display = "block";
    setTimeout(function () {
      backdrop.classList.add("open");
    }, 10);
    modal.classList.add("open");
  });
}

backdrop.addEventListener("click", function () {
  closeModal();
});

closeModalNoButton.addEventListener("click", function () {
  closeModal();
});

function closeModal() {
  modal.classList.remove("open");
  backdrop.classList.remove("open");

  setTimeout(function () {
    backdrop.style.display = "none";
  }, 300);
}

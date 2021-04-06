var modal = document.querySelector("#modal");
// var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-modal");
var openButton = document.querySelector("#open-modal");
var uploadsButton = document.querySelector("#uploadsbtn");
var uploads = document.querySelector("#uploads");

closeButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  //   modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  //   modalOverlay.classList.toggle("closed");
});

uploadsButton.addEventListener("click", function () {
  uploads.classList.toggle("closed");
});

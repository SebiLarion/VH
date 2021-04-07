const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#close-modal");
const openButton1 = document.querySelector(".modal-open-1");
const openButton2 = document.querySelector(".modal-open-2");
const openButton3 = document.querySelector(".modal-open-3");
const openButton4 = document.querySelector(".modal-open-4");
const openButton5 = document.querySelector(".modal-open-5");
const openButton6 = document.querySelector(".modal-open-6");
const openButton7 = document.querySelector(".modal-open-7");
const openButton8 = document.querySelector(".modal-open-8");
const openButton9 = document.querySelector(".modal-open-9");
const openButton10 = document.querySelector(".modal-open-10");
const uploadButton = document.querySelector("#uploadBtn");
const uploads = document.querySelector("#uploads");
const infoButton = document.querySelector("#info");
const prevButton = document.querySelector("#previewBtn");
const preview = document.querySelector("#preview");

closeButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
});

openButton1.addEventListener("click", function () {
  modal.classList.toggle("closed");
});
openButton2.addEventListener("click", function () {
  modal.classList.toggle("closed");
});
openButton3.addEventListener("click", function () {
  modal.classList.toggle("closed");
});
openButton4.addEventListener("click", function () {
  modal.classList.toggle("closed");
});
openButton5.addEventListener("click", function () {
  modal.classList.toggle("closed");
});
openButton6.addEventListener("click", function () {
  modal.classList.toggle("closed");
});
openButton7.addEventListener("click", function () {
  modal.classList.toggle("closed");
});
openButton8.addEventListener("click", function () {
  modal.classList.toggle("closed");
});
openButton9.addEventListener("click", function () {
  modal.classList.toggle("closed");
});
openButton10.addEventListener("click", function () {
  modal.classList.toggle("closed");
});

uploadButton.addEventListener("click", function () {
  uploads.classList.remove("hidden");
  preview.classList.add("hidden");
  information.classList.add("hidden");
});

infoButton.addEventListener("click", function () {
  uploads.classList.add("hidden");
  preview.classList.add("hidden");
  information.classList.remove("hidden");
});

prevButton.addEventListener("click", function () {
  uploads.classList.add("hidden");
  information.classList.add("hidden");
  preview.classList.remove("hidden");
});

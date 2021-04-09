const uploadButton = document.querySelector("#uploadBtn");
const uploads = document.querySelector("#uploads");
const infoButton = document.querySelector("#info");
const prevButton = document.querySelector("#previewBtn");
const preview = document.querySelector("#preview");

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

//document selectors
const addBookButton = document.querySelector(".add-button");
const popupWindow = document.querySelector(".popup");
const cancelBookButton = document.querySelector(".cancel-button");
const xButton = document.querySelector(".x-button");
const removeBookWindow = document.querySelector(".remove-book");
const noButton = document.querySelector(".remove-button-no");

//project global variables
const bookList = [];

//event listeners for the popup windows
addBookButton.addEventListener("click", () => {
  popupWindow.style.display = "flex";
});

cancelBookButton.addEventListener("click", () => {
  popupWindow.style.display = "none";
});

xButton.addEventListener("click", () => {
  removeBookWindow.style.display = "flex";
});

noButton.addEventListener("click", () => {
  removeBookWindow.style.display = "none";
});

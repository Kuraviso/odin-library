//document selectors
const addBookButton = document.querySelector(".add-button");
const popupWindow = document.querySelector(".popup");
const cancelBookButton = document.querySelector(".cancel-button");
const xButton = document.querySelector(".x-button");
const removeBookWindow = document.querySelector(".remove-book");
const noButton = document.querySelector(".remove-button-no");
const newBookButton = document.querySelector(".new-book");
const formElement = document.querySelector(".form");

//input document selectors
const userInputName = document.querySelector("#bookName");
const userInputAuthor = document.querySelector("#bookAuthor");
const userInputPages = document.querySelector("#bookPages");

//project global variables
const bookList = [];

//event listeners for buttons
newBookButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(
    userInputName.value,
    userInputAuthor.value,
    userInputPages.value
  );
  formElement.reset();
  popupWindow.style.display = "none";
});

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

//new book constructor
function book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.completed = false;
  this.info = () => {
    return `${this.name} by ${this.author}, has ${this.pages} pages`;
  };
}

//project functions
function addBookToLibrary(nameInput, authorInput, pagesInput) {
  const newBook = new book(nameInput, authorInput, pagesInput);
  bookList.push(newBook);
  console.log(newBook.info());
}

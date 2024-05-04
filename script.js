//create an array for the books to be stored
const myLibrary = [];
const addBookButton = document.querySelector(".addButton");

// create a constructor for the library
function book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookInformation = function () {
    return `${this.name} by ${this.author}, ${this.pages} pages , ${this.read}`;
  };
}

//create a function that gets the inputs from the user and adds the book to the library

function addBookToLibrary(bookName, bookAuthor, bookPages) {
  const container = document.querySelector(".container");
  const bookInfo = document.createElement("p");
  const boxInput = document.createElement("input");
  const newBook = new book(bookName, bookAuthor, bookPages, boxInput.checked);
  boxInput.type = "checkbox";
  container.appendChild(bookInfo);
  container.appendChild(boxInput);
  myLibrary.push(newBook);
  bookInfo.innerText = newBook.bookInformation();
}

function captureInputs() {
  const bookNameInput = document.querySelector(".nameInput");
  const bookAuthorInput = document.querySelector(".authorInput");
  const bookPagesInput = document.querySelector(".pagesInput");

  //create the variables
  const bookName = bookNameInput.value;
  const bookAuthor = bookAuthorInput.value;
  const bookPages = bookPagesInput.value;

  addBookToLibrary(bookName, bookAuthor, bookPages);
  console.log(myLibrary);
}

addBookButton.addEventListener("click", captureInputs);

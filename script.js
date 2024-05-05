//document selectors
const addBookButton = document.querySelector(".add-button");
const popupWindow = document.querySelector(".popup");
const cancelBookButton = document.querySelector(".cancel-button");
const xButton = document.querySelectorAll(".x-button");
const removeBookWindow = document.querySelector(".remove-book");
const noButton = document.querySelector(".remove-button-no");
const newBookButton = document.querySelector(".new-book");
const formElement = document.querySelector(".form");
const tableBodyContainer = document.querySelector(".main-table-body");

//input document selectors
const userInputName = document.querySelector("#bookName");
const userInputAuthor = document.querySelector("#bookAuthor");
const userInputPages = document.querySelector("#bookPages");

//project global variables
const bookList = [
  {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 218,
    completed: true,
  },
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 324,
    completed: false,
  },
  { name: "1984", author: "George Orwell", pages: 328, completed: true },
  {
    name: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 432,
    completed: false,
  },
  {
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 277,
    completed: true,
  },
];

//event listeners for buttons
newBookButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputValidation()) {
    addBookToLibrary(
      userInputName.value,
      userInputAuthor.value,
      userInputPages.value
    );
    formElement.reset();
    popupWindow.style.display = "none";
  } else {
    return;
  }
});

//event listeners for the popup windows
addBookButton.addEventListener("click", () => {
  popupWindow.style.display = "flex";
});

cancelBookButton.addEventListener("click", () => {
  formElement.reset();
  userInputName.classList.remove("error");
  userInputAuthor.classList.remove("error");
  userInputPages.classList.remove("error");
  popupWindow.style.display = "none";
});

xButton.forEach((button) => {
  button.addEventListener("click", () => {
    removeBookWindow.style.display = "flex";
  });
});

noButton.addEventListener("click", () => {
  removeBookWindow.style.display = "none";
});

// Add event listeners to input fields to remove error class on keyup
userInputName.addEventListener("keyup", removeError);
userInputAuthor.addEventListener("keyup", removeError);
userInputPages.addEventListener("keyup", removeError);

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
  console.log(bookList);
  addBookToTable();
}

function inputValidation() {
  let isValid = false;

  if (
    userInputName.value !== "" &&
    userInputAuthor.value !== "" &&
    userInputPages.value !== ""
  ) {
    isValid = true;
  } else {
    if (userInputName.value == "") {
      userInputName.classList.add("error");
    }
    if (userInputAuthor.value == "") {
      userInputAuthor.classList.add("error");
    }
    if (userInputPages.value == "") {
      userInputPages.classList.add("error");
    }
  }

  return isValid;
}

function removeError() {
  this.classList.remove("error");
}

function addBookToTable() {
  // Clear existing table content
  tableBodyContainer.innerHTML = "";

  bookList.forEach((item) => {
    //create the new elements
    const newRow = document.createElement("tr");
    const newName = document.createElement("td");
    const newAuthor = document.createElement("td");
    const newPages = document.createElement("td");
    const newCheckboxContainer = document.createElement("td");
    const newButtonContainer = document.createElement("td");
    const newCheckbox = document.createElement("input");
    const newButton = document.createElement("button");

    //add the required classes and types
    newCheckbox.type = "checkbox";
    newButton.classList.add("x-button");

    //attach the item info to the table
    newName.innerText = item.name;
    newAuthor.innerText = item.author;
    newPages.innerText = item.pages;
    newButton.innerText = "x";

    //function to validate checkboxes
    if (item.completed) {
      newCheckbox.checked = true;
    }
    //append childs to the container

    newCheckboxContainer.appendChild(newCheckbox);
    newButtonContainer.appendChild(newButton);
    newRow.appendChild(newName);
    newRow.appendChild(newAuthor);
    newRow.appendChild(newPages);
    newRow.appendChild(newCheckboxContainer);
    newRow.appendChild(newButtonContainer);

    //add the event listener
    newButton.addEventListener("click", () => {
      removeBookWindow.style.display = "flex";
    });

    //append the new created element to the main container
    tableBodyContainer.appendChild(newRow);
  });
}

addBookToTable();

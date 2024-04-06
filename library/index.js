const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(book) {
    myLibrary.unshift(book);
}

let book1 = new Book("Shantaram", "Gregory David Roberts", "753", "Read");
let book2 = new Book("The White Tiger", "Aravind Adiga", "350", "Read");
let book3 = new Book("Harry Potter, The Chamber of Secrets", "JK Rowling", "300", "Not read");
let book4 = new Book("Verborgen Geschiedenis", "Donna Tart", "452", "Not read");

addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);

const bookcontainer = document.getElementById("bookcontainer");

let full = parseInt(myLibrary.length);

function renderLibrary (amount) {
    for (let i = 0; i < amount; i++) {
        const newCard = document.createElement("div");
        newCard.className = "book";
        bookcontainer.appendChild(newCard);
        const newTitle = document.createElement("h5");
        const newAuthor = document.createElement("h5");
        const newPages = document.createElement("h5");
        const newReadButton = document.createElement("button");
        const newDeleteButton = document.createElement("button");
        newTitle.textContent = myLibrary[i].title;
        newAuthor.textContent = myLibrary[i].author;
        newPages.textContent = myLibrary[i].pages;
        newReadButton.textContent = myLibrary[i].read;
        if (newReadButton.textContent === "Not read") {
            newReadButton.className = "button-lightred";
          }
          else {
            newReadButton.className = "button-lightgreen";
          }
        newDeleteButton.textContent = "Remove";
    
        newCard.appendChild(newTitle);
        newCard.appendChild(newAuthor);
        newCard.appendChild(newPages);
        newCard.appendChild(newReadButton);
        newCard.appendChild(newDeleteButton);
    
        newDeleteButton.addEventListener('click', () => {
            bookcontainer.removeChild(newCard);
          });
    
        newReadButton.addEventListener("click", () => {
          if (newReadButton.textContent === "Not read") {
            newReadButton.textContent = "Read";
            newReadButton.className = "button-lightgreen";
          }
          else {
            newReadButton.textContent = "Not read";
            newReadButton.className = "button-lightred";
          }
          });
    
        };    
}

renderLibrary(full);


    // Modal

    const addNewBook = document.querySelector("#add");
    const dialog = document.querySelector("dialog")

    const closeButton = document.getElementById("closeButton");
    const resetButton = document.getElementById("resetButton");
    const submitButton = document.getElementById("submitButton");

    const newName = document.getElementById("newName");
    const newAuthor = document.getElementById("newAuthor");
    const newPages = document.getElementById("newPages");
    const newRead = document.getElementById("newRead");

    const form = document.querySelector("form");
   

    addNewBook.addEventListener("click", () => {
        dialog.showModal();
    })

    closeButton.addEventListener("click", () => {
        dialog.close();
    })

    resetButton.addEventListener("click", () => {
        newName.value = "";
        newAuthor.value = "";
        newPages.value = "";
        newRead.checked = false;
    })

    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        for (let i = 0; i < myLibrary.length; i++) {
            if (newName.value == myLibrary[i].title) {
                alert("This title already exists, please insert another title.");
                return;
            }
        }

        if (newRead.checked == true) {
            let newbook = new Book(newName.value, newAuthor.value, newPages.value, "Read");
            addBook(newbook);
        }
        else {
            let newbook = new Book(newName.value, newAuthor.value, newPages.value, "Not read");
            addBook(newbook);
        }
        console.log(newRead.checked);
        console.log(myLibrary);
        renderLibrary(1);
        dialog.close();
        })

    // How to close the modal

    dialog.addEventListener("click", e => {
        const dialogDimensions = dialog.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          dialog.close()
        }
      })
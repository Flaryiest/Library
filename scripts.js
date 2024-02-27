const content = document.querySelector(".content")
const submitBookButton = document.querySelector(".submitBookButton")
const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages,
    this.read = read
}
myLibrary.push(new book("Flary", "Flary's Dreams", 200, false))
console.log(myLibrary)
function addBookToLibrary(libraryBook) {
    const newBook = document.createElement("div");
    content.append(newBook)
    const bookStatus = document.createElement("button");
    const newBookAuthor = document.createElement("div");
    newBookAuthor.textContent = libraryBook.author;
    const newBookPages = document.createElement("div");
    newBookPages.textContent = libraryBook.pages;
    const newBookHeader = document.createElement("div");
    const newBookReadStatus = libraryBook.read;
    newBookHeader.textContent = libraryBook.title;
    newBookHeader.classList.add("cardHeader");
    bookStatus.textContent = "Change Status"
    
    
    newBook.classList.add("card");

    
    newBook.append(newBookHeader);
    newBook.append(newBookAuthor);
    newBook.append(newBookPages);
    const readStatus = document.createElement("div");
    bookStatus.id = "read"
    console.log(readStatus)
    if (newBookReadStatus == true) {
        
        readStatus.textContent = "read"
        newBook.append(readStatus);
    }
    else {
        
        
        readStatus.textContent = "unread"
        newBook.append(readStatus);
    }
    newBook.append(bookStatus); 
    let updateBookStatus = false   
    bookStatus.addEventListener("click", function() {
        updateBookStatus = true
    })
    newBook.addEventListener("click", function() {
        if (updateBookStatus == true) {
            if (readStatus.textContent == "unread") {
                readStatus.textContent = "read"
            }
            else {
                readStatus.textContent = "unread"
            }
            updateBookStatus = false
        }
        else {
            this.parentNode.removeChild(this)}}
        )
    return newBook
    
}

const testing = new book("Flary", "Flary's Dreams", 200, false)

myLibrary.push(addBookToLibrary(testing));

submitBookButton.addEventListener("click", function() {
    let newBookName = document.getElementsByName("newBookName")[0].value;
    let newBookPages = document.getElementsByName("newBookPages")[0].value;
    let newBookAuthor = document.getElementsByName("newBookAuthor")[0].value;
    let newBookStatus = document.getElementsByName("newBookStatus")[0.].value;
    currentBook = new book(newBookName, newBookAuthor, newBookPages,  newBookStatus)
    console.log(currentBook)
    addBookToLibrary(currentBook)
    document.getElementById("bookName").value = "";
    document.getElementById("bookPages").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookStatus").value = "";
})
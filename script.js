function init() {
    renderBooks();
}

function renderBooks() {
    let bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    for (let index = 0; index < books.length; index++) {
        let book = books[index];
        bookList.innerHTML += getBookTemplate(book);
    }
}
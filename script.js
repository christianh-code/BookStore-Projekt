function init() {
    renderBooks();
}

function renderBooks() {
    let bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    for (let index = 0; index < books.length; index++) {
        let book = books[index];
        let price = getBookPrice(book);
        bookList.innerHTML += getBookTemplate(book, price);
    }
}

function getBookPrice(book) {
    return book.price.toFixed(2).replace(".", ",");
}
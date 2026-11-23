function init() {
    renderBooks();
}

function renderBooks() {
    let bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    for (let index = 0; index < books.length; index++) {
        let book = books[index];
        let heart = getHeartImage(book);
        let price = getBookPrice(book);
        bookList.innerHTML += getBookTemplate(book, index, heart, price);
    }
}

function getBookPrice(book) {
    return book.price.toFixed(2).replace(".", ",");
}

function getHeartImage(book) {
    let heart = "./assets/img/icons/heart-unfilled.png";
    if (book.liked === true) {
        heart = "./assets/img/icons/heart-filled.png";
    }
    return heart;
}
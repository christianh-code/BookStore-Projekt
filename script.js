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
        let commentsHTML = renderComments(book);
        bookList.innerHTML += getBookTemplate(book, index, heart, price, commentsHTML);
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

function changeLikeStatus(index) {
    if (books[index].liked === true) {
        books[index].liked = false;
        books[index].likes--;
    } else {
        books[index].liked = true;
        books[index].likes++;
    }
    updateLikeDisplay(index);
}

function updateLikeDisplay(index) {
    let book = books[index];
    document.getElementById(`likeCount-${index}`).textContent = book.likes;
    document.getElementById(`likeImage-${index}`).src = getHeartImage(book);
}

function addComment(index) {
    let commentInput = document.getElementById(`commentText-${index}`);
    let commentText = commentInput.value.trim();
    if (commentText === "") {
        return;
    }
    books[index].comments.push({
        name: "Du",
        comment: commentText
    });
    renderBooks();
}

function renderComments(book) {
    let commentsHTML = "";
    for (let commentIndex = 0; commentIndex < book.comments.length; commentIndex++) {
        let name = getSafeText(book.comments[commentIndex].name);
        let comment = getSafeText(book.comments[commentIndex].comment);
        commentsHTML += getCommentTemplate(name, comment);
    }
    return commentsHTML;
}

function getSafeText(text) {
    let element = document.createElement("span");
    element.textContent = text;
    return element.innerHTML;
}
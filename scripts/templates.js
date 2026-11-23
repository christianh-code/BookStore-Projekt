function getBookTemplate(book, index, heart, price, commentsHTML) {
    return `
        <article class="bookCard">
            ${getBookHeaderTemplate(book)}
            ${getBookInfoTemplate(book, index, heart, price)}
            ${getBookCommentsTemplate(commentsHTML)}
        </article>
    `;
}

function getBookHeaderTemplate(book) {
    return `
        <h2 class="bookTitle">${book.name}</h2>
        <img class="bookImage" src="./assets/img/book.png" alt="Book cover">
    `;
}

function getBookInfoTemplate(book, index, heart, price) {
    return `
        <div class="bookInfo">
            <p class="bookPrice">${price} €</p>
            ${getBookLikesTemplate(book, index, heart)}
            ${getBookDetailsTemplate(book)}
        </div>
    `;
}

function getBookDetailsTemplate(book) {
    return `
        <div class="bookDetails">
            ${getBookDetailTemplate("Autor", book.author)}
            ${getBookDetailTemplate("Erscheinungsjahr", book.publishedYear)}
            ${getBookDetailTemplate("Genre", book.genre)}
        </div>
    `;
}

function getBookDetailTemplate(label, value) {
    return `
        <p>
            <span class="detailLabel">${label}</span>
            <span>: ${value}</span>
        </p>
    `;
}

function getBookLikesTemplate(book, index, heart) {
    return `
        <div class="bookLikes">
            <p id="likeCount-${index}">${book.likes}</p>
            <button type="button" class="likebutton"
                aria-label="Like ändern"
                onclick="changeLikeStatus(${index})">
                <img id="likeImage-${index}" src="${heart}" alt="">
            </button>
        </div>
    `;
}

function getBookCommentsTemplate(commentsHTML) {
    return `
        <div class="commentSection">
            <h3>Kommentare:</h3>
            <div class="comments">${commentsHTML}</div>
        </div>
    `;
}

function getCommentTemplate(name, comment) {
    return `
        <p class="commentRow">
            <span class="commentName">[${name}]</span>
            <span class="commentText">: ${comment}</span>
        </p>
    `;
}

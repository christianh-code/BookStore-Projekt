function getBookTemplate(book, index, heart, price) {
    return `
        <article class="bookCard">
            ${getBookHeaderTemplate(book)}
            ${getBookInfoTemplate(book, index, heart, price)}
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
            <img id="likeImage-${index}" src="${heart}" alt="Like">
        </div>
    `;
}
function getBookTemplate(book) {
    return `
        <article class="bookCard">
            ${getBookHeaderTemplate(book)}
            ${getBookInfoTemplate(book)}
        </article>
    `;
}

function getBookHeaderTemplate(book) {
    return `
        <h2 class="bookTitle">${book.name}</h2>
        <img class="bookImage" src="./assets/img/book.png" alt="Book cover">
    `;
}

function getBookInfoTemplate(book, price) {
    return `
        <div class="bookInfo">
            <p class="bookPrice">${price} €</p>
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
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

function getBookInfoTemplate(book) {
    return `
        <div class="bookInfo">
            <p class="bookPrice">${book.price} €</p>
            <p>Autor: ${book.author}</p>
            <p>Erscheinungsjahr: ${book.publishedYear}</p>
            <p>Genre: ${book.genre}</p>
        </div>
    `;
}
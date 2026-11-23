function getBookTemplate(book) {
    return `
        <article class="bookCard">
            <h2 class="bookTitle">${book.name}</h2>
        </article>
    `;
}
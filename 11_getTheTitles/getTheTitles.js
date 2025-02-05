const getTheTitles = function (array) {
    let books = [];
    for (const book of array) {
        books.push(book.title);
    }
    return books;
};

// Do not edit below this line
module.exports = getTheTitles;

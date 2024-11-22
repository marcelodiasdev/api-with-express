const fs = require("fs");

const pathName = "book.json";

function getAllBooks() {
  return JSON.parse(fs.readFileSync(pathName));
}

function getBookId(id) {
  const books = JSON.parse(fs.readFileSync(pathName));

  const filterBook = books.filter((book) => book.id === id)[0];

  return filterBook;
}

function insertBoook(newBook) {
  const book = JSON.parse(fs.readFileSync(pathName));

  const newListBooks = [...book, newBook];

  fs.writeFileSync(pathName, JSON.stringify(newListBooks));
}

function bookDeleted(id) {
  const books = JSON.parse(fs.readFileSync(pathName));

  const booksFilter = books.filter((book) => book.id !== id);

  fs.writeFileSync(pathName, JSON.stringify(booksFilter));
}

function putBook(updateBook, id) {
  let currentBook = JSON.parse(fs.readFileSync(pathName));

  const indexModifield = currentBook.findIndex((book) => book.id === id);

  const contentUpdate = { ...currentBook[indexModifield], ...updateBook };

  currentBook[indexModifield] = contentUpdate;

  fs.writeFileSync(pathName, JSON.stringify(currentBook));
}

module.exports = {
  getAllBooks,
  getBookId,
  insertBoook,
  putBook,
  bookDeleted,
};

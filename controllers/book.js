const {
  getAllBooks,
  getBookId,
  insertBoook,
  bookDeleted,
  putBook,
} = require("../services/book");

function getBooks(req, res) {
  try {
    const books = getAllBooks();
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const book = getBookId(id);
      res.send(book);
    } else {
      res.status(422);
      res.send("invalid ID");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body;
    if (req.body.nome) {
      insertBoook(newBook);
      res.status(201);
      res.send("Book insert successful");
    } else {
      res.status(422);
      res.send("field name is required!");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const body = req.body;

      putBook(body, id);
      res.send("Item mofificated successfull");
    } else {
      res.status(422);
      res.send("invalid ID");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      bookDeleted(id);
      res.send("Book deleted successful");
    } else {
      res.status(422);
      res.send("invalid ID");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook,
};

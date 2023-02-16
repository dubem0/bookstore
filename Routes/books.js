const express = require('express');

const {
    getBooks,
    getBookById,
    postBook,
    updateBookById,
    deleteBookById
} = require('../Controllers/books');

const bookrouter = express.Router()

bookrouter.get("/", getBooks);
bookrouter.post("/", postBook);
bookrouter.get("/:id", getBookById);
bookrouter.patch("/:id", updateBookById);
bookrouter.delete("/:id", deleteBookById);

module.exports = bookrouter
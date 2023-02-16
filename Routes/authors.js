const express = require('express');

const {
    getAuthors,
    updateAuthorById, 
    getAuthorById, 
    postAuthor, 
    deleteAuthorById
} = require('../Controllers/authors');

const authorrouter = express.Router()

authorrouter.get("/", getAuthors);
authorrouter.post("/", postAuthor);
authorrouter.get("/:id", getAuthorById);
authorrouter.patch("/:id", updateAuthorById);
authorrouter.delete("/:id", deleteAuthorById);

module.exports = authorrouter
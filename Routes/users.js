const express = require('express');

const {
    getUsers,
    updateUserById, 
    getUserById, 
    postUser, 
    deleteUserById
} = require('../Controllers/users');

const userrouter = express.Router()



userrouter.get("/", getUsers);
userrouter.post("/", postUser);
userrouter.get("/:id", getUserById);
userrouter.patch("/:id", updateUserById);
userrouter.delete("/:id", deleteUserById);

module.exports = userrouter
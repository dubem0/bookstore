const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true,
        max: [2020, 'Year must beless than or equal to 2020']
    },
    nationality: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    state : {
        type: String,
        required: true,
    },
    living: {
        type: Boolean,
        required: true,
    }
})

module.exports = mongoose.model('authors', AuthorSchema)
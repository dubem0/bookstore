const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required : true,
        unique: [true, 'Username must be unique']
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
})

UserSchema.pre('save', function(next) {
    if(this.password) {
        const salt = bcrypt.genSaltSync(10)
        this.password = bcrypt.hashSync(this.password, salt)
    }
    next()
})

module.exports = mongoose.model('users', UserSchema)
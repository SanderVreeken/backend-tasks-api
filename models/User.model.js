const mongoose = require('mongoose')

const UserM = mongoose.model('User', {
    _id: String,
    createdAt: Number,
    email: String,
    name: String,
    password: String,
    updatedAt: Number
})

module.exports = UserM
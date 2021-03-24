const mongoose = require('mongoose')

const UserM = mongoose.model('User', {
    createdAt: {
        default: new Date().valueOf(),
        type: Number
    },
    email: String,
    name: String,
    password: String,
    updatedAt: Number
})

module.exports = UserM
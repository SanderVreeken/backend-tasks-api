const mongoose = require('mongoose')
const Task = mongoose.model('Task', {
    _id: String,
    description: String,
    dueAt: Number,
    flagged: Boolean,
    name: String
})

module.exports = Task
const mongoose = require('mongoose')

const TaskM = mongoose.model('Task', {
    _id: String,
    description: String,
    dueAt: Number,
    flagged: Boolean,
    name: String
})

module.exports = TaskM
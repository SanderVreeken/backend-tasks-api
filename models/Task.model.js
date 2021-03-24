const mongoose = require('mongoose')

const TaskM = mongoose.model('Task', {
    description: String,
    dueAt: Number,
    flagged: Boolean,
    name: String
})

module.exports = TaskM
const Task = require('../models/Task.model')
const taskResolvers = {
    readTasks: () => Task.find()
}

module.exports = taskResolvers
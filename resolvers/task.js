const TaskM = require('../models/Task.model')

const TaskResolvers = {
    Query: {
        readTasks: () => TaskM.find()
    }
}

module.exports = TaskResolvers


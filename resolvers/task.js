const TaskM = require('../models/Task.model')

const TaskResolvers = {
    Mutation: {
        async createTask(_, { task }) {
            const response = await new TaskM(task).save()
            return response
        }
    },
    Query: {
        readTasks: () => TaskM.find()
    }
}

module.exports = TaskResolvers
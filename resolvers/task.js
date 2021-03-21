const TaskM = require('./models/Task.model')
export const TaskResolvers = {
    Query: {
        readTasks: () => TaskM.find()
    }
}


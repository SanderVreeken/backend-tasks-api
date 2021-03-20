const Task = require('../models/Task.model')
const taskResolvers = /* GraphQL */ `
    Query: {
        readTasks: () => Task.find()
    }
`

module.exports = taskResolvers
const { gql } = require('apollo-server-express')

const Task = /* GraphQL */ gql`
    type Query {
        readTasks: [Task!]
    }
    type Task {
        _id: ID
        description: String
        dueAt: Float
        flagged: Boolean
        name: String
    }
`

module.exports = Task

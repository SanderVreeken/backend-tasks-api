const { gql } = require('apollo-server')

const typeDefs = gql`
    type Task {
        _id: ID
        description: String
        dueAt: Float
        flagged: Boolean
        name: String
    }
    type Query {
        readTasks: [Task!]
    }
`

module.exports = typeDefs
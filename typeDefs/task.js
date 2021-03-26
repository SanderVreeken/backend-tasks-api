const { gql } = require('apollo-server-express')

const Task = /* GraphQL */ gql`
    input TaskInput {
        description: String!
        dueAt: Float!
        flagged: Boolean!
        name: String!
    }
    type Task {
        _id: ID!
        createdAt: Float!,
        createdBy: ID!
        description: String!
        dueAt: Float!
        flagged: Boolean!
        name: String!
    }
`

module.exports = Task

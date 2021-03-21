const { gql } = require('apollo-server-express')

const User = /* GraphQL */ gql`
    type Query {
        readUser: Boolean!
    }
    type User {
        _id: ID!
        createdAt: Float!
        email: String!
        name: String!
        password: String!
        updatedAt: Float
    }
`

module.exports = Task

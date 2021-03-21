const { gql } = require('apollo-server-express')

const User = /* GraphQL */ gql`
    type User {
        _id: ID!
        createdAt: Float!
        email: String!
        name: String!
        password: String!
        updatedAt: Float
    }
`

module.exports = User

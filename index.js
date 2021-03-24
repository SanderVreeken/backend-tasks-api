require('dotenv').config({ path: './.env.local' })
const { ApolloServer, gql } = require('apollo-server-express')
const cookieParser = require('cookie-parser')
const express = require('express')
const merge = require('lodash').merge
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const context = require('./functions/context')
const Task = require('./typeDefs/task')
const User = require('./typeDefs/user')
const TaskResolvers = require('./resolvers/task')
const UserResolvers = require('./resolvers/user')

const app = express()
app.use(cookieParser())

const typeDefs = /* GraphQL */ gql`
    type Mutation {
        createTask(task: TaskInput!): Task!
        createUser: Boolean!
    }
    type Query {
        readTasks: [Task!]
        readUsers: Boolean!
    }
`

const server = new ApolloServer({ 
    typeDefs: [ typeDefs, Task, User ],
    resolvers: merge(TaskResolvers, UserResolvers),
    context,
    introspection: true,
    playground: true,  
})
server.applyMiddleware({ app })

const port = process.env.PORT || 8080
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
)

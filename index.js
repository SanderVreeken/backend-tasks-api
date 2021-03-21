require('dotenv').config({ path: './.env.local' })
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const merge = require('lodash').merge

const app = express()

const Task = require('./typeDefs/task')
const Query = /* GraphQL */ `
    type Query {
        readTasks: [Task!]
    }
`
import { TaskResolvers } from './resolvers/task'
const resolvers = {}

const server = new ApolloServer({ 
    typeDefs: [ Query, Task ],
    resolvers: merge(resolvers, TaskResolvers),
    introspection: true,
    playground: true,  
})
server.applyMiddleware({ app })

const port = process.env.PORT || 8080
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)

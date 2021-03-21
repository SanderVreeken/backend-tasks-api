require('dotenv').config({ path: './.env.local' })
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const merge = require('lodash').merge
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Task = require('./typeDefs/task')
const TaskResolvers = require('./resolvers/task')

const app = express()

const server = new ApolloServer({ 
    typeDefs: [ Task ],
    resolvers: merge(TaskResolvers),
    introspection: true,
    playground: true,  
})
server.applyMiddleware({ app })

const port = process.env.PORT || 8080
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)

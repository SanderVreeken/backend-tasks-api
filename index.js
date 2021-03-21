const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const app = express()

const Task = require('./typeDefs/task')
const Query = /* GraphQL */ `
    type Query {
        readTasks: [Task!]
    }
`

const TaskM = require('./models/Task.model')
const resolvers = {
    Query: {
        readTasks: () => TaskM.find()
    }
}

const server = new ApolloServer({ 
    typeDefs: [ Query, Task ],
    resolvers,
    introspection: true,
    playground: true,  
})
server.applyMiddleware({ app })

const port = process.env.PORT || 8080
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)

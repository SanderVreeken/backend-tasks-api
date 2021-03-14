require('dotenv').config({ path: './.env.local' })
const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const typeDefs = require('./schema')
const Task = require('./models/Task.model')

const resolvers = {
    Query: {
        readTasks: () => Task.find()
    }
}

const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    introspection: true,
    playground: true, 
})

server.listen().then(({ url }) => {
    console.log(`Tasks server ready at ${url}`)
})

const port = process.env.PORT || 8080
server.listen(port, () => {
    console.log('The application is running on port ' + port);
});

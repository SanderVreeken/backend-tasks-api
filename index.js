require('dotenv').config({ path: './.env.local' })
const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const typeDefs = require('./schema')
const taskResolvers = require('./resolvers/tasks')

const resolvers = {
    Query: {
        taskResolvers
    }
}

const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    introspection: true,
    playground: true, 
})

const port = process.env.PORT || 8080
server.listen(port, () => {
    console.log('The application is running on port ' + port);
});

require('dotenv').config({
    path: './.env.local'
})

var port = process.env.PORT || 8080;

const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
const typeDefs = require('./schema')
// const tasks = require('./mockdata/tasks')

const Task = mongoose.model('Task',{
    _id: String,
    description: String,
    dueAt: Number,
    flagged: Boolean,
    name: String
})

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


server.listen(port, () => {
    console.log('The application is running on port ' + port);
});

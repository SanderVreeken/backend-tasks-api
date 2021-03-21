const { gql } = require('apollo-server');
const Task = require('./models/Task.model');

const typeDefs = gql`
    type Query {
        readTasks: [Task!]
    }
`

makeExecutableSchema({
    typeDefs: [ Query, Task ],
    resolvers: {},
});

module.exports = typeDefs
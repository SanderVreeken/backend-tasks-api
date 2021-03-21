const UserM = require('../models/Task.model')

const UserResolvers = {
    Query: {
        // readUsers: () => UserM.find()
        readUsers: () => true
    }
}

module.exports = UserResolvers
const bcrypt = require('bcryptjs')

const defineDate = require('../functions/defineDate')
const generateToken = require('../functions/generateToken')
const setCookie = require('../functions/setCookie')
const UserM = require('../models/User.model')

const UserResolvers = {
    Mutation: {
        async createUser(_, { user }, context) {
            // Hashing the password of the user and storing it in the database.
            user.password = await bcrypt.hash(user.password, 12)
            const response = await new UserM(user).save()
            
            // Generating a token which is then stored as a httpOnly cookie.
            const token = generateToken({ _id: response._id })
            setCookie(context, defineDate(), token)
            return true
        }
    },
    Query: {
        readUsers: () => true
    }
}

module.exports = UserResolvers
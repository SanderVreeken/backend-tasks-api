const bcrypt = require('bcryptjs')

const defineDate = require('../functions/defineDate')
const setCookie = require('../functions/setCookie')
const UserM = require('../models/User.model')

const UserResolvers = {
    Mutation: {
        async createUser(parent, { user }, context) {
            user.password = await bcrypt.hash(user.password, 12)
            const response = await new UserM(user).save()
            // console.log(response)
            
            setCookie(context, defineDate(), 'token')

            return true
        }
    },
    Query: {
        readUsers: () => true
    }
}

module.exports = UserResolvers
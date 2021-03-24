const defineDate = require('../functions/defineDate')
const setCookie = require('../functions/setCookie')
const UserM = require('../models/User.model')

const UserResolvers = {
    Mutation: {
        async createUser(parent, args, context) {
            const user = {
                email: 'info@sandervreeken.com',
                name: 'SanderVreeken',
                password: 'Rosebud3',
            }

            const response = await UserM.create(user)
            setCookie(context, defineDate(), 'token')

            return true
        }
    },
    Query: {
        readUsers: () => true
    }
}

module.exports = UserResolvers
const jwt = require('jsonwebtoken')

const generateToken = user => {
    return jwt.sign(user, process.env.SECRET_KEY, {
        expiresIn: '24h'
    })
}

module.exports = generateToken
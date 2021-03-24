const Cookies = require('cookies')
const auth = require('../enums/auth')

const context = ({ req, res }) => {
    const cookies = new Cookies(req, res)
    const token = cookies.get(auth.TOKEN)
    return { cookies, token }
}

module.exports = context
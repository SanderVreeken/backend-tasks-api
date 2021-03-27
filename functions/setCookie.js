const auth = require('../enums/auth')

const setCookie = (context, date, token) => {
    context.cookies.set(auth.TOKEN, token, {
        // Only retrievable per server request, not in the client.
        httpOnly: true,
        expires: date,
        // domain: 'http://localhost:3000',
        sameSite: false,
        // Meaning the cookie will only be send in case of https request.
        secure: false
    })
}


module.exports = setCookie
const auth = require('../enums/auth')

const setCookie = (context, date, token) => {
    context.cookies.set(auth.TOKEN, token, {
        httpOnly: true,
        expires: date,
        sameSite: true,
        // secure: true
    })
}


module.exports = setCookie
const jwtDecode = require('jwt-decode')

const isValid = token => {
    if (!token) {
        return false
    }
    const decode = jwtDecode(token)
    if (decode.exp * 1000 > new Date().valueOf()) {
        return decode
    } else {
        return false
    }
}

module.exports = isValid
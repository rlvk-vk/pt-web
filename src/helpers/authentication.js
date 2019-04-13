import decode from 'jwt-decode'

export const getToken = () => {
    return localStorage.getItem("id_token")
}

export const setToken = token => {
    localStorage.setItem("id_token", token);
}

export const isTokenExpired = token => {
    try {
        const decoded = decode(token)
        if (decoded.exp < Date.now() / 1000) {
            return true
        } else return false
    } catch (err) {
        return false
    }
}
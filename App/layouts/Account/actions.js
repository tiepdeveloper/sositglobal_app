import { LOGIN } from './constants'

export function requestChecklogin(username,password) {
    return {
        type: LOGIN.REQUEST,
        data : {
            username,
            password
        }
    }
}


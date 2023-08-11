import axios from './api'

const AuthService = {
    async userRegister(user) {
        const response = await axios.post('/users', {user}) 
        return response.data
    } 
}

export default AuthService
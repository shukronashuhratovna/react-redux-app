import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { icon } from '../constants'
import AuthService from '../service/auth'
import { signUserStart, signUserFailure, signUserSuccess } from '../slice/auth'
import { Input } from '../ui'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { isLoading } = useSelector(state => state.auth)

    const registerHandler = async e => {
        e.preventDefault()
        dispatch(signUserStart())
        const user = { 'username': name, email, password }
        try {
            console.log(user);
            const response = await AuthService.userRegister(user)
            console.log(response);
            dispatch(signUserSuccess())
        } catch (error) {
            dispatch(signUserFailure(error.response.data.errors))
        }

    }

    return (
        <div className='form-sign-in m-auto w-25 text-center'>
            <form>
                <img className="mb-4" src={icon} alt="" width="72" height="60" />
                <h1 className="h3 mb-3 fw-normal">Please register</h1>

                <Input type='text' label={'Username'} state={name} setState={setName} />
                <Input type='email' label={'Email'} state={email} setState={setEmail} />
                <Input type='password' label={'Password'} state={password} setState={setPassword} />

                <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading} onClick={registerHandler} type="submit">
                    {isLoading ? 'loading...' : 'Register'}
                </button>
            </form>
        </div>
    )
}

export default Register
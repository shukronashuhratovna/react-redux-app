import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { icon } from '../constants'
import { signUserStart, signUserFailure, signUserSuccess } from '../slice/auth'
import { Input } from '../ui'
import AuthService from '../service/auth'
import { ValidationError } from './'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { isLoading } = useSelector(state => state.auth)

    const loginHandler = async e => {
        e.preventDefault()
        dispatch(signUserStart())
        const user = { email, password }
        try {
            const response = await AuthService.userLogin(user)
            dispatch(signUserSuccess(response.user))
        } catch (error) {
            dispatch(signUserFailure(error.response.data.errors))
        }
    }

    return (
        <div className='form-sign-in m-auto w-25 text-center'>
            <form>
                <img className="mb-4" src={icon} alt="" width="72" height="60" />
                <h1 className="h3 mb-3 fw-normal">Please login</h1>
                <ValidationError />
                <Input type='email' label={'Email'} state={email} setState={setEmail} />
                <Input type='password' label={'Password'} state={password} setState={setPassword} />

                <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading} onClick={loginHandler} type="submit">
                    {isLoading ? 'loading...' : 'Login'}
                </button>
            </form>
        </div>
    )
}
export default Login
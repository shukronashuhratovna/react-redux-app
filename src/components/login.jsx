import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { icon } from '../constants'
import { loginUserStart } from '../slice/auth'
import { Input } from '../ui'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { isLoading } = useSelector(state => state.auth)

    const loginHandler = e => {
        e.preventDefault()
        dispatch(loginUserStart())
    }

    return (
        <div className='form-sign-in m-auto w-25 text-center'>
            <form>
                <img className="mb-4" src={icon} alt="" width="72" height="60" />
                <h1 className="h3 mb-3 fw-normal">Please login</h1>

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
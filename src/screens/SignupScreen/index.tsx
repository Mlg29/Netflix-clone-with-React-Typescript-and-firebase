import React, { useRef } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { createUser, loginUser } from '../../slice/authSlice';
import './signup.css'

const SignupScreen = () => {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();
    const dispatch = useAppDispatch()


    const register = async (e: any) => {
        e.preventDefault();

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        var response = await dispatch(createUser(payload))
        if (createUser.fulfilled.match(response)) {
            localStorage.setItem('token', response?.payload.idToken)
        }
        else {
            var errMsg = response?.payload as string

            console.log({errMsg})
        }



    }

    const signIn = async (e: any) => {
        e.preventDefault();

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        var response = await dispatch(loginUser(payload))
        if (loginUser.fulfilled.match(response)) {
            localStorage.setItem('token', response?.payload.idToken)
        }
        else {
            var errMsg = response?.payload as string

            console.log({errMsg})
        }


    }
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type='email' placeholder='Email' />
                <input ref={passwordRef} type='password' placeholder='Password' />
                <button type='submit' onClick={signIn}>Submit</button>

                <h4><span className='signupScreen_gray'>New to Netflix?</span>
                    <span className="signupScreen_link" onClick={register}>Sign Up now.</span></h4>
            </form>
        </div>
    )
}

export default SignupScreen
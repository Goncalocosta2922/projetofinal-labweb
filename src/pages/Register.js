import React from 'react'
import '../styles/Register.css'

function Register() {
return (
    <div className='fullbox'>
        <div className='Register-Register'>
            <h1>Register</h1>
            <form>
            <div className='Register-Full-name'>
                <input type='text' placeholder='Full Name' required/>
            </div>

            <div className='Register-Email'>
                <input type='text' placeholder='Email' required/>
            </div>

            <div className='Register-Phone-Number'>
                <input type='number' placeholder='Phone Number' required/>
            </div>

            <div className='Register-Adress'>
                <input type='text' placeholder='Adress' required/>
            </div>

            <div className='Register-User-Name'>
                <input type='text' placeholder='Username' required/>
            </div>

            <div className='Register-password'>
                <input type='Password' placeholder='Password' required/>
            </div>
            <a href='#'>Forgot Password?</a>
            <button className='Register-button'>Register</button>
            </form>
        </div>
            <div className='Register-Login'>
                <h1>Already have an account?</h1>
                <p>If you have press the button below</p>
                <button className='Login-button' onClick={() => window.location.href='/Login'}>
                Login
                </button>
            </div>
    </div>
);
}

export default Register
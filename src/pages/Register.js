import React, { useState } from 'react';
import '../styles/Register.css';

function validatePassword(password) {
    // Validação da password (regex)
    var regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}
const validatePhoneNumber = (phoneNumber) => {
    // Validação do número de telefone (regex)
    const phoneRegex = /^\d{9}$/;
    return phoneRegex.test(phoneNumber);
}
const validateFullName = (fullName) => {
    // Validação do nome completo (regex)
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(fullName);
}
const validateEmail = (email) => {
    // Validação do email (regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function Register() {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [fullName, setFullName] = useState('');
    const [fullNameError, setFullNameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        let isError = false;
    
        if (!validatePassword(password)) {
            setPasswordError(true);
            isError = true;
        } else {
            setPasswordError(false);
        }
        if (!validatePhoneNumber(phoneNumber)) {
            setPhoneNumberError(true);
            isError = true;
        } else {
            setPhoneNumberError(false);
        }
        if (!validateFullName(fullName)) {
            setFullNameError(true);
            isError = true;
        } else {
            setFullNameError(false);
        }
        if (!validateEmail(email)) {
            setEmailError(true);
            isError = true;
        } else {    
            setEmailError(false);
        }
        if (isError) {
            return;
        }
    }

    return (
        <div className='fullbox'>
            <div className='Register-Register'>
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <div className='Register-Full-name'>
                        <input type='text' placeholder='Full Name' required onChange={(e) => setFullName(e.target.value)}/>
                        {fullNameError && <p>The full name must contain only letters.</p>}
                    </div>

                    <div className='Register-Email'>
                        <input type='text' placeholder='Email' required onChange={(e) => setEmail(e.target.value)}/>
                        {emailError && <p>The email you provided is invalid</p>}
                    </div>

                    <div className='Register-Phone-Number'>
                        <input type='number' placeholder='Phone Number' required onChange={(e) => setPhoneNumber(e.target.value)}/>
                        {phoneNumberError && <p>The phone number must contain 9 numbers.</p>}
                    </div>

                    <div className='Register-Adress'>
                        <input type='text' placeholder='Adress' required/>
                    </div>

                    <div className='Register-User-Name'>
                        <input type='text' placeholder='Username' required/>
                    </div>

                    <div className='Register-password'>
                        <input type='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)}/>
                        {passwordError && <p>The password must contain at least 8 characters, 1 number, 1 uppercase letter and 1 special character.</p>}
                    </div>
                    <a href='#'>Forgot Password?</a>
                    <button type='submit' className='Register-button'>Register</button>
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

export default Register;
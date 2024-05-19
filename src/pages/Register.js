import React, { useState } from 'react';
import '../styles/Register.css';

function validatePassword(password) {
    let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{9}$/;
    return phoneRegex.test(phoneNumber);
}

const validateFullName = (fullName) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(fullName);
}

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function Register() {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [fullNameError, setFullNameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [full_name, setFull_name] = useState('');
    const [phone_number, setPhone_number] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        const is_admin = 'false';
        const parsedPhoneNumber = parseInt(phone_number, 10);
        const api = { username, full_name, email, phone_number: parsedPhoneNumber, address, password, is_admin };
        let isError = false;

        if (!validatePassword(password)) {
            setPasswordError(true);
            isError = true;
        } else {
            setPasswordError(false);
        }
        if (!validatePhoneNumber(phone_number)) {
            setPhoneNumberError(true);
            isError = true;
        } else {
            setPhoneNumberError(false);
        }
        if (!validateFullName(full_name)) {
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

        fetch('https://lwlc-proj-2024.onrender.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(api)
        }).then(response => response.json()).then(data => {
            console.log('Api response:', data);
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className='fullbox'>
            <div className='Register-Register'>
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <div className='Register-Full-name'>
                        <input type='text' placeholder='Full Name' name='fullname' value={full_name} onChange={(e) => setFull_name(e.target.value)} required />
                        {fullNameError && <p>The full name must contain only letters.</p>}
                    </div>

                    <div className='Register-Email'>
                        <input type='text' placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        {emailError && <p>The email you provided is invalid</p>}
                    </div>

                    <div className='Register-Phone-Number'>
                        <input type='number' placeholder='Phone Number' name='phonenumber' value={phone_number} onChange={(e) => setPhone_number(e.target.value)} required />
                        {phoneNumberError && <p>The phone number must contain 9 numbers.</p>}
                    </div>

                    <div className='Register-Adress'>
                        <input type='text' placeholder='Address' name='address' value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>

                    <div className='Register-User-Name'>
                        <input type='text' placeholder='Username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>

                    <div className='Register-password'>
                        <input type='password' placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        {passwordError && <p>The password must contain at least 8 characters, 1 number, 1 uppercase letter and 1 special character.</p>}
                    </div>
                    <button type='submit' className='Register-button'>Register</button>
                </form>
            </div>
            <div className='Register-Login'>
                <h1>Already have an account?</h1>
                <p>If you have press the button below</p>
                <button className='Login-button' onClick={() => window.location.assign('/login')}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Register;

import React, { useState } from 'react';
import '../styles/Login.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState('');

  
  function decodeJWT_isAdmin(token){
    const parts = token.split('.');
    const decodedPayload = JSON.parse(atob(parts[1]));
    return decodedPayload.admin === 'true' ? 'true' : 'false';
}
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload={username, password, is_admin: isAdmin};

    fetch('https://lwlc-proj-2024.onrender.com/users/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then(response => response.text())
    .then(data => {
      const token = JSON.parse(data);
      sessionStorage.setItem('token', token);
      console.log(token);

      const isAdmin = decodeJWT_isAdmin(token);
      setIsAdmin(isAdmin);
      console.log(isAdmin);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className='fullbox'>
      <div className='Login-Login'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='Login-user-container'>
            <FaUser className='Login-icons' />
            <input type='text' placeholder='Username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} required/>
          </div>

          <div className='Login-password-container'>
            <RiLockPasswordFill className='Login-icons' />
            <input type='password' placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <button className='Login-button'>Login</button>
        </form>
        </div>
        <div className='Login-Register'>
          <h1>New to Marketplace?</h1>
          <p>Press below to create your account</p>
          <button className='Register-button' onClick={() => window.location.href='/Register'}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;

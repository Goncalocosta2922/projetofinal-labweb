import React from 'react';
import '../styles/Login.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
  return (
    <div className='fullbox'>
      <div className='Login-Login'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='Login-user-container'>
            <FaUser className='Login-icons' />
            <input type='text' placeholder='Username' required/>
          </div>

          <div className='Login-password-container'>
            <RiLockPasswordFill className='Login-icons' />
            <input type='password' placeholder='Password' required/>
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

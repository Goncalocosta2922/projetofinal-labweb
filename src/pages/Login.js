import React from 'react';
import '../styles/Login.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  return (
    <div className='fullbox'>
      <div className='Login-Login'>
        <h1>Login</h1>
        <form>
          <div className='Login-user-container'>
            <FaUser className='Login-icons' />
            <input type='text' placeholder='Username' />
          </div>

          <div className='Login-password-container'>
           <RiLockPasswordFill className='Login-icons' />
           <input type='password' placeholder='Password' />
          </div>
          <a href='#'>Forgot Password?</a>
          <button className='Login-button'>Iniciar Sessão</button>
        </form>
        </div>
        <div className='Login-Register'>
         <h1>Ainda não tem conta?</h1>
         <p>Se ainda não tem conta clique aqui para se registar</p>
         <button className='Register-button' onClick={() => window.location.href='/Register'}>
          Register
         </button>
      </div>
      </div>
  );
}

export default Login;

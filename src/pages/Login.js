import React from 'react';
import '../styles/Login.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
<<<<<<< HEAD
=======
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógico de login
  }

>>>>>>> 1cd8c61f447146ba8ccd4e8d2b499b3727f9e0d8
  return (
    <div className='fullbox'>
      <div className='Login-Login'>
        <h1>Login</h1>
        <form>
<<<<<<< HEAD
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
=======
          <div className='username-input'>
            <input type='text' placeholder='Username' required />
            <FaUser className='icons'/>
          </div>
        
          <div className='password-input'>
            <input type='password' placeholder='Password' required />
            <RiLockPasswordFill className='icons'/>
          </div>

          <a href='#'>Forgot Password?</a>
          <button type='submit'>Iniciar Sessão</button> 
        </form>
>>>>>>> 1cd8c61f447146ba8ccd4e8d2b499b3727f9e0d8
      </div>
      </div>
<<<<<<< HEAD
  );
=======
    </div>
  )
>>>>>>> 1cd8c61f447146ba8ccd4e8d2b499b3727f9e0d8
}

export default Login;

import React from 'react'
import '../styles/Login.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógico de login
  }

  return (
    <div className='fullbox'>
      <div className='Login'>
        <h1>Login</h1>
        <form>
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
      </div>
      <div className='Register'>
        <h1>Ainda não tem conta?</h1>
        <p>Se ainda não tem conta clique aqui para se registar</p>
        <button>Registar-se<a href='#'></a></button>
      </div>
    </div>
  )
}

export default Login
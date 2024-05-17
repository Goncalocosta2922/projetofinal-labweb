import React from 'react'
import '../styles/Login.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";


const   Login = () => {
  return (
    <div className='fullbox'>
      <div className='Login'>
        <h1>Login</h1>
        <div className='username-input'>
          <input type='Text' placeholder='Username' />
          <FaUser className='icons'/>
        </div>
      
        <div className='password-input'>
          <input type='Password' placeholder='Password' />
          <RiLockPasswordFill className='icons'/>
        </div>

      <a href='#'>Forgot Password?</a>
      <button>Iniciar Sessão</button> 
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
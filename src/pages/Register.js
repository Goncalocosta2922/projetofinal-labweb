import React from 'react'
import '../styles/Register.css'

function Register() {
  return (
    <div className='fullbox'>
      <div className='Register-Register'>
        <h1>Register</h1>
        <form>
          <div className='Register-Full-name'>
            <input type='text' placeholder='Full Name' />
          </div>

          <div className='Register-Email'>
           <input type='text' placeholder='Email' />
          </div>

          <div className='Register-Phone-Number'>
            <input type='number' placeholder='Phone Number' />
          </div>

          <div className='Register-Adress'>
            <input type='text' placeholder='Adress' />
          </div>

          <div className='Register-User-Name'>
            <input type='text' placeholder='Username' />
          </div>

          <div className='Register-password'>
            <input type='Password' placeholder='Password' />
          </div>

          <a href='#'>Forgot Password?</a>
          <button className='Register-button'>Register</button>
        </form>
        </div>
        <div className='Register-Login'>
         <h1>Já tem uma conta?</h1>
         <p>Se já tem uma conta clique aqui</p>
         <button className='Login-button' onClick={() => window.location.href='/Login'}>
          Login
         </button>
      </div>
      </div>
  );
}
  
export default Register
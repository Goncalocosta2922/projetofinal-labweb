import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import cart from '../assets/shopping_cart_20dp_FILL0_wght400_GRAD0_opsz20.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbarleft'>
                <Link to="/">Home</Link>
            </div>
            <div className='navbarmiddle'>
                <input type="text" placeholder="Search..." />
            </div>
            <div className='navbarright'>
                <Link to="/sobre">Sobre</Link>
                <Link to="/login">Sign in/Sign up</Link>
                <Link to="/cart"><button className="cart-button"><img src={cart} alt='carrinho'/></button></Link>
            </div>
        </div>
    )
}

export default Navbar
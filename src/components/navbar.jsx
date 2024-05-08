import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbarleft'>
                <Link to="/">Início</Link>
            </div>
            <div className='navbarmiddle'>
                <input type="text" placeholder="Search..." />
            </div>
            <div className='navbarright'>
                <Link to="/sobre">Sobre</Link>
                <Link to="/loginouregisto">Login/Registo</Link>
            </div>
        </div>
    )
}

export default Navbar
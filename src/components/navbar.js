import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import cart from '../assets/shopping_cart_20dp_FILL0_wght400_GRAD0_opsz20.svg';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const isAdmin = sessionStorage.getItem('isAdmin');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    return (
        <div className='navbar'>
            <div className='navbarleft'>
                <Link to="/" className='marketplace-link'>Marketplace</Link>
            </div>
            <div className='navbarmiddle'>
                <form onSubmit={handleSearchSubmit}>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchQuery} 
                        onChange={handleInputChange} 
                    />
                </form>
            </div>
            <div className='navbarright'>
                {isAdmin === 'true' ? <Link to="/users">Users</Link> : null}
                <Link to="/products">Products</Link>
                <Link to="/login">Sign in/Sign up</Link>
                <Link to="/cart"><button className="cart-button"><img src={cart} alt='carrinho'/></button></Link>
            </div>
        </div>
    );
};

export default Navbar;

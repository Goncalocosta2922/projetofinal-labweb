import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import cart from '../assets/shopping_cart_20dp_FILL0_wght400_GRAD0_opsz20.svg';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('token'));
    const isAdmin = sessionStorage.getItem('isAdmin');
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('isAdmin');
        setIsLoggedIn(false);
        navigate('/login');
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
                {isLoggedIn ? (
                    <>
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                        <div className="cart-button-container">
                            <Link to="/cart">
                                <button className="cart-button">
                                    <img src={cart} alt='carrinho'/>
                                </button>
                            </Link>
                        </div>
                        
                    </>
                ) : (
                    <>
                        <Link to="/login" className="login-button">Sign in/Sign up</Link>
                        <Link to="/cart">
                            <button className="cart-button">
                                <img src={cart} alt='carrinho'/>
                            </button>
                        </Link>
                        
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;

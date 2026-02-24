import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
    const { totalCartItems } = useCart();

    return (
        <header className="header">
            <div className="header-logo-container">
                <Link to="/" className="header-link">
                    <div className="logo-placeholder">🌿</div>
                    <div className="header-text">
                        <h1 className="company-name">Paradise Nursery</h1>
                        <p className="tagline">Where Green Meets Serenity</p>
                    </div>
                </Link>
            </div>

            <nav className="header-nav">
                <Link to="/products" className="nav-link">Shop</Link>
                <Link to="/cart" className="cart-link">
                    <div className="cart-icon-wrapper">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="cart-icon"
                        >
                            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        {totalCartItems > 0 && (
                            <span className="cart-badge">{totalCartItems}</span>
                        )}
                    </div>
                </Link>
            </nav>
        </header>
    );
};

export default Header;

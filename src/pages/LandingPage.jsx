import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-overlay"></div>
            <div className="landing-content">
                <h1 className="landing-title">Welcome to Paradise Nursery</h1>
                <h2 className="landing-subtitle">
                    Transform your space with carefully curated houseplants. We deliver nature's tranquility directly to your door, making it effortless to cultivate your own personal indoor sanctuary.
                </h2>
                <Link to="/products" className="get-started-btn">
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;

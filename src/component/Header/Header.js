import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="text-center header">
            <h2>Welcome to Master Developer</h2>
            <h5>We believe that our developers are world-class web developers.</h5>
            <h1>Total Budget: <span className="fw-bold">25 Million</span></h1>
        </div>
    );
};

export default Header;
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-bar container'>
            <nav>
                <a href="home.html">Home</a>
                <a href="agency.html">Agency</a>
                <a href="Booking.html">Booking</a>
            </nav>
        </div>
    );
};

export default Header;
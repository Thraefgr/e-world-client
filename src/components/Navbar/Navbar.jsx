// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import profilepic from '../../images/profile-picture.jpg';

const Navbar = ({ userName, token }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        // TODO: Logout işlemleri burada yapılabilir.
        console.log("Logout");
    };

    userName = 'Burak';
    token = 0;
    return (
        <nav className="navbar">
            <div className="left">
                <div className="logo">
                    <Link to="/"><h1>EWorld</h1></Link>
                </div>
                <div className="nav-links">
                    <Link to="/"><h1>Home</h1></Link>
                    <Link to="/world"><h1>World</h1></Link>
                </div>
            </div>
            <div className="right">
                {token ? (
                    <div className="account-dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
                        <div className="profile-pic-container">
                            <img src={profilepic} alt="Profile" className="profile-pic" />
                            <h1>{userName}</h1>
                        </div>
                        {isDropdownOpen && (
                            <div className="dropdown-content">
                                <Link to="/account"><h1>Account</h1></Link>
                                <Link to="/inventory"><h1>Inventory</h1></Link>
                                <span onClick={handleLogout}><h1>Logout</h1></span>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login" className="login-button"><h1>Login</h1></Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import coin from '../../images/coin.png'



const Navbar = ({ userName, token, balance, profileImg }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const handleLogout = async () => {
        // TODO: Logout işlemleri burada yapılabilir.
        try {
            const response = await fetch(`http://127.0.0.1:8000/user/logout/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `${token}`
                },
            });
            console.log(response.status);
            if (response.status === 202) {
                localStorage.removeItem("token")
                localStorage.removeItem("userName")
                localStorage.removeItem("balance")
                localStorage.removeItem("profileImg")
                window.location.reload();
            } else {
                console.error('logout failed');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }

    };
    

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
                    <div className='loggedin-right'>
                        <div className='balance-container'>
                            <h1>{balance}</h1>
                            <img className='profile-pic' src={coin} alt="Money" />
                        </div>
                        <div className="account-dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
                            <div className="profile-pic-container">
                                <img src={profileImg} alt="Profile" className="profile-pic" />
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
                    </div>

                ) : (
                    <Link to="/login" className="login-button"><h1>Login</h1></Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
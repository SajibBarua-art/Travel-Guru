import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    const handleLogin = () => {

    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="d-flex justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 list">
                            <li className="nav-link">
                                <Link style={{ textDecoration: 'none' }} className="nav-option" to="/home">Home</Link>
                            </li>
                            <li className="nav-link">
                                <Link style={{ textDecoration: 'none' }} className="nav-option" to="/home">Description</Link>
                            </li>
                            <li className="nav-link">
                                <Link style={{ textDecoration: 'none' }} className="nav-option" to="/home">Blog</Link>
                            </li>
                            <li className="nav-link">
                                <Link style={{ textDecoration: 'none' }} className="nav-option" to="/home">Contact</Link>
                            </li>
                        </ul>
                        <div className='login-button'><button onClick={handleLogin} className="btn btn-outline-success" type="submit">Log In</button></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
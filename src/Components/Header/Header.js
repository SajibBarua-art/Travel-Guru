import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const nameStyle = {
        fontWeight: 900,
        border: "2px solid lawngreen",
        padding: '3px',
        borderRadius: '5px'
    }

    const history = useHistory();
    const handleLogin = () => {
        history.push('/login');
    }

    const [logInState] = useContext(UserContext);
    const name = logInState? logInState.displayName : "";
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
                        {
                            name ? <h5 style={nameStyle}>{name}</h5> :
                                <div className='login-button'><button onClick={handleLogin} className="btn btn-outline-success" type="submit">Log In</button></div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
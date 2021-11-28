import React from "react"
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <i className="fas fa-hands-helping me-1" style={{color: "#007bff"}}/>
                Meet-Up!

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/catalog" className="nav-link">Catalog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/cart" className="nav-link">Cart</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item me-2">
                            <NavLink className="btn btn-outline-secondary" to="/login" type="button">Log in</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="btn btn-primary" to="/register" type="button">Register</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
import React from "react"
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
                <i className="fas fa-paw mr-1"/>
                PetShop
            </NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink exact to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink exact to="/catalog" className="nav-link">Catalog</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink exact to="/cart" className="nav-link">Cart</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-2">
                        <NavLink className="btn btn-outline-secondary" to="/login" type="button">Log in</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="btn btn-primary" to="/register" type="button">Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
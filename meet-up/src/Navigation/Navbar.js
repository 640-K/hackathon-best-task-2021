import React from "react"
import {NavLink} from 'react-router-dom';
import {logOut, auth} from "../Firebase/main";

function Navbar({name}){

    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <i className="fas fa-hands-helping me-1" style={{color: "#007bff"}}/>
            Meet-Up!

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/feed" className="nav-link">Feed</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/create" className="nav-link">Create Meet</NavLink>
                    </li>
                </ul>
                {
                    name?
                       <ul className="navbar-nav ml-auto">
                            <li className="nav-item mr-2">
                                <span className="navbar-text">
                                  Hello, {name}
                                </span>
                                <img src={auth.currentUser.photoURL} className="rounded-circle ms-2 me-2" style={{"height":"38.24px"}}/>
                            </li>
                            <li className="nav-item mr-2">
                                <button className="btn btn-outline-secondary" onClick={logOut} type="button">Log out</button>
                            </li>
                        </ul> :
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item me-2">
                            <NavLink className="btn btn-outline-secondary" to="/login" type="button">Log in</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="btn btn-primary" to="/register" type="button">Register</NavLink>
                        </li>
                    </ul>
                }
            </div>
        </div>
    </nav>
)}

export default Navbar;
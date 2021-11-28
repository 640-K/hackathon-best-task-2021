import React, { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.svg'
import './Navbar.css'

const Navbar = () => {
    const [displayMenu, setDisplayMenu] = useState(false);

    document.onscroll = () => {
        if (window.pageYOffset >= document.getElementById("navbar").offsetTop) {
            document.getElementById("navbar").classList.add("sticky")
        } else {
            document.getElementById("navbar").classList.remove("sticky");
        }
    }

    useEffect(() => {
        if (displayMenu) {
            document.getElementById('main-menu').style.animation = 'slide-right';
            document.getElementById('main-menu').style.animationDuration = '0.5s';
            document.getElementById('main-menu').style.animationFillMode = 'both';
            document.getElementById('main-menu').style.display = 'block';
        } else {
            document.getElementById('main-menu').style.animation = 'slide-left';
            document.getElementById('main-menu').style.animationDuration = '0.5s';
            document.getElementById('main-menu').style.animationFillMode = 'both';
        }
    }, [displayMenu])

    return (
        <React.Fragment>
            <div id="main-menu" className="main-menu sticky" onMouseLeave={event => setDisplayMenu(false)}>
                <h1>Menu</h1>
                <ul>
                    <li><hr className='mb-4'/></li>
                    <li><NavLink exact to="/" /*className="btn btn-outline-dark"*/>Home</NavLink></li>
                    <li><NavLink exact to="/feed" /*className="btn btn-outline-dark"*/>Feed</NavLink></li>
                    <li><NavLink exact to="/create" /*className="btn btn-outline-dark"*/>Create Event</NavLink></li>
                    <li><hr className='mb-4'/></li>
                    {false /* isUserLoggedIn */ ? <li>Hi, Max!</li> : <React.Fragment><li><NavLink exact to="/login">Login</NavLink></li><li><NavLink exact to="/register">Register</NavLink></li></React.Fragment>}
                    <li></li>
                </ul>
            </div>
            <nav id="navbar" className="navbar">
                <div className="navbar-content">
                    <div className="navbar-left">
                        <img className="me-1" src={logo} style={{width: '50px'}}/>
                        <h4 style={{color: 'white', marginLeft: '10px'}}>Meet-Up!</h4>
                    </div>
                    <button id="menu-button"
                            onMouseEnter={event => setDisplayMenu(true)}
                            className="nav-menu-button">
                        Menu
                    </button>
                </div>
            </nav>
        </React.Fragment>
    );
}

/*(
    <nav className="navbar navbar-expand-lg " style={{background: "#e3ccc8"}}>
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
);*/

export default Navbar;
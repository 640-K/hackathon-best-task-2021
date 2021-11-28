import React, { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom';
import {logOut, auth} from "../Firebase/main";
import logo from '../img/logo.svg'
import './Navbar.css'

const Navbar = ({name}) => {
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
                { name ? 
                    <div className="d-flex justify-content-between align-items-center" style={{marginRight: '20px'}}>
                        <h3 className="navbar-text">
                            Hello, {name}
                        </h3>
                        <img src={auth.currentUser.photoURL} className="rounded-circle ms-2 me-2" style={{"height":"38.24px"}}/>
                    </div> : <h1>Menu</h1>}
                <ul>
                    <li><hr className='mb-4'/></li>
                    <li><NavLink exact to="/" /*className="btn btn-outline-dark"*/>Home</NavLink></li>
                    <li><NavLink exact to="/feed" /*className="btn btn-outline-dark"*/>Feed</NavLink></li>
                    <li><NavLink exact to="/create" /*className="btn btn-outline-dark"*/>Create Event</NavLink></li>
                    <li><hr className='mb-4'/></li>
                    {name /* isUserLoggedIn */ ?
                        <React.Fragment>
                            <li><button style={{
                                background: 'none',
                                color: 'inherit',
                                border: 'none',
                                padding: '0',
                                font: 'inherit',
                                cursor: 'pointer',
                                outline: 'inherit'}}
                            onClick={logOut} type="button">Log out</button></li>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <li><NavLink exact to="/login">Login</NavLink></li>
                            <li><NavLink exact to="/register">Register</NavLink></li>
                        </React.Fragment>}
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

export default Navbar;
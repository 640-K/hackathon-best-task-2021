import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Navigation/Navbar"
import Main from "./Main/Main"
import Feed from "./Feed/Feed"
import Footer from "./Navigation/Footer"
import Login from "./Auth/Login/Login"
import Register from "./Auth/Register/Register"
import MeetCreate from './MeetCreate/MeetCreate'
import './App.css'
import bg from './img/bg.svg'

const App = () => {

    // document.getElementById('root').style.backgroundImage = './img/hach.jpg';

    return (
        // <div style={{backgroundImage: `url(${bg})`}}>
        <Router>
            <Navbar/>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/feed" element={<Feed/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/create" element={<MeetCreate/>}/>
                </Routes>
            </div>
            {/* <Footer/> */}
        </Router>
        // </div>
    );
}

export default App;

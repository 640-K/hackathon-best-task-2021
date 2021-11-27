<<<<<<< HEAD
import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./Navbar"
import Main from "./Main/Main"
import Login from "./Auth/Login/Login"
import Register from "./Auth/Register/Register"
import MeetCreate from './meetCreate/MeetCreate.js'

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/create" element={<MeetCreate/>}
            </Routes>
        </Router>
    );
}

export default App;

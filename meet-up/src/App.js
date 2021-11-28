import React, {useEffect, useState} from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {onAuthStateChanged} from "firebase/auth";
import {auth, getTokens, app} from "./Firebase/main";
import Navbar from "./Navigation/Navbar"
import Loader from "./loader"
import Main from "./Main/Main"
import Feed from "./Feed/Feed"
import Footer from "./Navigation/Footer"
import Login from "./Auth/Login/Login"
import Register from "./Auth/Register/Register"
import CreateEvent from './CreateEvent/CreateEvent'
import './App.css'

const App = () => {
    let [loader, setLoader] = useState(true);
    let [name, setName] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setName(user.displayName)
                setLoader(false)
                registerServiceWorker()

            } else
                setLoader(false)
        })
    }, [])

    if (loader) {
        return <Loader />
    }

    return (
        <Router>
            <Navbar name={name}/>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/feed" element={<Feed/>}/>
                <Route exact path="/login" element={<Login setName={setName}/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/create" element={<CreateEvent/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;

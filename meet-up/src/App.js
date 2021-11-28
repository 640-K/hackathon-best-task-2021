import React, {useEffect, useState} from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Navigation/Navbar"
import Main from "./Main/Main"
import Feed from "./Feed/Feed"
import Footer from "./Navigation/Footer"
import Login from "./Auth/Login/Login"
import Register from "./Auth/Register/Register"
import MeetCreate from './MeetCreate/MeetCreate'
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./Firebase/main";
import Loader from "./loader"
function App() {
    let [loader, setLoader] = useState(true);
    let [name, setName] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log(user)
                setName(user.displayName)
                setLoader(false)

            } else
                setLoader(false)
        })

    }, [])
    if(loader)
        return <Loader />

    return (
    <Router>
        <Navbar name={name}/>
        <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/feed" element={<Feed/>}/>
            <Route exact path="/login" element={<Login setName={setName}/>}/>
            <Route exact path="/register" element={<Register setName={setName}/>}/>
            <Route exact path="/create" element={<MeetCreate/>}/>
        </Routes>
        <Footer/>
    </Router>)
}

export default App;

import React from "react";
import Main from "./Main/Main";
import Navbar from "./Navbar";
import Button from "./LogReg/teLogin";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/test" element={<Button/>}/>
            </Routes>
        </Router>

    );
}

export default App;

import React from "react";
// import Main from "./Main/Main";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
// import background from "./img/background.png";
import PrePage from "./PrePage"
import Footer from "./Footer"

function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                {/*<Routes>*/}
                {/*    <Route path="/" element={<Main/>}/>*/}
                {/*</Routes>*/}
            </Router>
            <PrePage/>
            <Footer/>
        </div>
    );
}

export default App;

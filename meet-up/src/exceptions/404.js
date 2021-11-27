import React from "react";
// import { Link } from 'react-router-dom';
import err404 from "../img/404.png"

function Err404() {
    return(
    <div className="404ErrorPage" style={{display: "flex", justifyContent: "center"}}>
        <img src={err404} className="err404" alt="404 error" style={{width: "50%", height: "50%"}}/>
        {/*<p style={{textAlign:"center"}}>*/}
        {/*    <Link to="/">Go to Home</Link>*/}
        {/*</p>*/}
    </div>
    );
}

export default Err404;
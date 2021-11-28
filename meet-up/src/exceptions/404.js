import React from "react";
import {NavLink} from 'react-router-dom';
import err404 from "../img/404.png"
import Main from "../Main/Main";

function Err404() {
    function goBack() {
        return (
            <NavLink path="/" component={<Main/>}/>
        );
    }

    return (
        <div className="404ErrorPage"
             style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <img src={err404} className="err404" alt="404 error" style={{width: "50%", height: "50%"}}/>
            <button type="button" className="btn btn-outline-primary" onClick={() => goBack()}>Go To Main Page</button>
        </div>
    );
}

export default Err404;
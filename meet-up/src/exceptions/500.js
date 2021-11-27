import React from "react";
import {NavLink} from 'react-router-dom';
import err500 from "../img/500.png"
import Main from "../Main/Main";

function Err500() {
    function goBack() {
        return (
            <NavLink path="/" component={<Main/>}/>
        );
    }
    return(
        <div className="404ErrorPage"
             style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <img src={err500} className="err500" alt="500 error" style={{width: "50%", height: "50%"}}/>
            <button type="button" className="btn btn-outline-primary" onClick={() => goBack()}>Go To Main Page</button>
        </div>
    );
}

export default Err500;

import React, {useEffect, useState} from 'react';
import {facebookLogin, googleLogin, githubLogin, logOut, register, login, restore, auth} from "../Firebase/main";
import {onAuthStateChanged} from 'firebase/auth';

function Button(){
    let [loader, setLoader] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log(user)
                setLoader(false)

            } else
                setLoader(false)
        })

    }, [])


    function getErrors(user){
        if(typeof(user) === "string") {
            console.log(user)
        }
    }

    return (
        <div>
        <button type="button" onClick={()=>{googleLogin().then(a=>getErrors(a))}} className="btn btn-primary">googleLogin</button>
        <button type="button" onClick={()=>{facebookLogin().then(a=>getErrors(a))}} className="btn btn-primary">facebookLogin</button>
        <button type="button" onClick={()=>{githubLogin().then(a=>getErrors(a))}} className="btn btn-primary">githubLogin</button>
        <button type="button" onClick={()=>{logOut().then(a=>getErrors(a))}} className="btn btn-primary">logOut</button>
        <button type="button" onClick={()=>{register('gdfghdsfsdf@gmail.com', 'dfghfdghdsf', 'sd','dsf').then(a=>getErrors(a))}} className="btn btn-primary">register</button>
        <button type="button" onClick={()=>{login('gdfghdsfsdf@gmail.com', 'dfghfdghdsf').then(a=>getErrors(a))}} className="btn btn-primary">login</button>
        <button type="button" onClick={()=>{restore('gdfghdsfsdf@gmail.com').then(a=>getErrors(a))}} className="btn btn-primary">restore</button>

</div>
    )
}

export default Button;
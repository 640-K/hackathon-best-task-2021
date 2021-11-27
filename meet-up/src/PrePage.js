import React from "react";
import background from "./img/background.png"

function PrePage() {
    return (
        <div className="position-relative">
            <div className="position-absolute w-100 d-flex flex-column align-items-center">
                <h1 className="display-1" style={{
                    color: "white", display: "flex", justifyContent: "center",
                    marginTop: "20%", fontWeight: "700"
                }}>Try It Out!</h1>
                <button type="button" className="btn btn-primary btn-lg" style={{maxWidth: "170px"}}>
                    Get Started<i className="fas fa-arrow-right ms-2"/></button>
            </div>
            <img src={background} style={{width: "100%"}}/>
            <div className="text-center d-flex" style={{marginTop: "70px", justifyContent: "center"}}>
                <h4 className="w-25" style={{marginTop: "60px"}}>
                    About Us:
                    <p className="lead">We are a Lviv team of students who wanted to help people communicate
                        more
                        with each other through our web application that will help people organize cool and interesting
                        events "in two clicks". All you need to do is just register in our application and find or
                        create
                        an event that others can join.</p>
                </h4>
                <img style={{width: "50%"}} src="https://zenml.io/assets/headers/team.svg"/>
            </div>
        </div>
    );
}

export default PrePage;
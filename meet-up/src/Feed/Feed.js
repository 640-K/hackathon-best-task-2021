import React from "react"
import Event from './Event'

import meeting from "../img/meeting.jpg"

const Feed = () => {
    return (
        <div className="container" style={{marginTop: "15px"}}>
            
            <div>
                <Event event={{
                    "meetName": "Beer",
                    "description": "Lets go drink beer",
                    "auto_address": "Ерфурт, Німеччина",
                    "file": "https://firebasestorage.googleapis.com/v0/b/meet-up-hackathon.appspot.com/o/img%2Fd41d8cd98f00b204e9800998ecf8427e.jpeg?alt=media&token=0cc8739a-4ab1-42e3-b5bb-f5d8dd2de00e",
                    "activities": ["Board Games","Reading","Surf The Web","Meditation"],
                    "user":"EDa73GB3f4V8WZQgSZPPkWjb7OA3"
                }}/>
            </div>
        </div>
    )
    // return (<div style={{height: '1500px'}}></div>)
}

export default Feed;
import React from "react"
import './Event.css'
import {subscribe} from "../Firebase/main";
/*
{
    "meetName": "erger",
    "description": "dfgdfg",
    "auto_address": "Ерфурт, Німеччина",
    "file": "https://firebasestorage.googleapis.com/v0/b/meet-up-hackathon.appspot.com/o/img%2Fd41d8cd98f00b204e9800998ecf8427e.jpeg?alt=media&token=0cc8739a-4ab1-42e3-b5bb-f5d8dd2de00e",
    "activities": ["Board Games","Reading","Surf The Web","Meditation"],
    "user": "EDa73GB3f4V8WZQgSZPPkWjb7OA3"
}
*/
const Event = props => {
  return (
    <div className="event card mb-3">
      <img className="card-img-top" src={props.event.file} alt="Event"/>
      <div className="card-body">
          <h5 className="card-title">{props.event.meetName}</h5>
          <p className="card-text">{props.event.description}</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <div id="accordion">
          <div className="collapse" id={"collapse"+props.key}
              data-parent="#accordion">
              <div className="card-body event-body row">
                    <div className="activities col">
                        <h4>Activities: </h4>
                        <ul className="list-group activities-list">
                            {props.event.activities.map((activity, key) => <li key={key} className="list-group-item">{activity}</li> )}
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Info:</h4>
                        <p><b>Address</b>: {props.event.auto_address}</p>
                        <p><b>Date</b>: </p>
                    </div>
              </div>
          </div>
          <div className="text-center col">
              <p>
                  <button className="btn btn-outline-primary" type="button" data-bs-toggle="collapse"
                          data-bs-target={"#collapse" + props.key} aria-expanded="false"
                          aria-controls={"collapse" + props.key}>
                      Show More
                  </button>
                  <button className="btn btn-outline-primary ms-3" onClick={()=>{subscribe(props.event.id)}} type="button">
                      Subscribe
                  </button>
              </p>
          </div>
      </div>
  </div>
  );
}

export default Event;

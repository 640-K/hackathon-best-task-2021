import React from "react"
import Event from './Event'

import meeting from "../img/meeting.jpg"

const Feed = () => {
    return (
        <div className="container" style={{marginTop: "15px"}}>
            <Event event={{
                "meetName": "Beer",
                "description": "Lets go drink beer",
                "auto_address": "Ерфурт, Німеччина",
                "file": "https://firebasestorage.googleapis.com/v0/b/meet-up-hackathon.appspot.com/o/img%2Fd41d8cd98f00b204e9800998ecf8427e.jpeg?alt=media&token=0cc8739a-4ab1-42e3-b5bb-f5d8dd2de00e",
                "activities": ["Board Games","Reading","Surf The Web","Meditation"],
                "user":"EDa73GB3f4V8WZQgSZPPkWjb7OA3"
            }}/>
            <div className="card mb-3" style={{background: '#c3b4d9'}}>
                <img className="card-img-top" src={meeting} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div id="accordion">
                    <div className="collapse" id="collapseExample"
                         data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                            quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                            vice
                            lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                            probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                    <div className="text-center mb-3">
                        <p>
                            <button className="btn btn-outline-primary" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseExample" aria-expanded="false"
                                    aria-controls="collapseExample">
                                Show More
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            <div className="card mb-3" style={{background: '#c3b4d9'}}>
                <img className="card-img-top" src={meeting} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div id="accordion">
                    <div className="collapse" id="collapseExample2"
                         data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                            quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                            vice
                            lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                            probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                    <div className="text-center mb-3">
                        <p>
                            <button className="btn btn-outline-primary" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseExample2" aria-expanded="false"
                                    aria-controls="collapseExample2">
                                Show More
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
    // return (<div style={{height: '1500px'}}></div>)
}

export default Feed;
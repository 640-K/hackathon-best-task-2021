import React, { useState, useEffect } from 'react'
import { useNavigate, NavLink } from "react-router-dom";
import { Formik } from 'formik'
import { getInput } from '../Forms/Input'
import { createEventValidationsSchema } from '../Forms/Validate'
import location from './Location'
import picture from './Picture'
import './CreateEvent.css'
import {saveMeet, getMeets, subscribe} from '../Firebase/main'

const CreateEvent = () => {
    const [act, setAct] = useState([]);

    const navigate = useNavigate();

    // getMeets('Львів, Львівська область, Україна, 79000').then(d => {
    //     console.log(d)
    // })

    subscribe('c7d153c4edaba3424a51f1c66dcf0bb4').then(data => {
        console.log(data)
    })

    return(
        <div className="col-lg-6 m-auto" style={{maxWidth: '500px'}}>
            <Formik initialValues={{
                meetName: '',
                description: '',
                auto_address: '',
                date: '',
                file: null,
                activities: act,
            }} validateOnBlur validationSchema={createEventValidationsSchema} onSubmit={values => {saveMeet(values); navigate('/feed', {replace: false})}}>
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty,setFieldValue}) => (
                    <div>
                        <h1 className="text-center">Create Event</h1>
                        <div className="mb-3">
                            {getInput("meetName", "", "text", "Meet name", handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className="mb-3">
                            {location("auto_address",handleChange, handleBlur, values, errors, touched, setFieldValue)}
                        </div>
                        <div className="mb-3">
                            {getInput("description", "", "text", "Description", handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className="mb-3">
                            {getInput("date", "", "text", "Date", handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className="mb-3">
                            {picture("file",handleChange, handleBlur, values, errors, touched, setFieldValue)}
                        </div>

                        <div className="mb-3">
                            <CheckButtons act={act} setAct={setAct} />
                            <div style={{"display":"none"}}>{values.activities = Array.from(act)}</div>
                            {values.activities.length < 3 ? <div className="text-danger">{errors["activities"]}</div>:<div></div>}
                        </div>
                        <hr className="mb-4"/>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary btn-lg-6 btn-block" type="submit" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    );
}

function Thumb({file}) {
    const [thumb, setThumb] = useState(undefined);

    useEffect(()=>{
        let reader = new FileReader();

        reader.onload = () => {
           setThumb(reader.result);
        };

        reader.readAsDataURL(file);
        console.log("ssss")
    },[file]);
    return (
        <React.Fragment>
            <img src={thumb}alt={file.name} className="img-thumbnail mt-2" height={100} width={100} />
        </React.Fragment>
    );
}

function CheckButtons({act,setAct}) {
    let fruits = [
        'DIY',
        'Documentaries',
        'Gardening',
        'Camping',
        'Board Games',
        'Music',
        'Cooking',
        'Drawing',
        'Investing',
        'Yoga',
        'Writing',
        'Dance',
        'Reading',
        'Explore',
        'Origami',
        'Surf The Web',
        'Museums',
        'Sudoku',
        'Running',
        'Meditation',
        'Blog',
        'Podcasts',
        'Photography',
        'Cycling',
        'Programming',
        'Computer Games',
        'Football',
        'Piano',
        'Guitar',
        'Beer',
        'Whiskey',
        'Banana'
        ]

    return (
        <React.Fragment>
            <ul className="list-inline">
                {
                    fruits.map(((fruit,keyId) => (
                        <li className="list-inline-item mb-2" key={keyId}>
                            <input type="checkbox" className="btn-check" id={keyId} autoComplete="off"
                            onChange={(event) => {
                                if(event.target.checked){
                                    setAct([...act,fruit]);
                                }else{
                                    let temp = act;
                                    temp = temp.filter(function(f) { return f !== fruit });
                                    setAct(temp);
                                }

                            }}/>
                            <label className="btn btn-primary" htmlFor={keyId}>{fruit}</label>
                        </li>
                    )))
                }
            </ul>
        </React.Fragment>
    );
}


export default CreateEvent;

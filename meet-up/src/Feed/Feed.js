import React, { useState, useEffect } from "react"
import { Formik } from 'formik'
import Event from './Event'
import { addressValidationsSchema } from '../Forms/Validate'
import location from '../CreateEvent/Location'
import { getMeets } from '../Firebase/main'
import data from '../data/config.json'

const Feed = () => {
    const [address, setAddress] = useState('Lviv, Ukraine');
    const [events, setEvents] = useState([]);
    // const [id, setId] = useState(0);

    // const getNewId = () => {
    //     const newId = id;
    //     setId(id+1);
    //     return newId;
    // };

    const updateEvennts = () => getMeets(address).then(value => {setEvents(value); console.log(value)});

    useEffect(() => {
        updateEvennts()
    }, [address])

    return (
        <div className="container" style={{marginTop: "15px", minHeight: '1000px'}}>
            <div style={{marginBottom: '40px'}}>
                <Formik initialValues={{
                    auto_address: ''
                }} validateOnBlur validationSchema={addressValidationsSchema} onSubmit={ values => {
                    console.log(address);
                    setAddress(values.auto_address);
                }}>
                    {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue}) => (
                        <div className="d-flex justify-content-center text-center">
                            <div className='col-6'>
                                {location("auto_address", handleChange, handleBlur, values, errors, touched, setFieldValue)}
                            </div>
                            {/* <hr className='mb-4 mt-4'/> */}
                            <div className='col-2'>
                                <button className='btn btn-primary btn-md w-75' type='submit' onClick={handleSubmit}>Search</button>
                            </div>
                        </div>
                    )}
                </Formik>
            </div>
            <div>
                <ul style={{listStyle: 'none'}}>
                    {events.map((event, key) => 
                        <li key={event.id}><Event event={event}/></li>
                    )}
                </ul>
            </div>
        </div>
    )
    // return (<div style={{height: '1500px'}}></div>)
}

export default Feed;
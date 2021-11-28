import React from 'react'
import { Formik } from 'formik'
import { getInput } from '../Forms/Input'
import { createMeetValidationsSchema } from '../Forms/Validate'
import location from './Location'

const MeetCreate = () => (
    <div className="col-lg-6 m-auto" style={{maxWidth: '500px'}}>
        <Formik initialValues={{
            meetName: '',
            description: '',
            auto_address: ''
        }} validateOnBlur validationSchema={createMeetValidationsSchema} onSubmit={values => console.log(values)}>
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty,setFieldValue}) => (
                <div>
                    <h1 className="text-center">Create Event</h1>
                    <div className="mb-3">
                        {getInput("meetName", "", "text", "Meet name", handleChange, handleBlur, values, errors, touched)}
                    </div>
                    <div className="mb-3">
                        {location("auto_address",handleChange, handleBlur, values, errors, touched,setFieldValue)}
                    </div>
                    <div className="mb-3">
                        {getInput("description", "", "text", "Description", handleChange, handleBlur, values, errors, touched)}
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

export default MeetCreate;
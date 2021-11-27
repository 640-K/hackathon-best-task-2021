import React from "react";
import {Formik} from "formik";
import * as Yup from 'yup';
import getInput from "./Input";
import location from "./Location"

function Form() {


    const validationsSchema = Yup.object().shape({
        meetName: Yup.string().typeError('Must be a string.')
            .required('Valid first Meet Name is required.'),
        description: Yup.string().typeError('Must be a string.')
            .required('Please enter meet description.'),
        auto_address: Yup.string().typeError('Must be a string.')
            .required('Please enter meet address.'),
    });

    return (
        <div className="col-lg-6 m-auto">
            <Formik initialValues={{
                meetName: '',
                description: '',
                auto_address: '',
            }} validateOnBlur validationSchema={validationsSchema}
                    onSubmit={(values) => console.log(values)}>
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty,setFieldValue}) => (
                    <div>
                        <div className="row">
                            <div className="col-lg-6 m-auto mb-3">
                                {getInput("meetName", "Meet name", "text", "", handleChange, handleBlur, values, errors, touched)}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 m-auto mb-3">
                                {location("auto_address",handleChange, handleBlur, values, errors, touched,setFieldValue)}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 m-auto mb-3">
                                {getInput("description", "Description", "text", "", handleChange, handleBlur, values, errors, touched)}
                            </div>
                        </div>

                        <hr className="col-lg-6 m-auto mb-4"/>

                        <div className="col-lg-6 m-auto">
                            <button onClick={handleSubmit}
                                className="btn btn-primary btn-lg-6 btn-block" type="submit">Submit
                            </button>
                        </div>
                    </div>)}
            </Formik>
        </div>
    );
}

export default Form;
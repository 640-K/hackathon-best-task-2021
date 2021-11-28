import React, {useState} from 'react'
import { Formik } from 'formik'
import { registerValidationsSchema } from '../../Forms/Validate'
import { getInput } from '../../Forms/Input'
import {facebookLogin, githubLogin, googleLogin, register} from "../../Firebase/main";

const Register = ({setName}) => {

    let [error, setError] = useState(false)

    function getErrors(user){
        if(typeof(user) === "string") {
            setError(user)
        }else{
            setName(user.displayName)
        }
    }


    return (<div className='col-lg-6 m-auto mt-5' style={{maxWidth: '500px'}}>
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }} validateOnBlur validationSchema={registerValidationsSchema} onSubmit={values =>  register(values['email'], values['password'], values['firstName'], values['lastName']).then(a=>getErrors(a))}>
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <div>
                    {error?<div className="alert alert-danger" role="alert">
                            <b>ERROR!</b> {error}
                        </div>:null}
                    <h1 className='text-center'>Register</h1>
                    <div className='row'>
                        <div className='col-lg-6 mb-3'>
                            {getInput('firstName', '', 'text', 'First name', handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className='col-lg-6 mb-3'>
                            {getInput('lastName', '', 'text', 'Last name', handleChange, handleBlur, values, errors, touched)}
                        </div>
                    </div>
                    <div className='mb-3'>
                        {getInput('email', '', 'email', 'Email', handleChange, handleBlur, values, errors, touched)}
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 mb-3'>
                            {getInput('password', '', 'password', 'Password', handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className='col-lg-6 mb-3'>
                            {getInput('confirmPassword', '', 'password', 'Confirm Password', handleChange, handleBlur, values, errors, touched)}
                        </div>
                    </div>
                    <hr className='mb-4'/>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary btn-md btn-block w-50' type='submit' onClick={handleSubmit}>Register</button>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                            <button className="btn" onClick={()=>{googleLogin().then(a=>getErrors(a))}}>
                                <i className="fab fa-google fa-2x" />
                            </button>
                            <button className="btn" onClick={()=>{facebookLogin().then(a=>getErrors(a))}}>
                                <i className="fab fa-facebook fa-2x" />
                            </button>
                            <button className="btn" onClick={()=>{githubLogin().then(a=>getErrors(a))}}>
                                <i className="fab fa-github fa-2x" />
                            </button>
                        </div>
                </div>
            )}
        </Formik>
    </div>
)};

export default Register;

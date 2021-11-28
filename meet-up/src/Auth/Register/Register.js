import React from 'react'
import { Formik } from 'formik'
import { registerValidationsSchema } from '../../Forms/Validate'
import { getInput } from '../../Forms/Input'
import './Register.css'

const Register = props => {
    return (
        <div id="register" className='col-lg-6' style={{maxWidth: '500px', height: '100%', margin: '15% auto'}}>
            <Formik initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }} validateOnBlur validationSchema={registerValidationsSchema} onSubmit={values => console.log(values)}>
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <div>
                        <h1 className='text-center' style={{color: 'white', marginBottom: '20px'}}>Register</h1>
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
                        {/* <hr className='mb-4'/> */}
                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-primary btn-md btn-block w-50' type='submit' onClick={handleSubmit}>Register</button>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default Register;

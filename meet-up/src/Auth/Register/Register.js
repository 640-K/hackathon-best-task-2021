import React from 'react'
import { Formik } from 'formik'
import { registerValidationsSchema } from '../../Forms/Validate'
import { getInput } from '../../Forms/Input'

const Register = props => (
    <div className='col-lg-6 m-auto' style={{maxWidth: '500px'}}>
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        }} validateOnBlur validationSchema={registerValidationsSchema} onSubmit={values => console.log(values)}>
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <div>
                    <h1 className='text-center'>Register</h1>
                    <div className='row'>
                        <div className='col-lg-6 mb-3'>
                            {getInput('firstName', '', 'text', 'First name', handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className='col-lg-6 mb-3'>
                            {getInput('lastName', '', 'text', 'Last name', handleChange, handleBlur, values, errors, touched)}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 mb-3'>
                            {getInput('email', '', 'email', 'Email', handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className='col-lg-6 mb-3'>
                            {getInput('phone', '', 'phone', 'Phone', handleChange, handleBlur, values, errors, touched)}
                        </div>
                    </div>
                    <div className='mb-3'>
                        {getInput('state', '', 'text', 'State', handleChange, handleBlur, values, errors, touched)}
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
                </div>
            )}
        </Formik>
    </div>
);

export default Register;

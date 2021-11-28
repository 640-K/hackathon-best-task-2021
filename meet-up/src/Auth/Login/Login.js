import React from 'react'
import { Formik } from 'formik'
import { loginValidationsSchema } from '../../Forms/Validate'
import { getInput } from '../../Forms/Input'
import './Login.css'

const Login = props => {
    return (
        <div id="login" className='col-lg-6' style={{maxWidth: '300px', height: '100%', margin: '15% auto'}}>
            <Formik initialValues={{
                email: '',
                password: ''
            }} validateOnBlur validationSchema={loginValidationsSchema} onSubmit={values => console.log(values)}>
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <div>
                        <h1 className='text-center' style={{marginBottom: '25px'}}>Login</h1>
                        <div className='mb-3'>
                            {getInput('email', '', 'email', 'Email', handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className='mb-3'>
                            {getInput('password', '', 'password', 'Password', handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button className="btn">
                                <i className="fab fa-google" />
                            </button>
                            <button className="btn">
                                <i className="fab fa-facebook" />
                            </button>
                            <button className="btn">
                                <i className="fab fa-twitter" />
                            </button>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-primary btn-md btn-block w-50' type='submit' onClick={handleSubmit}>Login</button>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default Login;

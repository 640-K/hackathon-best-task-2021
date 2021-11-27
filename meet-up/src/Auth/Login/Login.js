import React from 'react'
import { Formik } from 'formik'
import { loginValidationsSchema } from '../../Forms/Validate'
import { getInput } from '../../Forms/Input'

const Login = props => {
    return (
        <div className='d-flex justify-content-center'>
            <Formik initialValues={{
                email: '',
                password: ''
            }} validateOnBlur validationSchema={loginValidationsSchema} onSubmit={values => console.log(values)}>
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <div>
                        <h1 className='text-center'>Login</h1>
                        <div className='mb-3'>
                            {getInput('email', '', 'email', 'Email', handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className='mb-3'>
                            {getInput('password', '', 'password', 'Password', handleChange, handleBlur, values, errors, touched)}
                        </div>
                        {/* <hr className='sm-4'/> */}
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

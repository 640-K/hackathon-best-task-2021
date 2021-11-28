import React, {useState} from 'react'
import { Formik } from 'formik'
import { loginValidationsSchema } from '../../Forms/Validate'
import { getInput } from '../../Forms/Input'
import {facebookLogin, googleLogin, githubLogin, login} from "../../Firebase/main"
const Login = ({setName}) => {
    let [error, setError] = useState(false)

    function getErrors(user){
        if(typeof(user) === "string") {
            setError(user)
        }else{
            setName(user.displayName)
        }
    }

    return (

       <div className='col-lg-6 m-auto mt-5' style={{maxWidth: '500px'}}>
            <Formik initialValues={{
                email: '',
                password: ''
            }} validateOnBlur validationSchema={loginValidationsSchema} onSubmit={values => {
                login(values['email'], values['password']).then(a=>getErrors(a))
            }}>
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <div className="">
                        {error?<div className="alert alert-danger" role="alert">
                            <b>ERROR!</b> {error}
                        </div>:null}
                        <h1 className='text-center'>Login</h1>
                        <div className='mb-3'>
                            {getInput('email', '', 'email', 'Email', handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className='mb-3'>
                            {getInput('password', '', 'password', 'Password', handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <hr className='mb-4 mt-4'/>
                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-primary btn-md btn-block w-50' type='submit' onClick={handleSubmit}>Login</button>
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
    );
}

export default Login;

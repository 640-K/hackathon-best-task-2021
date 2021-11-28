import React, {useState} from 'react'
import { useNavigate, NavLink } from "react-router-dom";
import { Formik } from 'formik'
import { loginValidationsSchema } from '../../Forms/Validate'
import { getInput } from '../../Forms/Input'
import { facebookLogin, googleLogin, githubLogin, login } from "../../Firebase/main"
import './Login.css'

const Login = ({setName}) => {
    let [error, setError] = useState(false)

    const navigate = useNavigate();

    function getErrors(user) {
        if (typeof(user) === "string") {
            setError(user);
        } else {
            setName(user.displayName);
            navigate('/', { replace: false });
        }
    }

    return (
       <div id="login" className='col-lg-6' style={{maxWidth: '300px', height: '100%', margin: '15% auto'}}>
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

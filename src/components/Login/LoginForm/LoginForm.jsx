// Login form

import { Field, Formik, Form, ErrorMessage } from 'formik'
import React from 'react'
import { Navigate } from 'react-router-dom';
import * as yup from 'yup'
import TextError from '../../TextError/TextError';
import './TextError.css'


// Validate object
const REQUIRED_MSG = 'Must be not empty!'
const validate = yup.object({
    email: yup.string().email('Wrong email').required(REQUIRED_MSG),
    password: yup.string().required(REQUIRED_MSG),
});

const LoginFormP = (props) => {
    return (
        <Formik
            initialValues={props.state}
            validationSchema={validate}
            validateOnChange={false}
            onSubmit={(values, { setStatus }) => {
                console.log(setStatus)
                props.LoginSubmit(values, setStatus)
            }}>
            {({ errors, values, status }) => (<Form>
                <div>
                    <span>Email: </span>
                    <Field type='email' name='email'></Field>
                    <ErrorMessage name='email' component={TextError} />
                </div>
                <div>
                    <span>Password</span>
                    <Field type='password' name='password'></Field>
                    <ErrorMessage name='password' component={TextError} />
                </div>
                <div>
                    <Field type='checkbox' name='remember_me'></Field>
                    <span>Remember me</span>
                </div>
                <div>
                    {
                        (errors.email || errors.password || values.password.length === 0 || values.email.length === 0)
                            ?
                            <button type='submit' disabled={true}>Login</button>
                            :
                            <button type='submit'>Login</button>
                    }
                </div>
                {status === undefined
                    ?
                    null
                    :
                    <div className='red-text'>
                        {status.error}
                    </div>
                }
            </Form>)}
        </Formik>
    )
}

// Container component for LoginFormP (Login form presentation)
const LoginForm = (props) => {
    const local_state = props.state

    if (props.isAuth) return <Navigate to={'/profile'}></Navigate>

    return (
        <LoginFormP state={local_state} LoginSubmit={props.LoginSubmit} />
    )
}

export default LoginForm
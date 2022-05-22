import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import TextError from '../../../../TextError/TextError'


const DescribeEditForm = ({
    lookingForAJobDescription,
    lookingForAJob,
    aboutMe,
    changeEditMode,
    saveProfile,
    fullName,
    contacts,
}) => {
    const localState = {
        lookingForAJobDescription,
        lookingForAJob,
        aboutMe,
        fullName,
        contacts,
    }
    return (
        <Formik
            initialValues={localState}
            onSubmit={(values, { setStatus }) => {
                saveProfile(values, setStatus).then(() => {
                    changeEditMode(false)
                })
                //
            }}
        >
            {({ errors, values, status }) => (<Form>
                <div>
                    <button>Save</button>
                </div>
                <div>
                    <span>Looking for a job description: </span>
                    <Field
                        type='text'
                        name='lookingForAJobDescription'
                    ></Field>
                </div>
                <div>
                    <span>Looking for a job: </span>
                    <Field
                        type='checkbox'
                        name='lookingForAJob'
                    ></Field>
                </div>
                <div>
                    <span>About me: </span>
                    <Field
                        type='text'
                        name='aboutMe'
                    ></Field>
                </div>
                <div>
                    <span>Full name: </span>
                    <Field
                        type='text'
                        name='fullName'
                    ></Field>
                </div>
                <div>
                    {
                        Object.keys(contacts).map((key, index) =>
                            <div key={index}>
                                <span>{key}: </span>
                                <Field
                                    type='text'
                                    name={'contacts.' + key}
                                ></Field>
                                <ErrorMessage name={'contacts.' + key} component={TextError}></ErrorMessage>
                            </div>
                        )
                    }
                    {status === undefined
                        ?
                        null
                        :
                        <div className='red-text'>
                            {status.error.map(el => <div>
                                <span>{el}</span>
                                <br></br>
                            </div>)}
                        </div>
                    }
                </div>
            </Form>)}
        </Formik>
    )
}

export default DescribeEditForm
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import TextError from '../../../TextError/TextError'

const validate = yup.object({
    post_text: yup.string().required('').max(500, 'Max size 500!')
})

const AppendPostForm = (props) => {
    return (
        <Formik
            initialValues={props.state}
            validationSchema={validate}
            onSubmit={(values) => {
                props.setPostText(values.post_text)
                props.addNewPost()
            }}>
            {({ errors, values }) => (<Form>
                <Field type='text' name='post_text'></Field>
                <ErrorMessage name='post_text' component={TextError}/>
                {
                    (errors.post_text || values.post_text.length === 0)
                    ?
                    <button disabled={true}>Add new post</button>
                    :
                    <button>Add new post</button>
                }
            </Form>)}
        </Formik>
    )
}

export default AppendPostForm
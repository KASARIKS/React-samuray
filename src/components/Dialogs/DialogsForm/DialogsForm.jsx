import { Field, Formik, Form } from 'formik'
import React from 'react'

const DialogsForm = (props) => {
    return (
        <Formik 
        initialValues={props.state}
        onSubmit={(values) => {
            props.setMessageText(values.message_text)
            props.addMessage()
        }}>
            <Form>
                <Field type='text' name='message_text'></Field>
                <button>Send</button>
            </Form>
        </Formik>
    )
}

export default DialogsForm
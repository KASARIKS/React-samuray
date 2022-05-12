// This component displays UsersList and MessageList, appends new message by callbacks to reduser and dislays it

import React from 'react'
import './Dialogs.css'
import MessagesList from './MessagesList/MessagesList'
import UsersList from './UsersList/UsersList'
import DialogsForm from './DialogsForm/DialogsForm'

const Dialogs = (props) => {
  let local_state = {
    message_text: props.message_text
  }

  return (
    <div className='dialogs'>
      <UsersList data={props.state} />
      <MessagesList data={props.state} />

      <DialogsForm state={local_state} addMessage={props.addMessage} setMessageText={props.setMessageText}/>

      {/* <input value={props.message_text} onChange={el => props.setMessageText(el)}></input> */}
      {/* <button onClick={() => props.addMessage()}>Send</button> */}
    </div>
  )
}

export default Dialogs
// Messages list

import React from 'react'
import '../Dialogs.css'
import MessageItem from './MessageItem/MessageItem'

const MessagesList = (props) => {
    return (
        <div className='messages'>
            {props.data.dialogs.messagesData.map(message => <MessageItem text={message.text} key={message.id} user_id={message.user_id} />)}
        </div>
    )
}

export default MessagesList
// Component which display text

import React from 'react'

const MessageItem = (props) => {
    return (
        <div className=''>
            {props.text}
        </div>
    )
}

export default MessageItem
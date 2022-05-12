// Post component, text and count of likes displaing

import React from 'react'
import './Post.css'

const Post = (props) => {
    return (
        <div className='post'>
            <p>{props.text}</p>
            <span>likes: {props.likes_count}</span>
            <button onClick={() => {props.deletePost(props.id)}}>Delete</button>
        </div>
    )
}

export default Post
// List of posts

import React from 'react'
import AppendPostForm from './AppendPostForm/AppendPostForm'
import Post from './Post/Post'

const MyPosts = (props) => {
    let local_state = {
        post_text: props.post_text
    }
    return (
        <div>
            <h3>MyPosts</h3>
            <div>
                <AppendPostForm state={local_state} setPostText={props.setPostText} addNewPost={props.addNewPost}/>
                {/* <input value={props.post_text} onChange={el => props.setPostText(el.target.value)}></input>
                <button onClick={props.addNewPost}>Add new post</button> */}
            </div>
            {props.postsData.map(post => <Post id={post.id} key={post.id} text={post.text} likes_count={post.likes_count} deletePost={props.deletePost}/>)}
        </div>
    )
}

export default MyPosts
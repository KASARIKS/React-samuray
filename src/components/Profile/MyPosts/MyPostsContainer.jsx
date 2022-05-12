// Container component for MyPosts, map to props, setPostText, addNewPost callbacks, and postsData
// post_next need for FLUX, it`s change every keyboard hit by callback setPostText

import { addPostActionCreator, deletePostActionCreator, setPostTextActionCreator } from '../../../state/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { compose } from 'redux'

function mapStateToProps(state) {
    return {
        postsData: state.profile.postsData,
        post_text: state.profile.post_text
    }
}

let callbacks = {
    setPostText: setPostTextActionCreator,
    addNewPost: addPostActionCreator,
    deletePost: deletePostActionCreator,
}

export default compose(
    connect(mapStateToProps, callbacks)
)(MyPosts)
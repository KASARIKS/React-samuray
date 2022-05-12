// UI follow or unfollow button

import React from 'react'

const FollowBtn = (props) => {
    return (
        <div>
            <button disabled={props.isFollowingInProcess.some(id => id === props.user_id)} onClick={() => {
                props.followThunk(props.user_id, props.follow_callback, props.follow_callback_api, props.toggleIsFollowing)
            }}>{props.text}</button>
        </div>
    )
}

export default FollowBtn
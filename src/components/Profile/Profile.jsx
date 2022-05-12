// This component just unite a ProfileInfo and MyPostContainer

import React from 'react'
import './App.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    
    return (
        <div className='main-content'>
            <ProfileInfo user_profile={props.user_profile} status={props.status} updateStatus={props.updateStatus}/>
            <hr/>
            <div>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile
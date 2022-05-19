// Component displays user profile, check server documentation
import React from 'react'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import default_ava from '../images/favicon.ico'

const ProfileInfo = (props) => {
    let user_info = props.user_profile

    const onMainPhotoSelect = (el) => {
        if (el.target.files.length) {
            props.savePhoto(el.target.files[0])
        }
    }

    return (
        <div>
            <img
                className='head-img'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
                alt=''
            />
            <img
                className='avatar-img'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
                alt=''
            />
            <p>Main content</p>
            <div>
                {
                    (user_info !== null || user_info !== undefined)
                        ?
                        <div>
                            {
                                user_info
                                    ?
                                    <div>
                                        <h3>{user_info.fullName}</h3>
                                        {
                                            <div>
                                                <img src={user_info.photos.large || default_ava} alt='user-logo-large'></img>
                                                {
                                                    props.isOwner
                                                    ?
                                                    <input type={'file'} onChange={el => onMainPhotoSelect(el)}></input>
                                                    :
                                                    null
                                                }
                                            </div>
                                        }
                                        <p>Description: {user_info.lookingForAJobDescription}</p>
                                        <ProfileStatusWithHooks
                                            status={props.status}
                                            updateStatus={props.updateStatus} />
                                    </div>
                                    :
                                    null
                            }
                        </div>
                        :
                        null
                }
            </div>
        </div>
    )
}

export default ProfileInfo
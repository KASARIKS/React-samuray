// List of users
import React from 'react'
import User from './User/User'
import '../Dialogs.css'

const UsersList = (props) => {
    return (
        <div className='users-names'>
            {props.data.dialogs.usersData.map(user => <User name={user.name} key={user.id} id={user.id} />)}
        </div>
    )
}

export default UsersList
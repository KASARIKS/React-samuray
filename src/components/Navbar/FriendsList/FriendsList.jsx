// Useless component
import React from 'react'

const FriendsList = (props) => {
  return (
    <div>
        <h3>Friends: </h3>
        {props.friends.map((friend, index) => <h4 key={index}>{friend.name}</h4>)}
    </div>
  )
}

export default FriendsList
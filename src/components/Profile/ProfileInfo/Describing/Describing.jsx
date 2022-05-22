import React from 'react'
import Contacts from './Contacts/Contacts'

// Component which show additional user information
const Describing = ({
    lookingJobD,
    lookingJob,
    aboutMe,
    contacts,
    isOwner,
    changeEditMode,
}) => {
    //debugger;
    return (
        <div>
            {lookingJobD ? <p>Looking for a job description: {lookingJobD}</p> : null}
            <p>Looking for a job: {lookingJob ? 'Yes' : 'No'}</p>
            <p>About me: {aboutMe}</p>
            <Contacts contacts={contacts}/>
            {isOwner ? <button onClick={() => changeEditMode(true)}>Chagne describe</button> : null}
        </div>
    )
}

export default Describing
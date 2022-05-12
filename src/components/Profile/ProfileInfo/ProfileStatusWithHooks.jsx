import React, { useEffect, useState } from 'react'

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]) 

    return (
        <div>
            {
                editMode
                    ?
                    <div>
                        <input
                            onBlur={() => {
                                setEditMode(false)
                                props.updateStatus(status)
                            }}
                            value={status}
                            autoFocus={true}
                            onChange={el => { setStatus(el.target.value) }}></input>
                    </div>
                    :
                    <div>
                        <span onClick={() => { setEditMode(true) }}><b>status: </b> {props.status}</span>
                    </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks
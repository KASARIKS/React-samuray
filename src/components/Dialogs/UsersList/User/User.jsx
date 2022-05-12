// User name in dialogs page, Navlink just changes backlight of name

import React from 'react'
import { NavLink } from 'react-router-dom'

const User = (props) => {
    return (
        <div className='active'>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default User
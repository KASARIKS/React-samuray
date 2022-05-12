// List of Navlinkgs

import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className='nav'>
            <div><NavLink to={'/profile'}>Profile</NavLink></div>
            <div><NavLink to={'/messages'}>Dialogs</NavLink></div>
            <div><NavLink to={'/users'}>Users</NavLink></div>
            <div><NavLink to={'/news'}>News</NavLink></div>
            <div><NavLink to={'/music'}>Music</NavLink></div>
            <div><NavLink to={'/settings'}>Settings</NavLink></div>
            <div><NavLink to={'/'}>Main</NavLink></div>
        </nav>
    )
}

export default Navbar
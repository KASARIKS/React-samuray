// Head of site, Link to Login or span YOUR name

import React from "react";
import { NavLink } from "react-router-dom";
import './App.css'

const Header = (props) => {
    return (
        <header className='header'>
            <img
                src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'
                alt=''
            />
            <div>
                {props.isAuth
                    ?
                    <div>
                        {props.login} - <button onClick={props.logout}>Logout</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header
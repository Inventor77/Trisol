import React from 'react'
import './Nav.scss'
import Logo from '../../assets/svgs/logo.svg'


function Nav() {
    return (
        <div className='nav'>
            <div className='logo_container'>
                <img src={Logo} alt='trisol-logo'></img>
            </div>
        </div>
    )
}

export default Nav
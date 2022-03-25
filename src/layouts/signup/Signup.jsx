import React from 'react'
import './Signup.scss'
import Logo from '../../assets/svgs/logo.svg'
import InfoContainer from '../../components/Info/InfoContainer'

function Signup() {
    return (
        <div className='signup_layout'>
            <div className='signup_container'>
                <div className='signup_container_left'>
                    <div className='signup_container_logo'>
                        <img src={Logo} alt='trisol-logo'></img>
                    </div>
                    <InfoContainer />
                </div>
            </div>
        </div>
    )
}

export default Signup
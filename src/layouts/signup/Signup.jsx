import React from 'react'
import './Signup.scss'
import Logo from '../../assets/svgs/logo.svg'
import InfoHeader from '../../components/Info/InfoHeader'
import InfoPara from '../../components/Info/InfoPara'
import InfoCheckStyle from '../../components/Info/InfoCheckStyle'

function Signup() {
    return (
        <div className='signup_layout'>
            <div className='signup_container'>
                <div className='signup_container_left'>
                    <div className='signup_container_logo'>
                        <img src={Logo} alt='trisol-logo'></img>
                    </div>
                    <InfoHeader />
                    <InfoPara />
                    <InfoCheckStyle />
                </div>
            </div>
        </div>
    )
}

export default Signup
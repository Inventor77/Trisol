import React from 'react'
import './ProfileInfo.scss'

function ProfileInfo() {
    return (
        <div className='profileInfo_container'>
            <div className='container_left'>
                <div className='color_ring'>
                    <div className='img_container'>
                    </div>
                </div>
            </div>
            <div className='container_right'>
                <div className='careSeeker_info'>
                    <div className='name'>
                        SHREEDUTT RAJENDRA DIXIT
                    </div>
                    <div className='other_info'>
                        <div className='gender'>Male,</div>
                        <div className='age'>21 years</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
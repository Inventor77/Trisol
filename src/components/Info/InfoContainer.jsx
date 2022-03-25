import React from 'react'
import './Info.scss'
import InfoCheckStyle from './InfoCheckStyle'
import InfoHeader from './InfoHeader'
import InfoPara from './InfoPara'


function InfoContainer() {
    return (
        <div className='info_container'>
            <InfoHeader />
            <InfoPara />
            <InfoCheckStyle />
        </div>
    )
}

export default InfoContainer
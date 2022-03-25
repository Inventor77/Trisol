import React from 'react'
import Check from "../../assets/svgs/check.svg"
import './Info.scss';

const LIST_CONTENT = [
    "Medical Records Register",
    "Quick updates from your Radiologist/Doctor",
    "Easy to handle lifetime records",
    "Consultation Note Management by your Doctor",
    "& many more"
]

function InfoCheckStyle() {
    return (
        <div className='infoCheckStyle'>
            <div className='infoCheckStyle_header'>
                <h3 className='infoCheckStyle_header_text'>
                    What you can do with Trisol
                </h3>
                {LIST_CONTENT.map((text) => <InfoCheckStyleItem text={text} />)}
            </div>
        </div>
    )
}

function InfoCheckStyleItem(props) {
    const { text } = props;
    return (
        <div className='infoCheckStyleItem'>
            <div className='infoCheckStyleItem_check_logo'>
                <img src={Check}  alt='check'></img>
            </div>
            <h4 className='infoCheckStyleItem_text'>
                {text}
            </h4>
        </div>
    )
}


export default InfoCheckStyle;
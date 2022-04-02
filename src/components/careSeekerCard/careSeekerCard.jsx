import React from 'react'
import './careSeekerCard.scss'
import { IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function careSeekerCard() {
    return (
        <div className='card_container'>
            <div className='color_ring'>
                <div className='img_container'>
                </div>
            </div>
            <div className='careSeeker_info'>
                <div className='name'>
                    SHREEDUTT RAJENDRA DIXIT
                </div>
                <div className='other_info'>
                    <div className='last_update'>Last update:  <b>31 March 2022 </b></div>
                </div>
            </div>
            <div className="navigate">
                <IconButton size='large'>
                    <ChevronRightIcon fontSize="inherit" sx={{ color: '#fff' }} />
                </IconButton>
            </div>

        </div>
    )
}

export default careSeekerCard
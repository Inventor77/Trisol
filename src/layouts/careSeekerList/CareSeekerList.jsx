import React from 'react'
import './CareSeekerList.scss'
import Nav from '../../components/Navbar/Nav'
import Card from '../../components/careSeekerCard/careSeekerCard'


function CareSeekerList() {
    return (
        <section className='careSeeker_layout'>
            <Nav />
            <div className="layout_container">
                <div className="container_header">
                    <div className="header_text">
                        Care-Seeker List
                    </div>
                </div>
                <Card />
            </div>
        </section>
    )
}

export default CareSeekerList
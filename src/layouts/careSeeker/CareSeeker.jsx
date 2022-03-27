import React from 'react'
import './CareSeeker.scss'
import Nav from '../../components/Navbar/Nav'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'


function CareSeeker() {
    return (
        <section className='careSeeker_layout'>
            <Nav />
            <main className='layout_container'>
                <ProfileInfo />
            </main>
        </section>
    )
}

export default CareSeeker
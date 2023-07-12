import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Bio from '@/components/profile/Userheading'
import Tab from '@/components/profile/Usersection'
import React from 'react'

const Account = () => {
    return (
        <>
            <Navbar />
            <Bio page='settings' />
            <Tab page='settings' />
            <Footer />
        </>
    )
}

export default Account
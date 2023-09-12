import Footer from '@/components/Footer'
import Navbar from '@/components/bars/Navbar'
import Bio from '@/components/profile/Userheading'
import Tab from '@/components/profile/Usersection'
import React from 'react'

const Account = () => {
    return (
        <>
            <Navbar />
            <Bio page='index' />
            <Tab page='index' />
            <Footer />
        </>
    )
}

export default Account
import Footer from '@/components/Footer'
import Menusection from '@/components/Menusection'
import Navbar from '@/components/Navbar'
import Filterbars from '@/components/bars/Filterbars'
import React from 'react'

const Menu = () => {
    return (
        <>
            <Navbar />
            <Menusection />
            <Filterbars />
            <Footer />
        </>
    )
}

export default Menu
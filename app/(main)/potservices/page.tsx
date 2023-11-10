import React from 'react'
import Meals from '@/components/datalist/Potservices'
import WhatsApp from '@/components/WhatsApp'
import Navbar from '@/components/bars/Navbar'

const Potservices = async() => {

    return (
        <>
            <Navbar />
            <Meals />
            <WhatsApp />
        </>
    )
}

export default Potservices
import Footer from '@/components/Footer'
import Navbar from '@/components/bars/Navbar'
import React from 'react'
import PotList from '@/components/datalist/Potservices'
import WhatsApp from '@/components/WhatsApp'
import { PotMeals } from '@/lib/fetch'

const Potservices = async() => {

    const pot: any = await PotMeals()

    return (
        <>
            <Navbar />
            <PotList meals={pot} />
            <Footer />
            <WhatsApp />
        </>
    )
}

export default Potservices
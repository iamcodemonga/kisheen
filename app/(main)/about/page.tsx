import Aboutheader from '@/components/Aboutheader'
import Appsoon from '@/components/Appsoon'
import Contactsection from '@/components/Contactsection'
import Footer from '@/components/Footer'
import Navbar from '@/components/bars/Navbar'
import Services from '@/components/Services'
import WhatsApp from '@/components/WhatsApp'
import React from 'react'

const About = () => {
    return (
        <>
            <Navbar />
            <Aboutheader />
            <Services />
            <Appsoon />
            <Contactsection />
            <Footer />
            <WhatsApp />
        </>
    )
}

export default About
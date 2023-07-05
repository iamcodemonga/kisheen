import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ContactForm from '@/components/forms/Contactform'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Navbar />
            <section className='lg:grid grid-cols-2 gap-28 container w-full pt-16 pb-28 content-center h-full'>
                <div className='hidden lg:block mt-32'>
                    <h2 className='mt- font-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, illum.</h2>
                </div>
                <ContactForm />
            </section>
            <Footer />
        </>
    )
}

export default Contact
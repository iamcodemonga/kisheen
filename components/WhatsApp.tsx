import Link from 'next/link'
import React from 'react'

const WhatsApp = () => {
    return (
        <div className='fixed bottom-0 right-0 p-3 md:p-5'>
            {/* <a href={`https://wa.link/ach1qz`}><img src="whatsapp.png" alt="whatsapp_logo" className='h-20' /></a> */}
            <a href={`https://wa.me/2347066340180?text=Hi there! I'll like to order a meal`}><img src="../whatsapp.png" alt="whatsapp_logo" className='h-20' /></a>
        </div>
    )
}

export default WhatsApp
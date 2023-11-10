import React from 'react'
import Link from 'next/link'

const CheckoutBanner = () => {
    return (
        <header className='container py-24 bg-gray-950'>
            <h3 className='mb-5 text-center font-black text-accent text-5xl'>CHECKOUT</h3>
            <p className='text-center text-gray-400'><Link href='/' className='text-white hover:text-accent font-bold'>Home</Link> / <Link href='/tray' className='text-white hover:text-accent font-bold'>Tray</Link> / Checkout</p>
        </header>
    )
}

export default CheckoutBanner
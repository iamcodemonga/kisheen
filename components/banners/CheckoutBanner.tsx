import React from 'react'
import Link from 'next/link'

const CheckoutBanner = () => {
    return (
        <header className='container py-24 bg-accent'>
            <h3 className='mb-5 text-center font-black text-5xl'>CHECKOUT</h3>
            <p className='text-center text-gray-700'><Link href='/' className='text-black font-bold'>Home</Link> / <Link href='/tray' className='text-black font-bold'>Tray</Link> / Checkout</p>
        </header>
    )
}

export default CheckoutBanner
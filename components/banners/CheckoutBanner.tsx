import React from 'react'
import Link from 'next/link'

const CheckoutBanner = ({ meal }: { meal: string | undefined }) => {
    return (
        <header className='px-4 lg:px-20 py-24 bg-gray-950'>
            <h3 className='mb-5 text-center font-black text-accent text-5xl'>CHECKOUT</h3>
            <p className='text-center text-gray-400'><Link href='/' className='text-white hover:text-accent font-medium'>Home</Link> / {meal ? <Link href={`/meal/${meal}`} className='text-white hover:text-accent font-medium'>Meal</Link> : <Link href='/tray' className='text-white hover:text-accent font-medium'>Cart</Link>} / Checkout</p>
        </header>
    )
}

export default CheckoutBanner
import CheckoutBanner from '@/components/banners/CheckoutBanner'
import Navbar from '@/components/bars/Navbar'
import CartCheckoutForm from '@/components/forms/CartCheckoutForm'
import React from 'react'

const Checkout = () => {
    return (
        <>
            <Navbar />
            <CheckoutBanner />
            <CartCheckoutForm />
        </>
    )
}

export default Checkout
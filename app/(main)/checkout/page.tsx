import CheckoutBanner from '@/components/banners/CheckoutBanner'
import Navbar from '@/components/bars/Navbar'
import CartCheckoutForm from '@/components/forms/CartCheckoutForm'
import React from 'react'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { EmailExists } from '@/lib/graphcms'

const Checkout = async() => {
    const session = await getServerSession(authOptions)
    const user = await EmailExists(session?.user?.email as string)

    return (
        <>
            <Navbar user={user[0]} />
            <CheckoutBanner meal={undefined} />
            <CartCheckoutForm user={user[0]} />
        </>
    )
}

export default Checkout
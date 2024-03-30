import CheckoutBanner from '@/components/banners/CheckoutBanner'
import Navbar from '@/components/bars/Navbar'
import CartCheckoutForm from '@/components/forms/CartCheckoutForm'
import React from 'react'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import Footer from '@/components/Footer'
import { getUser } from '@/lib/datacalls'
import axios from 'axios'
import { redirect } from 'next/navigation'

const Checkout = async() => {
    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)
    const mobile = false;

    const [ discount, settings ] = await Promise.all([
        axios(`${process.env.API_ROOT}/settings/discount`),
        axios(`${process.env.API_ROOT}/settings`)
      ])

      if (!settings.data.cardpay && !settings.data.manualpay) {
        redirect("/")
      }

      const eligible: boolean = user.profile?.bonuslevel == 0 ? true : false;
    
      let bonus: number = (user.profile?.bonuslevel == 0 ? process.env.REGBONUS : discount.data.type == "none" ? 0 : discount.data.type == "regular" ? discount.data.rate : discount.data.type == "seasonal" ? discount.data.rate : 0);

    return (
        <>
            <Navbar user={user.profile} allowcart={settings.data.cart} />
            <CheckoutBanner meal={undefined} />
            <CartCheckoutForm user={user.profile} discount={1-(bonus/100)} mobile={mobile} rate={bonus} manualpay={settings.data.manualpay} cardpay={settings.data.cardpay} eligible={eligible} />
            <Footer />
        </>
    )
}

export default Checkout
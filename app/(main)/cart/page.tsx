import Navbar from '@/components/bars/Navbar'
import CartSection from '@/components/cart/CartSection'
import MockTray from '@/components/loaders/MockTray'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { EmailExists } from '@/lib/graphcms'
import Footer from '@/components/Footer'
import { getUser } from '@/lib/datacalls'
import axios from 'axios'
import { redirect } from 'next/navigation'

type TUserProps = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    password?: string;
}

const Cart = async() => {

    const [ discount, settings ] = await Promise.all([
        axios(`${process.env.API_ROOT}/settings/discount`),
        axios(`${process.env.API_ROOT}/settings`)
      ])

      if (!settings.data.cart) {
        redirect("/");
      }

      const session = await getServerSession(authOptions)
      const user = await getUser(session?.user?.email as string)
    
      let bonus: number = (user.profile?.bonuslevel == 0 ? process.env.REGBONUS : discount.data.type == "none" ? 0 : discount.data.type == "regular" ? discount.data.rate : discount.data.type == "seasonal" ? discount.data.rate : 0);

      let checkout = (settings.data.cardpay ? settings.data.manualpay ? true : true : settings.data.manualpay ? true : false)
    
    return (
        <>
            <Navbar user={user.profile} allowcart={settings.data.cart} />
            <CartSection discount={bonus} checkout={checkout} />
        </>
    )
}

export default Cart
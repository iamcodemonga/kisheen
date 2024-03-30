import React from 'react'
import Meals from '@/components/datalist/Potservices'
import WhatsApp from '@/components/WhatsApp'
import Navbar from '@/components/bars/Navbar'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { EmailExists } from '@/lib/graphcms'
import Footer from '@/components/Footer'
import { getUser } from '@/lib/datacalls'
import axios from 'axios'

const Potservices = async() => {
    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)
    const { data } = await axios(`${process.env.API_ROOT}/settings`);

    return (
        <>
            <Navbar user={user.profile} allowcart={data.cart} />
            <Meals />
        </>
    )
}

export default Potservices
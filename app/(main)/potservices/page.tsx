import React from 'react'
import Meals from '@/components/datalist/Potservices'
import WhatsApp from '@/components/WhatsApp'
import Navbar from '@/components/bars/Navbar'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { EmailExists } from '@/lib/graphcms'

const Potservices = async() => {
    const session = await getServerSession(authOptions)
    const user = await EmailExists(session?.user?.email as string)

    return (
        <>
            <Navbar user={user[0]} />
            <Meals />
            <WhatsApp />
        </>
    )
}

export default Potservices
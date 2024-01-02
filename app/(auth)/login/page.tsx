import Authbar from '@/components/bars/Authbar'
import Loginform from '@/components/forms/Loginform'
import React from 'react'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'

const Login = async() => {
    const session = await getServerSession(authOptions)
    if (session) {
        redirect('/dashboard')
    }

    return (
        <>
            <section className='w-full h-screen relative overflow-hidden flex items-center justify-center'>
                <img className='w-full h-full object-cover scale-150' src="https://ovenfresh.inventallianceco.com/wp-content/uploads/2023/03/AFANG-SOUP-2500.jpg" alt="meal" />
                <div className='w-full h-full backdrop-blur-md md:backdrop-blur-none bg-black/80 absolute top-0 left-0'></div>
                <Authbar />
                <Loginform />
            </section>
            <Footer />
        </>
    )
}

export default Login
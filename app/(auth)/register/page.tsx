import React from 'react'
import Registerform from '@/components/forms/Registerform'
import Authbar from '@/components/bars/Authbar'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import Footer from '@/components/Footer'
import { getUser } from '@/lib/datacalls'

const Register = async() => {
    const session = await getServerSession(authOptions)
    if (session) {
        const userparams = await getUser(session?.user?.email as string)
        if (userparams.profile.role == "customer") {
            redirect('/dashboard')
        }
        if (userparams.profile.role == "board") {
            redirect('/admin')
        }
        if (userparams.profile.role == "manager") {
            redirect('/admin')
        }
        if (userparams.profile.role == "agent") {
            redirect('/admin/orders')
        }
        return;
    }

    return (
        <>
            <section className='w-full h-screen relative overflow-x-hidden flex items-center justify-center'>
                <img className='w-full h-full object-cover' src="https://www.thedreamafrica.com/wp-content/uploads/2018/01/easy-ogbono-soup_recipe-e1541074074711.jpg" alt="meal" />
                <div className='w-full h-full md:backdrop-blur-none bg-black/80 absolute top-0 left-0'></div>
                <Authbar />
                <Registerform discount={Number(process.env.REGBONUS)} />
            </section>
            <Footer />
        </>
    )
}

export default Register
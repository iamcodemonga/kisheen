import React from 'react'
import ForgotpasswordForm from '@/components/forms/ForgotpasswordForm'
import Authbar from '@/components/bars/Authbar'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import Footer from '@/components/Footer'
import { getUser } from '@/lib/datacalls'

const ForgotPassword = async() => {
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
            <section className='w-full h-screen relative overflow-hidden flex items-center justify-center'>
                <img className='w-full h-full object-cover scale-150' src="https://guardian.ng/wp-content/uploads/2018/08/Seafood-okra.-Photo-FoodAce-e1534093097400.jpg" alt="meal" />
                <div className='w-full h-full md:backdrop-blur-none bg-black/80 absolute top-0 left-0'></div>
                <Authbar />
                <ForgotpasswordForm />
            </section>
            <Footer />
        </>
    )
}

export default ForgotPassword
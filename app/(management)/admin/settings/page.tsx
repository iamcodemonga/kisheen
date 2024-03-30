import Navbar from '@/components/bars/AdminNavbar'
import SiteSettings from '@/components/forms/SiteSettings'
import DiscountForm from '@/components/forms/DiscountForm'
import AdminPasswordForm from '@/components/forms/AdminPasswordForm'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { getUser } from '@/lib/datacalls'
import { redirect } from 'next/navigation'
import axios from 'axios'

export const dynamic = "force-dynamic";

const AdminSettings = async() => {
    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)
    let bonus;
    let settings;
    
    if (user.profile.role == "customer") {
        redirect('/dashboard')
    }

    if (user.profile.role == "board") {
        const [ discount, rules ] = await Promise.all([
            axios(`${process.env.API_ROOT}/settings/discount`),
            axios(`${process.env.API_ROOT}/settings`)
        ])
        bonus = discount.data;
        settings = rules.data;
    }

    console.log(bonus, settings);
    

    // const discount = axios(`${process.env.API_ROOT}/settings/discount`),
    // const rules =  axios(`${process.env.API_ROOT}/settings`)
    // console.log(bonus, settings)

    return (
        <>
            <Navbar />
            <section className='my-0 pt-10 pb-5 lg:px-5'>
                <div className='columns-1 lg:columns-2 gap-10'>
                    <div className='border border-accent rounded-xl mb-10 py-10' >
                        <div className=''>
                            <div className='flex justify-center w-full'>
                                <div className='h-32 w-32 rounded-full bg-accent/80 flex justify-center items-center text-primary mb-8 text-5xl'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-center lg:text-4xl text-xl mb-2'>{`${user.profile.firstname.charAt(0).toUpperCase()+user.profile.firstname.slice(1)} ${user.profile.lastname.charAt(0).toUpperCase()+user.profile.lastname.slice(1)}`}</h3>
                            <h3 className='text-center text-gray-500 mb-2'>{user.profile.email}</h3>
                            <h3 className='text-center text-gray-500 mb-5'>{user.profile.city}, {user.profile.country}</h3>
                            <div className='w-full flex justify-center space-x-4'>
                                <button type="button" className='text-green-900 bg-green-200 px-10 py-2 rounded-md font-normal cursor-default'>{user.profile.role.charAt(0).toUpperCase()+user.profile.role.slice(1)}</button>
                                <button type="button" className='text-primary bg-gray-900 px-10 py-2 rounded-md font-normal hidden items-center hover:text-accent'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
                                        <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                    </svg>settings
                                </button>
                            </div>
                        </div>
                    </div>
                    <AdminPasswordForm id={user.profile.id} />
                    {user.profile.role == "board" ? <DiscountForm discount={bonus} /> : null}
                    {user.profile.role == "board" ? <SiteSettings settings={settings} /> : null}
                </div>
            </section>
        </>
    )
}

export default AdminSettings
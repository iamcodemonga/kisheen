"use client"

import { FC } from 'react'
import Link from 'next/link'

type TUserProps = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

type Active = {
    page: string;
    user: TUserProps;
}

const Userheading: FC<Active> = ({ page, user }) => {
    return (
        <>
            <header className='container pt-10 pb-5 lg:pb-10'>
                <h3 className='my-3 text-3xl md:text-6xl font-bold'>Hello, {user.firstName.charAt(0).toUpperCase()+user.firstName.slice(1)}</h3>
                <p>{user.email}</p>
            </header>
            <div className='lg:hidden overflow-x-auto whitespace-nowrap container pb-5'>
                <Link href="/dashboard" className={page == 'index' ? 'inline-block py-1 px-10 text-center border-b-4 border-accent font-bold text-accent' : 'inline-block py-1 px-10 text-center font-bold hover:text-accent'}>All Orders</Link>
                <Link href="/dashboard/settings" className={page == 'settings' ? 'inline-block py-1 px-10 text-center border-b-4 border-accent font-bold text-accent' : 'inline-block py-1 px-10 text-center font-bold hover:text-accent'}>Settings</Link>
            </div>
        </>
    )
}

export default Userheading
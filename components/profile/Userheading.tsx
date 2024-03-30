"use client"

import { FC } from 'react'

type TUserProps = {
    id: string;
    firstname: string;
    lastname: string;
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
            <header className='pt-10 pb-5 lg:pb-10 px-3 lg:px-5'>
                <h3 className='my-3 text-3xl md:text-6xl font-bold'>Hello, <span className='text-accent'>{user.firstname.charAt(0).toUpperCase()+user.firstname.slice(1)}</span></h3>
                <p className='font-normal text-slate-500'>{user.email}</p>
            </header>
            {/* <div className='lg:hidden overflow-x-auto whitespace-nowrap container pb-5'>
                <Link href="/dashboard" className={page == 'index' ? 'inline-block py-1 px-10 text-center border-b-4 border-accent font-bold text-accent' : 'inline-block py-1 px-10 text-center font-bold hover:text-accent'}>All Orders</Link>
                <Link href="/dashboard/settings" className={page == 'settings' ? 'inline-block py-1 px-10 text-center border-b-4 border-accent font-bold text-accent' : 'inline-block py-1 px-10 text-center font-bold hover:text-accent'}>Settings</Link>
            </div> */}
        </>
    )
}

export default Userheading
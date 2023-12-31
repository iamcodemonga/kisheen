"use client"

import React, { FC, FormEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'

type TUserProps = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

interface status {
    open: boolean;
    handleClose: () => void;
    user: TUserProps;
}

const Sidebar: FC<status> = ({ open, handleClose, user }) => {

    const pathname = usePathname();

    const handleLogout = async(e: FormEvent) => {
        e.preventDefault();
        await signOut()
        return;
    }

    return (
        <section className={open ? 'h-screen w-full bg-primary z-50 fixed top-0 left-0 flex items-center justify-center' : 'hidden h-screen w-full bg-primary z-50 fixed top-0 left-0 items-center justify-center' }>
            <div className='absolute top-0 right-0' onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={pathname == "/" ? "w-10 h-10 mt-10 mr-9" : "w-10 h-10 mt-6 mr-3"}>
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
            </div>
            <ul className='space-y-10'>
                <li><p className='text-center'><Link href="/" className={pathname == '/' ? 'text-2xl font-extrabold text-accent' : 'text-2xl'}>Home</Link></p></li>
                <li><p className='text-center'><Link href="/menu" className={pathname.startsWith('/menu') ? 'text-2xl font-extrabold text-accent' : 'text-2xl text-gray-800'}>Food Menu</Link></p></li>
                <li><p className='text-center'><Link href="/potservices" className={pathname.startsWith('/potservices') ? 'text-2xl font-extrabold text-accent' : 'text-2xl'}>Pot Services</Link></p></li>
                <li><p className='text-center'><a href="mailto:codemonga@gmail.com" className='text-2xl'>Contact</a></p></li>
                <li><p className='text-center'><Link href="/about" className={pathname.startsWith('/about') ? 'text-2xl font-extrabold text-accent' : 'text-2xl'}>About</Link></p></li>
                {user ? <li><p className='text-center'><Link href="/dashboard" className={pathname.startsWith('/dashboard') ? 'text-2xl font-extrabold text-accent' : 'text-2xl'}>Dashboard</Link></p></li> : <li><p className='text-center'><Link href="/login" className={pathname.startsWith('/login') ? 'text-2xl font-extrabold text-accent' : 'text-2xl'}>Login</Link></p></li>}
                {!user ? <li><p className='text-center mt-12'><Link href="/register" className='text-2xl px-8 py-4 bg-accent text-primary font-semibold rounded-full'>Register</Link></p></li>: null}
            </ul>
            {user ? <p className='text-center absolute bottom-16'><Link href="/logout" className='text-lg px-8 py-3 bg-red-700 text-primary rounded-full flex items-center' onClick={(e) => handleLogout(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                </svg>Log out</Link>
            </p> : null}
        </section>
    )
}

export default Sidebar
import React, { FC } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Authbar = () => {

    const pathname = usePathname()
    const router = useRouter()

    return (
        <nav className='flex items-center justify-between px-4 lg:px-20 py-7 fixed top-0 left-0 bg-transparent w-full'>
                <button type="button" className='text-primary font-bold flex items-center' onClick={() => router.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mb-1 mr-1">
                        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                    </svg>
                    <span>Back</span>
                </button>
                {pathname.startsWith('/login') && <div className='space-x-4'>
                    <Link className={pathname.startsWith('/login') ? 'bg-accent px-6 py-2 rounded-full font-bold text-base' : 'bg-primary/30 backdrop-blur-md px-6 py-2 rounded-full text-base'} href="/login">Login</Link>
                    <Link className={pathname.startsWith('/register') ? 'bg-accent px-6 py-2 rounded-full font-bold text-base' : 'bg-primary/30 backdrop-blur-md px-6 py-2 rounded-full text-base'} href="/register">Register</Link>
                </div>}
                {pathname.startsWith('/register') && <div className='space-x-4'>
                    <Link className={pathname.startsWith('/login') ? 'bg-accent px-6 py-2 rounded-full font-bold text-base' : 'bg-primary/30 backdrop-blur-md px-6 py-2 rounded-full text-base'} href="/login">Login</Link>
                    <Link className={pathname.startsWith('/register') ? 'bg-accent px-6 py-2 rounded-full font-bold text-base' : 'bg-primary/30 backdrop-blur-md px-6 py-2 rounded-full text-base'} href="/register">Register</Link>
                </div>}
            </nav>
    )
}

export default Authbar
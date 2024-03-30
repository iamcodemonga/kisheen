"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Profilebar from './Profilebar'
import { usePathname } from 'next/navigation'

const ProfileNav = () => {

    const [ visible, setVisible ] = useState<boolean>(false)

    const handleSidebar = () => {
        setVisible(prev => !prev)
    }

    return (
        <>
            <nav className='w-full flex justify-between lg:px-5 py-7 px-3 sticky top-0 left-0 bg-primary z-10'>
                <Link href={`/`} className='text-xl md:text-2xl font-extrabold text-accent'>Kisheen</Link>
                <div className='cursor-pointer lg:hidden' onClick={handleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-black">
                        <path fillRule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                </div>
            </nav>
            <Profilebar visible={visible} activate={handleSidebar} />
        </>
    )
}

export default ProfileNav
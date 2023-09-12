"use client"

import React, { FC, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Sidebar from './Sidebar'

interface Navprops {
    type?: string
}

const Navbar: FC<Navprops> = ({ type }) => {

    const [ open, setOpen ] = useState<boolean>(false)
    const pathname = usePathname()

    const handleSidebar = () => {
        setOpen(prev => !prev)
    }
    // console.log(pathname.startsWith('/'))
    // console.log(pathname)



    return (
        <>
            <nav className={type=="transparent" ? "px-3 py-4 lg:px-20 fixed top-0 left-0 z-10 w-full" : "px-3 py-8 lg:px-20 z-10 w-full bg-primary sticky top-0 left-0"}>
                <div className={type== 'transparent' ? 'flex items-center justify-between backdrop-blur-md bg-primary/20 py-6 px-6 rounded-2xl' : 'flex items-center justify-between'}>
                    <div>
                        <Link href={`/`} className='text-xl md:text-2xl font-extrabold text-accent'>TheKitcheen</Link>
                    </div>
                    <div className='flex justify-center items-center lg:hidden space-x-7'>
                        <Link href={`/tray`} className='relative cursor-pointer' >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={type == 'transparent' ? "w-6 h-6 text-black" : "w-6 h-6"}>
                                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                            </svg>
                            <div className='bg-green-600 absolute rounded-full top-0 left-4 text-xs whitespace-nowrap inline-block text-center text-primary font-bold' style={{ lineHeight: '1',clipPath: 'circle()', paddingTop: '8px', paddingLeft: '7px', paddingRight: '7px', paddingBottom: '7px'}}>13</div>
                        </Link>
                        <div className='cursor-pointer' onClick={handleSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={type == 'transparent' ? "w-8 h-8 text-black" : "w-10 h-10"}>
                                <path fillRule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className='hidden lg:block space-x-6'>
                        <Link href="/" className={pathname == '/' ? 'font-bold text-accent': 'hover:text-accent text-gray-950 font-bold text-sm'} scroll={false}>Home</Link>
                        <Link href="/menu" className={pathname.startsWith('/menu') ? 'font-bold text-accent'  : 'hover:text-accent text-gray-950 font-bold text-sm'} scroll={true}>Food Menu</Link>
                        <Link href="/potservices" className={pathname.startsWith('/potservices') ? 'font-bold text-accent'  : 'hover:text-accent text-gray-950 font-bold text-sm'} scroll={false}>Pot Services</Link>
                        <a href="mailto:codemonga@gmail.com" className='hover:text-accent text-gray-950 font-bold text-sm'>Contact</a>
                        <Link href="/about" className={pathname.startsWith('/about') ? 'font-bold text-accent'  : 'hover:text-accent text-gray-950 font-bold text-sm'} scroll={false}>About</Link>
                    </div>
                    <div className='hidden lg:block space-x-6'>
                        <Link href="/tray" className='text-gray-950 font-bold'><span className={pathname.startsWith('/tray') ? 'font-bold text-accent' : 'hover:text-accent text-sm'}>Food Cart</span><span className='px-2 pt-1 pb-1 bg-green-500 rounded-full text-sm'>13</span></Link>
                        <Link href="/login" className='hover:text-accent text-gray-950 font-bold text-sm'>Login</Link>
                        <Link href="/register" className='btn-link'>Register</Link>
                    </div>
                </div>
            </nav>
            <Sidebar open={open} handleClose={handleSidebar} />
        </>
    )
}

export default Navbar
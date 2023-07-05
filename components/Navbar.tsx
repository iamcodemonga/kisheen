import React, { FC } from 'react'
import Link from 'next/link'

interface Navprops {
    type?: string
}

const Navbar: FC<Navprops> = ({ type }) => {
    return (
            <nav className={type=="transparent" ? "flex items-center justify-between px-3 py-8 lg:px-20 fixed top-0 left-0 z-10 w-full backdrop-blur-md bg-primary/20" : "flex items-center justify-between px-3 py-8 lg:px-20 z-10 w-full bg-primary sticky top-0 left-0"}>
                <div>
                    <Link href={`/`} className='text-2xl font-extrabold text-accent'>FudPalace</Link>
                </div>
                <div className='flex justify-center items-center lg:hidden space-x-7'>
                    <div className='relative cursor-pointer' >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={type == 'transparent' ? "w-6 h-6 text-primary" : "w-6 h-6"}>
                            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        <div className='bg-green-600 absolute rounded-full top-0 left-4 text-xs whitespace-nowrap inline-block text-center text-primary' style={{ lineHeight: '1',clipPath: 'circle()', paddingTop: '8px', paddingLeft: '7px', paddingRight: '7px', paddingBottom: '7px'}}>13</div>
                    </div>
                    <div className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={type == 'transparent' ? "w-10 h-10 text-primary" : "w-10 h-10"}>
                            <path fillRule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className='hidden lg:block space-x-6'>
                    <Link href="/" className='font-bold text-accent'>Home</Link>
                    <Link href="/menu" className={type == 'transparent' ? 'hover:text-accent text-primary' : 'hover:text-accent'}>Food Menu</Link>
                    <Link href="/potservices" className={type == 'transparent' ? 'hover:text-accent text-primary' : 'hover:text-accent'}>Pot Services</Link>
                    <Link href="/contact" className={type == 'transparent' ? 'hover:text-accent text-primary' : 'hover:text-accent'}>Contact</Link>
                    <Link href="/about" className={type == 'transparent' ? 'hover:text-accent text-primary' : 'hover:text-accent'}>About</Link>
                </div>
                <div className='hidden lg:block space-x-6'>
                    <Link href="/login" className={type == 'transparent' ? 'hover:text-accent text-primary' : 'hover:text-accent'}>Login</Link>
                    <Link href="/register" className='bg-accent px-4 py-3 text-primary rounded-3xl font-bold hover:bg-accent/90'>Register</Link>
                </div>
            </nav>
    )
}

export default Navbar
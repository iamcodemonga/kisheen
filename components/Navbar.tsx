import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
            <nav className='flex items-center justify-between px-3 py-8 lg:px-20 fixed top-0 left-0 z-10 w-full backdrop-blur-md bg-primary/20'>
                <div>
                    <Link href={`/`} className='text-2xl font-extrabold text-accent'>Kitchen</Link>
                </div>
                <div className='flex justify-center items-center lg:hidden space-x-7'>
                    <div className='relative cursor-pointer' >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        <div className='bg-green-600 absolute rounded-full top-0 left-4 text-xs whitespace-nowrap inline-block text-center text-primary' style={{ lineHeight: '1',clipPath: 'circle()', paddingTop: '8px', paddingLeft: '7px', paddingRight: '7px', paddingBottom: '7px'}}>13</div>
                    </div>
                    <div className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-primary">
                            <path fillRule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className='hidden lg:block space-x-6'>
                    <Link href="/" className='font-bold text-accent'>Home</Link>
                    <Link href="/menu" className='hover:text-accent text-primary'>Food Menu</Link>
                    <Link href="/menu/pot" className='hover:text-accent text-primary'>Pot Services</Link>
                    <Link href="/contact" className='hover:text-accent text-primary'>Contact</Link>
                    <Link href="/about" className='hover:text-accent text-primary'>About</Link>
                </div>
                <div className='hidden lg:block space-x-6'>
                    <Link href="/login" className='hover:text-accent text-primary'>Login</Link>
                    <Link href="/register" className='bg-accent px-4 py-3 text-primary rounded-3xl font-bold hover:bg-accent/90'>Register</Link>
                </div>
            </nav>
    )
}

export default Navbar
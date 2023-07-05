import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <section className='hidden h-screen w-full bg-primary z-50 fixed top-0 left-0 fle items-center justify-center'>
            <div className='absolute top-0 right-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 mt-8 mr-3">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
            </div>
            <ul className='space-y-10'>
                <li><p className='text-center'><Link href="/" className='text-2xl font-extrabold text-accent'>Home</Link></p></li>
                <li><p className='text-center'><Link href="/menu" className='text-2xl'>Food Menu</Link></p></li>
                <li><p className='text-center'><Link href="/menu/pot" className='text-2xl'>Pot Services</Link></p></li>
                <li><p className='text-center'><Link href="/contact" className='text-2xl'>Contact</Link></p></li>
                <li><p className='text-center'><Link href="/about" className='text-2xl'>About</Link></p></li>
                <li><p className='text-center'><Link href="/login" className='text-2xl'>Login</Link></p></li>
                <li><p className='text-center mt-12'><Link href="/register" className='text-2xl px-8 py-4 bg-accent text-primary font-semibold rounded-full'>Register</Link></p></li>
            </ul>
        </section>
    )
}

export default Sidebar
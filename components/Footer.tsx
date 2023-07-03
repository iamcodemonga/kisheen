import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-gray-950 grid lg:grid-cols-4 justify-items-center content-center gap-y-10 gap-x-5 py-24 md:py-52 px-10 lg:px-16 overflow-hidden'>
            <div className=''>
                <h1 className='mt-0 mb-1 text-center font-extrabold text-accent'>Qitcheen</h1>
                <p className='text-center px-3 max-w-md text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, nulla deleniti! Amet beatae soluta repellendus</p>
            </div>

            <div className='hidde'>
                <ul className='space-y-2 hidden'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/menu">Menu</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </div>

            <div className='mt-6'>
                <ul className='space-y-2 text-gray-400'>
                    <li><Link href="/menu" className=' transition-all duration-300 hover:text-accent'>Twitter</Link></li>
                    <li><Link href="/contact" className=' transition-all duration-300 hover:text-accent'>LinkedIn</Link></li>
                    <li><Link href="/" className=' transition-all duration-300 hover:text-accent'>Instagram</Link></li>
                    <li><Link href="/about" className='transition-all duration-300 hover:text-accent'>Youtube</Link></li>
                </ul>
            </div>

            <div className='mt-6'>
                <ul className='space-y-2 text-gray-400'>
                    <li><Link href="/menu" className=' transition-all duration-300 hover:text-accent'>Terms of service</Link></li>
                    <li><Link href="/contact" className=' transition-all duration-300 hover:text-accent'>Privacy policy</Link></li>
                    <li><Link href="/about" className=' transition-all duration-300 hover:text-accent'>Company</Link></li>
                    <li><Link href="/about" className=' transition-all duration-300 hover:text-accent'>Meets the chefs</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
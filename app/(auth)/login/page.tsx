import Loginform from '@/components/forms/Loginform'
import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <section className='w-full h-screen relative overflow-x-hidden flex items-center justify-center'>
            <img className='w-full h-full object-cover' src="https://media.istockphoto.com/id/1280669372/photo/nigerian-egusi-soup-served-with-pounded-yam.jpg?b=1&s=612x612&w=0&k=20&c=YWC9ZNRbolUAojYEBtrO6u-Ul9prHrjp6AaDjI8sqbg=" alt="meal" />
            <div className='w-full h-full backdrop-blur-md md:backdrop-blur-none bg-black/80 absolute top-0 left-0'></div>
            <nav className='flex items-center justify-between px-4 lg:px-20 py-7 fixed top-0 left-0 bg-transparent w-full'>
                <a href="" className='text-primary font-bold'>Back</a>
                <div className='space-x-4'>
                    <Link className='bg-accent px-6 py-2 rounded-full font-bold' href="/login">Login</Link>
                    <Link className='bg-primary/30 backdrop-blur-md px-6 py-2 rounded-full font-bold' href="/register">Register</Link>
                </div>
            </nav>
            <Loginform />
        </section>
    )
}

export default Login
"use client"

import Authbar from '@/components/bars/Authbar'
import Loginform from '@/components/forms/Loginform'
import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <section className='w-full h-screen relative overflow-hidden flex items-center justify-center'>
            <img className='w-full h-full object-cover scale-150' src="https://ovenfresh.inventallianceco.com/wp-content/uploads/2023/03/AFANG-SOUP-2500.jpg" alt="meal" />
            <div className='w-full h-full backdrop-blur-md md:backdrop-blur-none bg-black/80 absolute top-0 left-0'></div>
            <Authbar />
            <Loginform />
        </section>
    )
}

export default Login
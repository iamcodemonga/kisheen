import React from 'react'
import Link from 'next/link'

const Registerform = () => {
    return (
        <form className='max-w-sm md:max-w-md px-6 pt-10 pb-6 md:bg-primary/20 md:backdrop-blur-lg absolute rounded-lg md:brightness-75 mt-16 md:mt-0'>
            <div>
                <h6 className='font-extrabold text-primary mb-3'><strong className='text-accent'>SIGN UP</strong> AND ENJOY <strong className='text-green-900'>50% DISCOUNT</strong> ON YOUR FIRST ORDER.</h6>
                <p className='text-primary'></p>
                <div className='flex flex-col mb-6'>
                    <label htmlFor="name" className='text-accent'>Name</label>
                    <input type="text" className='px-3 py-2 border-2 border-primary rounded-lg text-primary bg-transparent outline-none' name="name" id="name" placeholder='e.g john doe' />
                </div>
                <div className='flex flex-col mb-6'>
                    <label htmlFor="name" className='text-accent'>Email address</label>
                    <input type="email address" className='px-3 py-2 border-2 border-primary rounded-lg text-primary bg-transparent outline-none' name="name" id="name" placeholder='e.g johndoe@gmail.com' />
                </div>
                <div className='flex flex-col mb-8'>
                    <div className='flex items-center justify-between pr-2'>
                        <label htmlFor="name" className='text-accent'>Password</label>
                        <button type='button' className='text-primary'>show</button>
                    </div>
                    <input type="password" className='px-3 py-2 border-2 border-primary rounded-lg text-primary bg-transparent outline-none' name="name" id="name" placeholder='xxxxxxxxxxxxxx' />
                </div>
                <button type="submit" className='w-full bg-accent py-3 rounded-lg text-lg font-bold mb-6'>submit</button>
                <p className='text-primary'>By signing up, you have agreed to all our <Link className='text-accent font-bold' href='/register'>terms of service</Link></p>
            </div>
        </form>
    )
}

export default Registerform
import React from 'react'
import Link from 'next/link'

const Loginform = () => {
    return (
        <form className='max-w-sm md:max-w-md px-6 pb-6 pt-12 md:bg-primary/20 md:backdrop-blur-lg absolute rounded-lg brightness-75'>
            <div>
                <h6 className='font-extrabold text-accent'>WELCOME BACK!</h6>
                <p className='text-primary'></p>
                <div className='flex flex-col mb-6'>
                    <label htmlFor="name" className='text-accent'>Email address</label>
                    <input type="email" className='px-3 py-2 border-2 border-primary rounded-lg text-primary bg-transparent outline-none' name="name" id="name" placeholder='e.g johndoe@gmail.com' />
                </div>
                <div className='flex flex-col mb-8'>
                    <div className='flex items-center justify-between pr-2'>
                        <label htmlFor="name" className='text-accent'>Password</label>
                        <button type='button' className='text-primary'>show</button>
                    </div>
                    <input type="password" className='px-3 py-2 border-2 border-primary rounded-lg text-primary bg-transparent outline-none' name="name" id="name" placeholder='xxxxxxxxxxxxxx' />
                </div>
                <button type="submit" className='w-full bg-accent py-3 rounded-lg text-lg font-bold mb-6'>submit</button>
                <p className='text-primary'>Don't have an account? <Link className='text-accent font-bold' href='/register'>Create account now!</Link></p>
                <p className='text-primary'> <Link className=' font-bold rounded-full border-2 px-4 py-2 bg-primary text-black text-xs' href='/forgotpassword'>Forgot password?</Link></p>
            </div>
        </form>
    )
}

export default Loginform
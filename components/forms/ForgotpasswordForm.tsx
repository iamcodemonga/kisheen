import React from 'react'
import Link from 'next/link'

const ForgotpasswordForm = () => {
    return (
        <form className='max-w-sm md:max-w-md px-6 pb-6 pt-12 md:bg-primary/20 md:backdrop-blur-lg absolute rounded-lg brightness-75'>
            <div>
                <h6 className='font-extrabold text-accent'>FORGOT PASSWORD?</h6>
                <p className='text-primary/70 mt-3'>On receiving your email address, we will send a password reset link to you via E-mail!</p>
                <div className='flex flex-col mb-6'>
                    <label htmlFor="name" className='text-accent'>Email address</label>
                    <input type="email" className='px-3 py-2 border-2 border-primary rounded-lg text-primary bg-transparent outline-none' name="name" id="name" placeholder='e.g johndoe@gmail.com' />
                </div>
                <button type="submit" className='w-full bg-accent py-3 rounded-lg text-lg font-bold mb-6'>submit</button>
                <p className='text-primary'>Don't have an account? <Link className='text-accent font-bold' href='/register'>Create account here!</Link></p>
            </div>
        </form>
    )
}

export default ForgotpasswordForm
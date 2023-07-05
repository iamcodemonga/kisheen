import React from 'react'
import Link from 'next/link'

const Resetform = () => {
    return (
        <form className='max-w-sm md:max-w-md px-6 pb-6 pt-12 md:bg-primary/20 md:backdrop-blur-lg absolute rounded-lg brightness-75'>
            <div>
                <h6 className='font-extrabold text-accent'>RESET YOUR PASSWORD!</h6>
                <p className='text-primary/70 mt-3'>Always remember to keep your password private!</p>
                <div className='flex flex-col mb-8'>
                    <div className='flex items-center justify-between pr-2'>
                        <label htmlFor="new" className='text-accent'>New Password</label>
                        <button type='button' className='text-primary'>show</button>
                    </div>
                    <input type="password" className='px-3 py-2 border-2 border-primary rounded-lg text-primary bg-transparent outline-none' name="new" id="new" placeholder='xxxxxxxxxxxxxx' />
                </div>
                <div className='flex flex-col mb-8'>
                    <div className='flex items-center justify-between pr-2'>
                        <label htmlFor="confirm" className='text-accent'>Confirm Password</label>
                        <button type='button' className='text-primary'>show</button>
                    </div>
                    <input type="password" className='px-3 py-2 border-2 border-primary rounded-lg text-primary bg-transparent outline-none' name="confirm" id="confirm" placeholder='xxxxxxxxxxxxxx' />
                </div>
                <button type="submit" className='w-full bg-accent py-3 rounded-lg text-lg font-bold mb-6'>submit</button>
                <p className='text-primary'>Don't have an account? <Link className='text-accent font-bold' href='/register'>Create account now!</Link></p>
            </div>
        </form>
    )
}

export default Resetform
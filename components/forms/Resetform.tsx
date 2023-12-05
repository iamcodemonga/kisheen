import React from 'react'
import Link from 'next/link'

const Resetform = () => {
    return (
        <form className='max-w-sm md:max-w-md px-6 md:pt-14 md:pb-14 md:bg-primary/20 md:backdrop-blur-lg absolute rounded-lg md:brightness-75 mt-16 md:mt-0'>
            <div>
                <h6 className='font-extrabold text-primary text-base mb-5 leading-relaxed'><strong className='text-accent'>REMEMBER</strong> TO ALWAYS KEEP YOUR PASSWORD PRIVATE AT ALL TIME!</h6>
                <div className='flex flex-col mb-5'>
                    <div className='flex items-center justify-between pr-2'>
                        <label htmlFor="newpassword" className='text-white text-sm mb-1'>New password</label>
                        <button type='button' className='text-primary font-black'>show</button>
                    </div>
                    <input type="password" className='px-3 py-2 border-2 border-primary rounded-lg text-primary bg-transparent outline-none' name="newpassword" id="newpassword" placeholder='xxxxxxxxxxxxxx' />
                </div>
                <div className='flex flex-col mb-7'>
                    <div className='flex items-center justify-between pr-2'>
                        <label htmlFor="confirmpassword" className='text-white text-sm mb-1'>Confirm password</label>
                        <button type='button' className='text-primary font-black'>show</button>
                    </div>
                    <input type="password" className='px-3 py-2 border-2 border-primary rounded-lg text-primary bg-transparent outline-none' name="confirmpassword" id="confirmpassword" placeholder='xxxxxxxxxxxxxx' />
                </div>
                <button type="submit" className='w-full bg-accent py-3 rounded-lg text-lg font-bold mb-3'>submit</button>
                {/* <p className='text-primary text-xs text-end'>Forgot password? <Link className='text-accent font-bold' href='/forgotpassword'>click here</Link></p> */}
            </div>
        </form>
    )
}

export default Resetform
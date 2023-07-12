import React from 'react'

const Changepassword = () => {
    return (
        <div className='col-span-6 lg:col-span-5 min-w-full pb-28'>
            <h4 className='font-black mb-10 mt-5 lg:mt-0'>Change password</h4>
            <form action="" method="post" className='space-y-8 lg:max-w-full w-full '>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <label htmlFor="old" className='text-accent pb-2 ml-2'>Old password</label>
                        <button type="button" className='px-5'>show</button>
                    </div>
                    <input className='py-3 px-5 outline-none rounded-xl bg-gray-200' type="password" name="" id="old" placeholder='xxxxxxxxxx' />
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <label htmlFor="new" className='text-accent pb-2 ml-2'>New password</label>
                        <button type="button" className='px-5'>show</button>
                    </div>
                    <input className='py-3 px-5 outline-none rounded-xl bg-gray-200' type="password" name="" id="new" placeholder='xxxxxxxxxx' />
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <label htmlFor="confirm" className='text-accent pb-2 ml-2'>Confirm password</label>
                        <button type="button" className='px-5'>show</button>
                    </div>
                    <input className='py-3 px-5 outline-none rounded-xl bg-gray-200' type="password" name="" id="confirm" placeholder='xxxxxxxxxx' />
                </div>
                <div>
                    <button type="submit" className='bg-accent w-full pt-5 pb-4 font-bold rounded-xl text-xl'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Changepassword
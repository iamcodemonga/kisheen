import React from 'react'
import Link from 'next/link'

const Banner = () => {
    return (
        <header className='relative w-full overflow-hidden' style={{ height: '100vh'}}>
            <img src="https://media.istockphoto.com/id/1280669372/photo/nigerian-egusi-soup-served-with-pounded-yam.jpg?b=1&s=612x612&w=0&k=20&c=YWC9ZNRbolUAojYEBtrO6u-Ul9prHrjp6AaDjI8sqbg=" alt="" className='w-full h-full object-cover' />
            <div className='w-full h-full bg-black opacity-50 absolute top-0 left-0'></div>
            <div className='absolute bottom-0 left-0 max-w-2xl px-4 mb-32 lg:ml-20' >
                <h2 className='font-black text-primary'>Egusi soup with a touch of osusa leaf and stock fish</h2>
                <Link href='/meal/1' className='px-6 py-4 rounded-3xl bg-primary text-accent font-bold'>Order now</Link>
            </div>
        </header>
    )
}

export default Banner
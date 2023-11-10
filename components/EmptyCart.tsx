import React from 'react'
import Link from 'next/link'

const EmptyCart = () => {
    return (
        <section className='w-full h-80 border border-solid border-slate-300 flex justify-center items-center mb-7 lg:mb-0'>
            <div>
                <h2 className='text-2xl mb-5 text-center'>Your tray is empty!</h2>
                <p className='text-center'><Link href="/menu" className='py-3 px-5 bg-accent hover:bg-accent/90 text-black font-bold'>Food menu</Link></p>
            </div>
        </section>
    )
}

export default EmptyCart
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const EmptyCart = () => {
    return (
        <section className='w-full h-80 border border-solid border-slate-300 rounded-lg flex justify-center items-center mb-7 lg:mb-0 py-60'>
            <div>
                <Image src="/emptycart.svg" alt="order successful" width={80} height={80} className="object-cover block mx-auto mb-7" />
                <h5 className='text-lg mb-5 text-center font-light text-slate-500'>Your cart is empty!</h5>
                <p className='text-center'>
                    <Link href="/menu" className='py-3 px-5 bg-gray-900 hover:bg-gray-900/90 font-normal rounded-full text-xs text-primary'>Start shopping
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </Link>
                </p>
                {/* <p className='text-center'><Link href="/menu" className='py-3 px-5 bg-accent hover:bg-accent/90 text-black font-bold'>Food menu</Link></p> */}
            </div>
        </section>
    )
}

export default EmptyCart
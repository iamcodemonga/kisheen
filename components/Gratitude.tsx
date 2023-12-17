"use client"

import React from 'react'
import Link from 'next/link'

const Gratitude = ({ refno }: { refno: string }) => {
    return (
        <section className='h-screen w-full flex justify-center md:items-center xl:items-start'>
                <div className='max-w-3xl pt-10 xl:pt-16 px-2 md:px-10 xl:px-0'>
                    <div className='w-full flex justify-center mb-5 md:mb-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-36 h-36 md:w-48 md:h-48 text-green-600">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-black text-center mb-5'>Thanks for patronizing us!</h2>
                    <p className='text-center mb-7 text-gray-700'>We are thankful and highly motivated by your believe in us. Patiently await our processes as your order will be ready in the next 30 minutes. You can identity your order(s) with this reference number {refno && <strong className='px-3 py-1 rounded-lg bg-gray-200'>{refno}</strong>} which you can also find in your dashboard if you are registered with us. Thank you!</p>
                    <div className='flex justify-center'>
                        <Link className="w-48 py-2 font-bold bg-gray-900 hover:text-primary rounded-xl text-accent flex items-center justify-center" href={`/menu`} >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 mb-1">
                                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                            </svg>Back to menu
                        </Link>
                    </div>
                </div>
            </section>
    )
}

export default Gratitude
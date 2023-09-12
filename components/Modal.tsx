"use client"

import React, { FC, useState, useEffect } from 'react'
import Link from 'next/link'

interface options {
    type: string;
    discount: number;
    title?: string;
}

const Modal: FC<options> = ({ type, discount }) => {

    const [ show, setShow ] = useState<boolean>(false)

    const handleHide = () => {
        setShow(false)
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         setShow(true)
    //     }, 5000)
    // },[])

    return (
        <>
            {/* launch discount */}
            {type == 'launch' && <section className={show ? 'w-full h-full fixed bg-black/90 top-0 left-0 px-5 z-20 flex justify-center items-center' : 'hidden'}>
                <div className='bg-white min-w-full lg:min-w-0 lg:w-96 py-10 px-3 rounded-xl shadow-lg'>
                    <h1 className='text-center font-black text-2xl text-green-700 mt-5 uppercase font-nunito'>Launch discount!&#128640;</h1>
                    <div className='block'>
                        <img src="/eightypercent.jpg" alt="discount" className='h-40 object-cover mx-auto' />
                    </div>
                    <h3 className='text-center text-lg mt-5 mb-3 leading-relaxed'><strong className='font-black'>Hurry up!!!</strong> The first hundred(100) customers will get <strong className='font-bold text-green-700'>80%</strong> off! of any meal.</h3>
                    <div className='flex justify-end mt-10'>
                        <button className='mr-5 px-5 pt-2 pb-1 rounded-full font-bold bg-gray-800 hover:bg-gray-950 text-primary' onClick={handleHide}>Got it!&#128077;</button>
                    </div>
                </div>
            </section>}

            {/* Register discount */}
            {type == 'register' && <section className={show ? 'w-full h-full fixed bg-black/90 top-0 left-0 px-5 z-20 flex justify-center items-center' : 'hidden'}>
                <div className='bg-white min-w-full lg:min-w-0 lg:w-96 py-10 px-3 rounded-xl shadow-lg'>
                <h1 className='text-center font-black text-2xl text-green-700 my-5 uppercase font-nunito'>Signup discount!&#129309;</h1>
                    <div className='block'>
                        <img src="/50circle.png" alt="discount" className='h-40 object-cover mx-auto' />
                    </div>
                    <h3 className='text-center text-lg mt-8 mb-3 leading-relaxed'>
                        <Link href="/" className='text-accent font-bold underline'>Register today</Link> and enjoy a whooping <strong className='font-bold text-green-700'>50%</strong> discount on your first order!.
                    </h3>
                    <div className='flex justify-end mt-10'>
                        <button className='mr-5 px-5 pt-2 pb-1 rounded-full font-bold bg-gray-800 hover:bg-gray-950 text-primary' onClick={handleHide}>Got it!&#128077;</button>
                    </div>
                </div>
            </section>}

            {/* App discount */}
            {type == 'app' && <section className={show ? 'w-full h-full fixed bg-black/90 top-0 left-0 px-5 z-20 flex justify-center items-center' : 'hidden'}>
                <div className='bg-white min-w-full lg:min-w-0 lg:w-96 py-10 px-3 rounded-xl shadow-lg'>
                    <h1 className='text-center font-black text-2xl text-green-700 mt-5 uppercase font-nunito'>get the app!&#128241;</h1>
                    <div className='block'>
                        <img src="/50star.png" alt="discount" className='h-40 object-cover mx-auto' />
                    </div>
                    <h3 className='text-center text-lg mt-5 mb-3 leading-relaxed'>Download the app from <Link href="/" className='text-yellow-500 font-bold underline'>Google play</Link> or <Link href="/" className='text-blue-500 font-bold underline'>Apple store</Link> and get <strong className='font-bold text-green-700'>50%</strong> discount on your first order with the app!.</h3>
                    <div className='flex justify-end mt-10'>
                        <button className='mr-5 px-5 pt-2 pb-1 rounded-full font-bold bg-gray-800 hover:bg-gray-950 text-primary' onClick={handleHide}>Got it!&#128077;</button>
                    </div>
                </div>
            </section>}

            {/* seasonal discount */}
            {type == 'seasonal' && <section className={show ? 'w-full h-full fixed bg-black/90 top-0 left-0 px-5 z-20 flex justify-center items-center' : 'hidden'}>
                <div className='bg-white min-w-full lg:min-w-0 lg:w-96 py-10 px-3 rounded-xl shadow-lg'>
                    <h1 className='text-center font-black text-2xl text-green-700 my-5 uppercase font-nunito'>Happy new month!&#127873; </h1>
                    <div className='block'>
                        <img src="/20paper.png" alt="discount" className='h-40 object-cover mx-auto' />
                    </div>
                    <h3 className='text-center text-lg mt-8 mb-3 leading-relaxed'>Enjoy your new month with a juicy <strong className='font-bold text-green-700'>20%</strong> discount on your orders today!.</h3>
                    <div className='flex justify-end mt-10'>
                        <button className='mr-5 px-5 pt-2 pb-1 rounded-full font-bold bg-gray-800 hover:bg-gray-950 text-primary' onClick={handleHide}>Got it!&#128077;</button>
                    </div>
                </div>
            </section>}
        </>
    )
}

export default Modal
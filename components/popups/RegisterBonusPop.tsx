"use client"

import React, { useEffect, useState } from 'react'

type Props = {
    show?: boolean;
    loggedin: boolean;
}

const RegisterBonusPop = ({ loggedin }: Props) => {

    const [ show, setShow ] = useState(false);

    const handleModal = () => {
        if (!loggedin) {
            if (!localStorage.getItem("register")) {
                setTimeout(() => {
                    setShow(true)
                    localStorage.setItem("register", "yes")
                }, 7000)
            }
        }
    }

    useEffect(() => {
        handleModal()
    }, [])


    return (
        <section className={show ? 'w-full h-full fixed bg-black/90 top-0 left-0 px-5 z-20 flex justify-center items-center' : 'hidden'}>
            <div className='bg-white min-w-full lg:min-w-0 lg:w-96 py-10 px-3 rounded-xl shadow-lg'>
                <h1 className='text-center font-black text-2xl text-green-700 mt-5 mb-7 uppercase'>Register Discount! &#128640;</h1>
                <div className='block mx-auto'>
                    <div className='block mx-auto bg-green-700 w-48 py-4 rounded-full'>
                        <h5 className='text-4xl font-black text-center text-primary'>40% off</h5>
                    </div>
                </div>
                <h3 className='text-center text-lg mt-8 mb-3 leading-relaxed'>Enjoy a whooping <strong className='font-bold text-green-700'>40%</strong> discount on your first order when you sign up with us.</h3>
                <div className='flex justify-end mt-10'>
                    <button className='mr-5 px-5 pt-2 pb-2 rounded-full font-normal bg-gray-800 hover:bg-gray-950 text-primary' onClick={() => setShow(false)}>Got it! &#128077;</button>
                </div>
            </div>
        </section>
    )
}

export default RegisterBonusPop
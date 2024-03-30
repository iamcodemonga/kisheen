"use client"

import { playAudio } from '@/lib/graphcms'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import FormLoader from '../loaders/FormLoader'

type Props = {
    settings: {
        cart: any,
        maintenance: boolean,
        manualpay: boolean,
        cardpay: boolean,
    }
}

const SiteSettings = ({settings}: Props) => {

    const [ cart, setCart ] = useState(settings.cart)
    const [ maintenance, setMaintenance ] = useState(settings.maintenance)
    const [ manualpay, setManualpay ] = useState(settings.manualpay)
    const [ cardpay, setCardpay ] = useState(settings.cardpay)
    const [ loading, setLoading ] = useState(false)

    const handleCheck = async(key: string, value: any) => {
        if (key == "cart") {
            setCart(value)
        }

        if (key == "maintenance") {
            setMaintenance(value)
        }

        if (key == "cardpay") {
            setCardpay(value)
        }

        if (key == "manualpay") {
            setManualpay(value)
        }

        setLoading(true)
        try {
            const { data } = await axios.put(`${process.env.NEXT_PUBLIC_API_ROOT}/settings`, { cart: (key == "cart" ? value : cart), maintenance: (key == "maintenance" ? value : maintenance), cardpayment: (key == "cardpay" ? value : cardpay), manualpayment: (key == "manualpay" ? value :manualpay) })
            
            if (!data.error) {
                toast.success(`Settings updated successfully!`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setLoading(false)
                playAudio('/livechat.mp3')
                return;
            }

            toast.error(`Could not update settings!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setLoading(false)
            playAudio('/error.mp3')
            return;
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
        return;
    }

    return (
        <>
            <div className="border border-accent rounded-xl mb-10 py-10 lg:px-4">
                <div className='flex w-full justify-center'>
                    <form action="" onSubmit={(e) => {}} method="post" className='space-y-8 w-full rounded-lg py-4 pb-8'>
                        <h4 className='font-normal mb-5 mt-5 lg:mt-0 text-2xl text-center'>Site settings</h4>
                        <div className='flex w-full flex-col py-3 px-5 rounded-lg space-y-5'>
                            <div className='flex items-center justify-between'>
                                <label htmlFor="cart" className='text-accent text-base mb-1'>Enable cart</label>
                                <input type="checkbox" name="cart" id="cart" className='w-5 h-5 text-accent' checked={cart} onChange={(e) => handleCheck("cart" ,e.target.checked)} />
                            </div>
                            <div className='flex items-center justify-between'>
                                <label htmlFor="maintenance" className='text-accent text-base mb-1'>Maintainance</label>
                                <input type="checkbox" name="maintenance" id="maintenance" className='w-5 h-5 text-accent' checked={maintenance} onChange={(e) => handleCheck("maintenance" ,e.target.checked)} />
                            </div>
                            <div className='flex items-center justify-between'>
                                <label htmlFor="cardpay" className='text-accent text-base mb-1'>Card payment</label>
                                <input type="checkbox" name="cardpay" id="cardpay" className='w-5 h-5 text-accent' checked={cardpay} onChange={(e) => handleCheck("cardpay" ,e.target.checked)} />
                            </div>
                            <div className='flex items-center justify-between'>
                                <label htmlFor="manualpay" className='text-accent text-base mb-1'>Delivery payment</label>
                                <input type="checkbox" name="manualpay" id="manualpay" className='w-5 h-5 text-accent' checked={manualpay} onChange={(e) => handleCheck("manualpay" ,e.target.checked)} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {loading ? <FormLoader /> : null}
        </>
    )
}

export default SiteSettings
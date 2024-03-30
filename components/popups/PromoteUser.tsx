import { promote } from '@/actions';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import PromoteBtn from '../SubmitButtons/PromoteBtn';

type Props = {
    userid: number;
    visible: boolean;
    country: string;
    branch: string;
    page: number;
    setCountry: (value: string) => void;
    setBranch: (value: string) => void;
    hide: (value: boolean) => void;
}

const PromoteUser = ({ visible, page, country, setCountry, branch, userid, setBranch, hide }: Props) => {

    const handleClose = (event: any) => {
        if (event.target.id == "promotepopup") {
            // setCountry("nigeria")
            // setCity("AKS")
            hide(false)
        }
        return;
    }

    const handleStatus = async() => {
        const result = await promote({ position: "manager", country, city: branch, page, userid })
        if (result?.error) {
            toast.error(`Could not hire user`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }
        hide(false);
        return;
    }

    return (
        <section className={`w-full h-screen ${visible ? "fixed" : "hidden"} z-50 bg-gray-950/70 top-0 left-0 flex items-center justify-center` }id='promotepopup' onClick={(e) => handleClose(e)}>
            <form action={async() => handleStatus()} method="post" className='bg-primary w-72 md:w-96 pb-14 pt-10 px-5 rounded-lg'>
                <h4 className='font-medium mb-5 mt-5 lg:mt-0 text-2xl text-center'>Promote User</h4>
                <div className='flex flex-col bg-slate-200 py-3 px-5 rounded-lg mb-5'>
                    <label htmlFor="country" className='text-accent text-xs mb-1 ml-1'>Country</label>
                    <select name="" id="country" className='bg-transparent outline-none text-sm font-normal' value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="nigeria">Nigeria</option>
                        <option value="ghana">Ghana</option>
                        <option value="SA">South Africa</option>
                    </select>
                </div>
                <div className='flex flex-col bg-slate-200 py-3 px-5 rounded-lg mb-5'>
                    <label htmlFor="city" className='text-accent text-xs mb-1 ml-1'>State/City</label>
                    <select name="" id="city" className='bg-transparent outline-none text-sm font-normal' value={branch} onChange={(e) => setBranch(e.target.value)}>
                        <option value="AKS">Akwa Ibom</option>
                        <option value="PH">Port Harcourt</option>
                        <option value="enugu">Enugu</option>
                        <option value="lagos">Lagos</option>
                    </select>
                </div>
                <PromoteBtn />
            </form>
        </section>
    )
}

export default PromoteUser
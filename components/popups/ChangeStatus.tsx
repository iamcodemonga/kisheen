import { updateStatus } from '@/actions';
import React, { useState } from 'react'
import StatusUpdateBtn from '../SubmitButtons/StatusUpdate';

type Props = {
    visible: boolean;
    receipt: string;
    method: string;
    active: number;
    page: number;
    activate: (value: number) => void;
    hide: (value: boolean) => void;
}

const ChangeStatus = ({ visible, receipt, page, method, active, activate, hide }: Props) => {

    const handleClose = (event: any) => {
        if (event.target.id == "changestatuspopup") {
            hide(false)
        }
    }

    const handleStatus = async() => {
        const result = await updateStatus({ stage: active, page, receipt: receipt })
        if (result?.error) {
            console.log(result?.error)
            return;
        }
        hide(false);
        return;
    }

    return (
        <section className={`w-full h-screen ${visible ? "fixed" : "hidden"} z-50 bg-gray-950/70 top-0 left-0 flex items-center justify-center` }id='changestatuspopup' onClick={(e) => handleClose(e)}>
            <form action={async() => handleStatus()} method="post" className='bg-primary w-72 pb-10 pt-7 px-5 rounded-lg'>
                <div className='block mb-7'>
                    <button type="button" className='text-sm flex items-center text-red-600' onClick={() => hide(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>close
                    </button>
                </div>
                <label htmlFor="" className='text-xs mb-1 ml-1 text-gray-500'>Select status</label>
                <div className='bg-slate-200 rounded-lg px-2'>
                    <select name="" id="" className='bg-transparent outline-none text-sm my-3 w-full' value={active} onChange={(e) => activate(Number(e.target.value))}>
                        <option value={1} className=''>Processing</option>
                        <option value={2}>{method == "home" ? "Transporting" : "Ready"}</option>
                        <option value={3}>Delivered</option>
                    </select>
                </div>
                <StatusUpdateBtn />
            </form>
        </section>
    )
}

export default ChangeStatus
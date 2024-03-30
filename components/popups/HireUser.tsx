import React, { useState } from 'react'
import HireUserBtn from '../SubmitButtons/HireUserBtn';
import { hire } from '@/actions';
import { toast } from 'react-toastify';

type Props = {
    userid: number;
    visible: boolean;
    page: number;
    activate?: (value: number) => void;
    hide: (value: boolean) => void;
}

const HireUser = ({ visible, page, userid, activate, hide }: Props) => {

    const [ position, setPosition ] = useState<string>("manager");
    const [ country, setCountry ] = useState<string>("nigeria");
    const [ city, setCity ] = useState<string>("AKS");
    // const [ district, setDistrict ] = useState<string>("");

    const handleClose = (event: any) => {
        if (event.target.id == "hirepopup") {
            hide(false)
        }
        return;
    }

    const handleStatus = async() => {
        const result = await hire({ position, country, city, page, userid })
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
        <section className={`w-full h-screen ${visible ? "fixed" : "hidden"} z-50 bg-gray-950/70 top-0 left-0 flex items-center justify-center` }id='hirepopup' onClick={(e) => handleClose(e)}>
            <form action={async() => handleStatus()} method="post" className='bg-primary w-72 md:w-96 pb-14 pt-10 px-5 rounded-lg'>
                <h4 className='font-medium mb-5 mt-5 lg:mt-0 text-2xl text-center'>Hire User</h4>
                <div className='flex flex-col bg-slate-200 py-3 px-5 rounded-lg mb-5'>
                    <label htmlFor="country" className='text-accent text-xs mb-1 ml-1'>Position</label>
                    <select name="" id="country" className='bg-transparent outline-none text-sm font-normal' value={position} onChange={(e) => setPosition(e.target.value)}>
                        <option value="manager">manager</option>
                        <option value="agent">agent</option>
                    </select>
                </div>
                <div className='flex flex-col bg-slate-200 py-3 px-5 rounded-lg mb-5'>
                    <label htmlFor="gender" className='text-accent text-xs mb-1 ml-1'>Country</label>
                    <select name="" id="gender" className='bg-transparent outline-none text-sm font-normal' value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="nigeria">Nigeria</option>
                        <option value="ghana">Ghana</option>
                        <option value="SA">South Africa</option>
                    </select>
                </div>
                <div className='flex flex-col bg-slate-200 py-3 px-5 rounded-lg mb-5'>
                    <label htmlFor="gender" className='text-accent text-xs mb-1 ml-1'>State/City</label>
                    <select name="" id="gender" className='bg-transparent outline-none text-sm font-normal' value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value="AKS">Akwa Ibom</option>
                        <option value="PH">Port Harcourt</option>
                        <option value="enugu">Enugu</option>
                        <option value="lagos">Lagos</option>
                    </select>
                </div>
                <HireUserBtn />
                {/* <div className='flex flex-col bg-slate-200 py-3 px-5 rounded-lg'>
                    <label htmlFor="gender" className='text-accent text-xs mb-2 ml-1'>Area/District</label>
                    <select name="" id="gender" className='bg-transparent outline-none text-sm font-normal' value={district} onChange={(e) => setDistrict(e.target.value)}>
                        <option value="districtA">districtA</option>
                        <option value="districtB">districtB</option>
                    </select>
                </div> */}
                {/* <StatusUpdateBtn /> */}
            </form>
        </section>
    )
}

export default HireUser
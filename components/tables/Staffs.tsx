"use client"

import { navigateStaffs, sack } from '@/actions';
import React, { useState } from 'react'
import PrevBtn from '../SubmitButtons/Prev';
import NextBtn from '../SubmitButtons/Next';
import { toast } from 'react-toastify';
import PromoteUser from '../popups/PromoteUser';

type Props =  {
    page: number;
    tableCount?: number;
    prev?: boolean;
    next?: boolean;
    admin: {
        role: string,
        country: string,
        city: string,
        district: string | null
    }
    staffs: Array<{
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        country: string,
        city: string,
        district?: string
        role: string,
        joined: string
    }>
}

const StaffTable = ({ staffs, page, prev, next, admin, tableCount }: Props) => {
    const [ visible, setVisible ] = useState<boolean>(false)
    const [customerid, setCustomerId] = useState<number>(0)
    const [country, setCountry] = useState<string>("")
    const [branch, setBranch] = useState<string>("")

    const handlePrev = async() => {
        if (!prev) {
            return;
        }
        await navigateStaffs({ page, direction: "back" });
        return;
    }

    const handleNext = async() => {
        if (!next) {
            return;
        }
        await navigateStaffs({ page, direction: "front" });
        return;
    }

    const handleSack = async(id: number) => {
        console.log(page)
        const result = await sack({ page, userid: id });
        if (result?.error) {
            toast.error(result.error, {
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
        return;
    }

    const handlePopup = async(id: number, nationale: string, state: string) => {
        if (visible) {
            setCustomerId(0)
            setVisible(false)
        } else {
            setCustomerId(id)
            setCountry(nationale)
            setBranch(state)
            setVisible(true)
        }
        return;
    }

    return (
        <>
            <section className='my-7 border border-accent rounded-2xl pt-10 pb-5 px-5'>
                <div className='lg:flex justify-between items-center mb-5'>
                    <h3 className='text-2xl font-normal ml-3 mb-5 lg:mb-0'>All Staffs</h3>
                    <input type="text" name="filter" id="filter" className='bg-transparent px-3 py-2 rounded-lg outline-none w-full lg:w-80 border border-accent placeholder:font-light' placeholder='search order' value={''} />
                </div>
                <div className='overflow-x-auto admin-table'>
                    <table className='table-auto w-full'>
                        <thead className=''>
                            <tr className="">
                                <th className='p-3 whitespace-nowrap text-sm'>S/N</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Name</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Email</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Branch</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Role</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Registered</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffs.length > 0 ? staffs.map((staff, index) => <tr className='border-t border-accent' key={staff.id}>
                                <td className='whitespace-nowrap p-3 text-center'>{index+1}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{staff.firstname} {staff.lastname}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{staff.email}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{staff.district ? `${staff.district},` : null} {staff.city}, {staff.country}</td>
                                <td className='whitespace-nowrap p-3 text-center'>
                                    {staff.role == "manager" ? <span className='bg-green-200/80 text-xs rounded-md font-bold py-1 px-3 text-green-700'>Manager</span> : staff.role == "agent" ? <span className='bg-yellow-200/80 text-xs rounded-md font-bold py-1 px-3 text-yellow-700'>Agent</span> : null}
                                </td>
                                <td className='whitespace-nowrap p-3 text-center'>{staff.joined}</td>
                                <td className='whitespace-nowrap p-3 text-center flex items-center justify-center mt-2'>
                                    {staff.role == "agent" ? admin.role == "board" ? <span className='bg-blue-500 text-xs rounded-md font-bold pt-2 pb-2 px-3 text-primary flex cursor-pointer mr-3' onClick={() => handlePopup(staff.id, staff.country, staff.city)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mt-[1px] mr-1">
                                            <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                            <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                                        </svg>Promote
                                    </span> : null : null}
                                    <form action={async() => handleSack(staff.id)} >
                                        <button type='submit' className='bg-red-500 text-xs rounded-md font-bold pt-2 pb-2 px-3 text-primary flex cursor-pointer mr-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mt-[1px] mr-1">
                                                <path d="M10.375 2.25a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25ZM10.375 12a7.125 7.125 0 0 0-7.124 7.247.75.75 0 0 0 .363.63 13.067 13.067 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12ZM16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" />
                                            </svg>Fire
                                        </button>
                                    </form>
                                </td>
                            </tr>) : null}
                        </tbody>
                    </table>
                </div>
                <div className='hidden justify-center mt-7'>
                    <button type="button" className='shadow-gray-500 shadow-md ml-3 flex items-center mb-5 rounded-full py-2 px-7  hover:bg-transparent hover:text-black hover:border-gray-300 border-accent bg-accent text-primary font-bold text-sm'>Load More</button>
                </div>
                <div className='lg:flex items-center justify-between mt-7'>
                    <p className={`ml-3 text-gray-400 font-normal ${((page-1)*10) > (tableCount as number) ? "opacity-0" : "opacity-100"}`}>showing {page == 1 ? (tableCount as number) > 0 ? page : 0 : (page-1)*10+1 } to {((tableCount as number) - (page*10)) > 0 ? (10*page) : tableCount} of {tableCount} results</p>
                        {staffs.length > 0 ? <div className=' flex items-center space-x-3'>
                            {prev ? <form action={async () => { await handlePrev() }} method="post">
                                <PrevBtn />
                            </form> : null}
                            {next ? <form action={async () => { await handleNext() }} method="post">
                                <NextBtn />
                            </form> : null}
                        </div> : null}
                    </div>
            </section>
            <PromoteUser visible={visible} hide={setVisible} page={page} userid={customerid} country={country} branch={branch} setCountry={setCountry} setBranch={setBranch} />
        </>
    )
}

export default StaffTable
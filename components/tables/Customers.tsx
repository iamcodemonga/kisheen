"use client"

import React, { useState } from 'react'
import PrevBtn from '../SubmitButtons/Prev';
import NextBtn from '../SubmitButtons/Next';
import HireUser from '../popups/HireUser';
import { hire, navigateCustomers } from '@/actions';
import { toast } from 'react-toastify';

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
    customers: Array<{
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        role: string,
        joined: string
    }>
}

const CustomersTable = ({ customers, page, prev, next, admin, tableCount }: Props) => {
    const [ visible, setVisible ] = useState<boolean>(false)
    const [customerid, setCustomerId] = useState<number>(0)

    const handlePrev = async() => {
        if (!prev) {
            return;
        }
        await navigateCustomers({ page, direction: "back" });
        return;
    }

    const handleNext = async() => {
        if (!next) {
            return;
        }
        await navigateCustomers({ page, direction: "front" });
        return;
    }

    const handlePopup = async(id: number) => {
        if (visible) {
            setVisible(false)
        } else {
            setCustomerId(id)
            setVisible(true)
        }
        return;
    }

    const handleStatus = async({ position, country, city, page, userid }: { position: string, country: string, city: string, page: number, userid: number }) => {
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
        setVisible(false)
        return;
    }

    return (
        <>
            <section className='my-7 border border-accent rounded-2xl pt-10 pb-5 px-5'>
                <div className='lg:flex justify-between items-center mb-5'>
                    <h3 className='text-2xl font-normal ml-3 mb-5 lg:mb-0'>All Customers</h3>
                    <input type="text" name="filter" id="filter" className='bg-transparent px-3 py-2 rounded-lg outline-none w-full lg:w-80 border border-accent placeholder:font-light' placeholder='search order' value={''} />
                </div>
                <div className='overflow-x-auto admin-table'>
                    <table className='table-auto w-full'>
                        <thead className=''>
                            <tr className="">
                                <th className='p-3 whitespace-nowrap text-sm'>S/N</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Name</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Contact</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Registered</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.length > 0 ? customers.map((customer, index: number) => <tr className='border-t border-accent' key={customer.id}>
                                <td className='whitespace-nowrap p-3 text-center font-normal'>{index+1}</td>
                                <td className='whitespace-nowrap p-3 text-center font-normal'>{customer.firstname} {customer.lastname}</td>
                                <td className='whitespace-nowrap p-3 text-center font-normal'>{customer.email}</td>
                                <td className='whitespace-nowrap p-3 text-center font-normal'>{customer.joined}</td>
                                <td className='whitespace-nowrap p-3 text-center flex items-center justify-center mt-2 w-full'>
                                    {admin.role == "board" ? <span className='bg-green-500 text-xs rounded-md pt-2 pb-2 px-3 text-primary cursor-pointer mr-3 flex font-normal' onClick={() => handlePopup(customer.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mt-[1px] mr-1">
                                            <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                            <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                                        </svg>Employ
                                    </span> : admin.role == "manager" ? <form action={async() => handleStatus({ position: "agent", country: admin.country, city: admin.city, page, userid: customer.id })} method='post'>
                                        <button type='submit' className='bg-green-500 text-xs rounded-md pt-2 pb-2 px-3 text-primary cursor-pointer mr-3 flex font-normal'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mt-[1px] mr-1">
                                                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                                            </svg>Employ
                                        </button>
                                    </form> : null}
                                </td>
                            </tr> ) : null}              
                        </tbody>
                    </table>
                </div>
                <div className='lg:flex items-center justify-between mt-7'>
                    <p className={`ml-3 text-gray-400 font-normal ${((page-1)*10) > (tableCount as number) ? "opacity-0" : "opacity-100"}`}>showing {page == 1 ? (tableCount as number) > 0 ? page : 0 : (page-1)*10+1 } to {((tableCount as number) - (page*10)) > 0 ? (10*page) : tableCount} of {tableCount} results</p>
                    {customers.length > 0 ? <div className=' flex items-center space-x-3'>
                        {prev ? <form action={async () => { await handlePrev() }} method="post">
                            <PrevBtn />
                        </form> : null}
                        {next ? <form action={async () => { await handleNext() }} method="post">
                            <NextBtn />
                        </form> : null}
                    </div> : null}
                </div>
            </section>
            <HireUser visible={visible} hide={setVisible} page={page} userid={customerid} />
        </>
    )
}

export default CustomersTable
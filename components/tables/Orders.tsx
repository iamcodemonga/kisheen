"use client"

import React, { useRef, useState } from 'react'
import ChangeStatus from '../popups/ChangeStatus';
import { navigateOrders, print, refreshOrders } from '@/actions';
import FormLoader from '../loaders/FormLoader';
import NextBtn from '../SubmitButtons/Next';
import PrevBtn from '../SubmitButtons/Prev';
import RefreshBtn from '../SubmitButtons/RefreshBtn';
import Printable from '../admin/Printable';
import { useReactToPrint } from 'react-to-print';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

type Props =  {
    recent: boolean;
    page: number;
    tableCount?: number;
    prev?: boolean;
    next?: boolean;
    orders: Array<{
        id: number,
        receipt: string,
        customerid: number,
        mealid: string,
        photo: string,
        title: string,
        meat: string,
        combo: string,
        type: string,
        method: string,
        itemcount: number,
        quantity: number,
        size: string | null,
        amount: number,
        country: string,
        city: string | null,
        district: string,
        address: string,
        tel: string,
        prepaid: boolean,
        stage: number,
        firstname: string,
        lastname: string,
        email: string,
        date_ordered: string | null
    }>;
    orderstoprint: Array<{
        id: number,
        receipt: string,
        customerid: number,
        mealid: string,
        photo: string,
        title: string,
        meat: string,
        combo: string,
        type: string,
        method: string,
        itemcount: number,
        quantity: number,
        size: string | null,
        amount: number,
        country: string,
        city: string | null,
        district: string,
        address: string,
        tel: string,
        prepaid: boolean,
        stage: number,
        firstname: string,
        lastname: string,
        email: string,
        date_ordered: string | null
    }>;
}

const OrdersTable = ({ recent, orders, page, prev, next, tableCount, orderstoprint }: Props) => {

    const [ visible, setVisible ] = useState(false)
    const [ receipt, setReceipt ] = useState("")
    const [ active, setActive ] = useState(0)
    const [ method, setMethod ] = useState("shop")
    const router = useRouter();
    const printRef = useRef<HTMLDivElement>(null)

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: "Customer orders",
        onBeforePrint: () => console.log("before printing..."),
        onAfterPrint: () => handleUpdatePrinted(),
        removeAfterPrint: false,
      });

      const handleUpdatePrinted = async() => {
        const { data } = await axios.put(`${process.env.NEXT_PUBLIC_API_ROOT}/orders/print`, { items: orderstoprint })
        if (data.error) {
            toast.error("An error occured", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.success("Print was successful", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        router.refresh()
        return;
      }

    const handlePrev = async() => {
        if (!prev) {
            return;
        }
        await navigateOrders({ page, direction: "back" });
        return;
    }

    const handleNext = async() => {
        if (!next) {
            return;
        }
        await navigateOrders({ page, direction: "front" });
        return;
    }

    const handleRefresh = async() => {
        await refreshOrders();
        return;
    }

    const handlePopup = async(id: string, ordertype: string, stat: number) => {
        if (visible) {
            setVisible(false)
        } else {
            setReceipt(id)
            setActive(stat)
            setMethod(ordertype)
            setVisible(true)
        }
    }

    return (
        <>
            <section className='my-7 border border-accent rounded-2xl pt-10 pb-5 px-5'>
                <div className='flex items-center'>
                    {!recent ? <form action={async() => await handleRefresh()} method='post'><RefreshBtn /></form>  : null}
                    <button type="button" className='ml-4 flex items-center mb-5 rounded-full py-[8px] px-5 border-blue-700 bg-blue-700 text-primary font-normal text-xs hover:bg-blue-600' onClick={() => handlePrint()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1 mb-[1px]">
                            <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                            <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                        </svg>Print
                    </button>
                </div>
                <div className='lg:flex justify-between items-center mb-5'>
                    <h3 className='text-2xl font-normal ml-3 mb-5 lg:mb-0'>{recent ? "Recent Orders" : "All Orders"}</h3>
                    <input type="text" name="filter" id="filter" className='bg-transparent px-3 py-2 rounded-lg outline-none w-full lg:w-80 border border-accent placeholder:font-light' placeholder='search order' value={''} />
                </div>
                <div className='overflow-x-auto admin-table'>
                    <table className='table-auto w-full'>
                        <thead className=''>
                            <tr className="">
                                <th className='p-3 whitespace-nowrap text-sm'>S/N</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Refno</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Customer</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Contact</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Order</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Service</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Address</th>
                                {/* <th className='p-3 whitespace-nowrap text-sm'>Home delivery</th> */}
                                <th className='p-3 whitespace-nowrap text-sm'>In-cart</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Quantity</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Pot Size</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Prepaid</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Amount</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Status</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? orders.map((order, index) => <tr className='border-t border-accent' key={order.id}>
                                <td className='whitespace-nowrap p-3 text-center'>{index+1}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{order.receipt}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{`${order.firstname} ${order.lastname}`}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{`${order.email}, ${order.tel}`}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{`${order.title} with ${order.meat} and ${order.combo}`}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{order.type == "casual/special" ? <span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700'>Regular</span> : order.type == "pot" ? <span className='bg-purple-200/80 text-xs rounded-md font-bold py-1 px-3 text-purple-700'>Full Pot</span> : order.type == "casual" ? <span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700'>Casual</span> : order.type == "special" ? <span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700'>Special</span> : order.type == "chops" ? <span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700'>Chops</span> : null}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{order.district} - {order.address}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{order.itemcount}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{order.quantity}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{order.size ? order.size : "-"}</td>
                                <td className='whitespace-nowrap p-3 flex justify-center'>
                                    {order.prepaid ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                        </svg>
                                    }
                                </td>
                                <td className='whitespace-nowrap p-3 text-center'>&#8358;{order.amount.toLocaleString()}</td>
                                <td className='whitespace-nowrap p-3 text-center'>
                                    {order.method == "home" ?
                                        order.stage == 1 ? <span className='bg-red-200/30 text-xs rounded-md py-1 px-3 text-red-500'>Processing</span> : order.stage == 2 ? <span className='bg-yellow-200/80 text-xs rounded-md py-1 px-3 text-yellow-700'>Transporting</span> : <span className='bg-green-200/80 text-xs rounded-md py-1 px-3 text-green-700'>Delivered</span>
                                    : null}
                                    {/* <span className='bg-green-200/80 text-xs rounded-md font-bold py-1 px-3 text-green-700 hidden'>Delivered</span>
                                    <span className='bg-yellow-200/80 text-xs rounded-md font-bold py-1 px-3 text-yellow-700 hidden'>Ready</span> */}
                                </td>
                                <td className='whitespace-nowrap p-3 text-center flex items-center mt-2'>
                                    <span className='bg-blue-500 text-xs rounded-md pt-2 pb-1 px-3 text-primary cursor-pointer mr-3 hidden'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1 mt-[1px]">
                                            <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                                            <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                                        </svg>Invoice
                                    </span>
                                    <span className={`bg-gray-600 text-xs rounded-md pt-2 pb-1 px-3 text-primary flex cursor-pointer mr-3`} onClick={() => handlePopup(order.receipt, order.method, order.stage)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1 mt-[1.5px]">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                        </svg>Status
                                    </span>
                                    <div className='border border-accent rounded-lg px-2 hidden'>
                                        <select name="" id="" className='bg-transparent outline-none text-xs my-0'>
                                            <option value="pending" className=''>Pending</option>
                                            <option value="ready">Ready</option>
                                            <option value="ready">Shipping</option>
                                            <option value="delivered">Delivered</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>) : null}
                            <tr className='border-t border-accent hidden'>
                                <td className='whitespace-nowrap p-3 text-center'>1</td>
                                <td className='whitespace-nowrap p-3 text-center'>1687392489</td>
                                <td className='whitespace-nowrap p-3 text-center'>Emmanuel Ufot</td>
                                <td className='whitespace-nowrap p-3 text-center'>codemonga@gmail.com, 07066340180</td>
                                <td className='whitespace-nowrap p-3 text-center'>Afang soup, beef, garri</td>
                                <td className='whitespace-nowrap p-3 text-center'><span className='bg-purple-200/80 text-xs rounded-md font-bold py-1 px-3 text-purple-700 hidden'>Full Pot</span><span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700'>Regular</span></td>
                                <td className='whitespace-nowrap p-3 text-center'>Enugu east - coal city university</td>
                                <td className='whitespace-nowrap p-3 text-center'>0</td>
                                <td className='whitespace-nowrap p-3 text-center'>3</td>
                                <td className='whitespace-nowrap p-3 flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500 hidden">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                </td>
                                <td className='whitespace-nowrap p-3 text-center'>&#8358;76,300</td>
                                <td className='whitespace-nowrap p-3 text-center'><span className='bg-red-200/80 text-xs rounded-md font-bold py-1 px-3 text-red-500'>Pending</span><span className='bg-green-200/80 text-xs rounded-md font-bold py-1 px-3 text-green-700 hidden'>Delivered</span><span className='bg-yellow-200/80 text-xs rounded-md font-bold py-1 px-3 text-yellow-700 hidden'>Ready</span></td>
                                <td className='whitespace-nowrap p-3 text-center flex items-center mt-2'>
                                    <span className='bg-blue-500 text-xs rounded-md font-bold pt-2 pb-1 px-3 text-primary flex cursor-pointer mr-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mb-1 mr-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>View
                                    </span>
                                    <select name="" id="" className='bg-transparent border-2 border-gray-200 px-3 py-2 rounded-lg outline-none w-32 text-sm'>
                                        <option value="pending" className=''>Pending</option>
                                        <option value="ready">Ready</option>
                                        <option value="ready">Shipping</option>
                                        <option value="delivered">Delivered</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className='border-t border-accent hidden'>
                                <td className='whitespace-nowrap p-3 text-center'>2</td>
                                <td className='whitespace-nowrap p-3 text-center'>1687392489</td>
                                <td className='whitespace-nowrap p-3 text-center'>Emmanuel Ufot</td>
                                <td className='whitespace-nowrap p-3 text-center'>codemonga@gmail.com, 07066340180</td>
                                <td className='whitespace-nowrap p-3 text-center'>Afang soup, beef, garri</td>
                                <td className='whitespace-nowrap p-3 text-center'><span className='bg-purple-200/80 text-xs rounded-md font-bold py-1 px-3 text-purple-700'>Full Pot</span><span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700 hidden'>Regular</span></td>
                                <td className='whitespace-nowrap p-3 text-center'>Enugu east - coal city university</td>
                                {/* <td className='whitespace-nowrap p-3 flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500 hidden">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500 hidde">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                </td> */}
                                <td className='whitespace-nowrap p-3 text-center'>0</td>
                                <td className='whitespace-nowrap p-3 text-center'>3</td>
                                <td className='whitespace-nowrap p-3 flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500 hidde">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500 hidden">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                </td>
                                <td className='whitespace-nowrap p-3 text-center'>&#8358;76,300</td>
                                <td className='whitespace-nowrap p-3 text-center'><span className='bg-red-200/80 text-xs rounded-md font-bold py-1 px-3 text-red-500 hidden'>Pending</span><span className='bg-green-200/80 text-xs rounded-md font-bold py-1 px-3 text-green-700 hidden'>Delivered</span><span className='bg-yellow-200/80 text-xs rounded-md font-bold py-1 px-3 text-yellow-700'>Ready</span></td>
                                <td className='whitespace-nowrap p-3 text-center flex items-center mt-2'>
                                    <span className='bg-blue-500 text-xs rounded-md font-bold pt-2 pb-1 px-3 text-primary flex cursor-pointer mr-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mb-1 mr-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>View
                                    </span>
                                    <select name="" id="" className='bg-transparent border-2 border-gray-200 px-3 py-2 rounded-lg outline-none w-32 text-sm'>
                                        <option value="pending" className=''>Pending</option>
                                        <option value="ready">Ready</option>
                                        <option value="ready">Shipping</option>
                                        <option value="delivered">Delivered</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className='border-t border-accent hidden'>
                                <td className='whitespace-nowrap p-3 text-center'>3</td>
                                <td className='whitespace-nowrap p-3 text-center'>1687392489</td>
                                <td className='whitespace-nowrap p-3 text-center'>Emmanuel Ufot</td>
                                <td className='whitespace-nowrap p-3 text-center'>codemonga@gmail.com, 07066340180</td>
                                <td className='whitespace-nowrap p-3 text-center'>Afang soup, beef, garri</td>
                                <td className='whitespace-nowrap p-3 text-center'><span className='bg-purple-200/80 text-xs rounded-md font-bold py-1 px-3 text-purple-700 hidden'>Full Pot</span><span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700'>Regular</span></td>
                                <td className='whitespace-nowrap p-3 text-center'>Enugu east - coal city university</td>
                                {/* <td className='whitespace-nowrap p-3 flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500 hidde">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500 hidden">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                </td> */}
                                <td className='whitespace-nowrap p-3 text-center'>0</td>
                                <td className='whitespace-nowrap p-3 text-center'>3</td>
                                <td className='whitespace-nowrap p-3 flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500 hidden">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                </td>
                                <td className='whitespace-nowrap p-3 text-center'>&#8358;76,300</td>
                                <td className='whitespace-nowrap p-3 text-center'><span className='bg-red-200/80 text-xs rounded-md font-bold py-1 px-3 text-red-500 hidden'>Pending</span><span className='bg-green-200/80 text-xs rounded-md font-bold py-1 px-3 text-green-700'>Delivered</span><span className='bg-yellow-200/80 text-xs rounded-md font-bold py-1 px-3 text-yellow-700 hidden'>Ready</span></td>
                                <td className='whitespace-nowrap p-3 text-center flex items-center mt-2'>
                                    <span className='bg-blue-500 text-xs rounded-md font-bold pt-2 pb-1 px-3 text-primary flex cursor-pointer mr-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mb-1 mr-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>View
                                    </span>
                                    <select name="" id="" className='bg-transparent border-2 border-gray-200 px-3 py-2 rounded-lg outline-none w-32 text-sm'>
                                        <option value="pending" className=''>Pending</option>
                                        <option value="ready">Ready</option>
                                        <option value="ready">Shipping</option>
                                        <option value="delivered">Delivered</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='hidden justify-center mt-7'>
                    <button type="button" className='shadow-gray-500 shadow-md ml-3 flex items-center mb-5 rounded-full py-2 px-7  hover:bg-transparent hover:text-black hover:border-gray-300 border-accent bg-accent text-primary font-bold text-sm'>Load More</button>
                </div>
                <div className='lg:flex items-center justify-between mt-7'>
                    <p className={`ml-3 text-gray-400 font-normal ${((page-1)*10) > (tableCount as number) ? "opacity-0" : "opacity-100"}`}>showing {page == 1 ? (tableCount as number) > 0 ? page : 0 : (page-1)*10+1 } to {((tableCount as number) - (page*10)) > 0 ? (10*page) : tableCount} of {tableCount} results</p>
                    {!recent ? orders.length > 0 ? <div className=' flex items-center space-x-3'>
                        {prev ? <form action={async () => { await handlePrev() }} method="post">
                            <PrevBtn />
                        </form> : null}
                        {next ? <form action={async () => { await handleNext() }} method="post">
                            <NextBtn />
                        </form> : null}
                    </div> : null : null}
                    {/* <div className=' flex items-center space-x-3'>
                        <button type="button" className='ml-3 flex items-center mb-5 rounded-full py-2 px-7 hover:border-primary bg-gray-800 font-normal text-sm text-primary hover:bg-gray-800/90'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>Previous
                        </button>
                        <button type="button" className='ml-3 flex items-center mb-5 rounded-full py-2 px-7 text-primary font-normal text-sm bg-accent hover:bg-accent/90'>Next
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div> */}
                </div>
            </section>
            <ChangeStatus visible={visible} activate={setActive} hide={setVisible} receipt={receipt} method={method} active={active} page={page} />
            <div className='hidden'>
                <div ref={printRef}>
                    <Printable orderstoprint={orderstoprint} />
                </div>
            </div>
        </>
    )
}

export default OrdersTable
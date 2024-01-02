"use client"

import BarChart from '@/components/charts/BarChart'
import React, { useState } from 'react'
import { OrderData, Services } from '@/components/chartdata/Bardata'
import PieChart from '@/components/charts/PieChart'

const AdminDashboard = () => {

    const [ data, setData ] = useState({
        labels: OrderData.map((bardata: any) => bardata.month),
        datasets: [{
            label: "Monthly Orders",
            data: OrderData.map((bardata: any) => bardata.orders),
            backgroundColor: [ 'hsl(22, 98%, 49%, 0.5)' ],
            borderColor: 'hsl(22, 98%, 49%)',
            borderWidth: 2,
        }]
    })

    const [ servicedata, setServiceData ] = useState({
        labels: Services.map((service: any) => service.type),
        datasets: [{
            label: "Top Services",
            data: Services.map((service: any) => service.orders),
            backgroundColor: [ 'hsl(212, 62%, 40%, 0.9)', 'hsl(332, 97%, 43%, 0.9)', 'hsl(158, 82%, 47%, 0.9)' ],
            // borderColor: 'hsl(22, 98%, 49%)',
            // borderWidth: 2,
        }]
    })

    return (
        <section className='flex w-full h-screen'>
            <aside className='hidden lg:block w-full lg:w-60 fixed left-0 top-0 h-full'>
                <nav className='flex flex-col justify-between w-full bg-gray-900 pt-7 pb-16 h-full'>
                    <div className='w-full flex justify-between items-center px-5'>
                        <a href="/admin" className='text-2xl font-bold text-accent'>Kisheen</a>
                        <button type="button" className='lg:hidden h-10 w-10 rounded-full mb-2 bg-primary/10 hover:bg-primary/30 flex justify-center items-center text-primary'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                    <div>
                        <span className='block text-gray-500 uppercase mb-3 px-5' style={{fontSize: '10px'}}>main</span>
                        <ul className='text-white'>
                            <li><a href="/admin" className="text-base flex items-center py-3 px-5 bg-primary/10 border-l-4 border-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                </svg>
                                Overview
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="w-4 h-4 mb-1 ml-1 text-gray-500">
                                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                                </svg>
                                </a>
                            </li>
                        </ul>
                        <span className='block text-gray-500 uppercase my-4 px-5' style={{fontSize: '10px'}}>Datatables</span>
                        <ul className='text-white space-y-3'>
                            <li><a href="/admin/orders" className="text-base flex items-center py-3 px-5 hover:bg-primary/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                Orders
                                <span className='bg-red-500 h-2 w-2 mb-2 ml-1 text-xs rounded-full text-center'></span>
                                </a>
                            </li>
                            <li><a href="/admin/customers" className="text-base flex items-center py-3 px-5 hover:bg-primary/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                                Customers
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="w-4 h-4 mb-1 ml-1 text-gray-500">
                                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                                </svg>
                                </a>
                            </li>
                            <li><a href="/admin/staffs" className="text-base flex items-center py-3 px-5 hover:bg-primary/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>
                                Staffs
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="w-4 h-4 mb-1 ml-1 text-gray-500">
                                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                                </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className='flex items-center text-lg text-red-600 hover:text-red-500 px-5 bottom-12 left-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 pb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                        </svg> Signout
                    </button>
                </nav>
            </aside>
            <main className='w-full lg:ml-60 px-5 overflow-x-hidden'>
                <nav className='flex items-center justify-between lg:justify-end sticky top-0 py-7 lg:py-7 bg-primary'>
                    <button className='flex justify-center items-center lg:hidden' type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                        <span className='text-xl'>Menu</span>
                    </button>
                    <a className='flex justify-center items-center' href='/admin/dashboard'>
                        <div className='h-8 w-8 rounded-full bg-accent/80 flex justify-center items-center text-primary mr-1 text-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <span className='font-semibold hover:font-bold'>Emmanuel</span>
                    </a>
                </nav>
                <section className='mt-7 lg:mt-3'>
                    <h1 className='lg:hidden md:text-4xl font-bold text-xl'>Analytics</h1>
                    <div className='grid grid-cols-12 gap-6 mt-7 lg:mt-0'>
                        <div className='col-span-12 md:col-span-4 py-10 px-5 md:px-10 rounded-2xl bg-accent/5 flex justify-between items-center border-l- border-b-4 border-accent'>
                            <div>
                                <p className='mb-1 text-base text-accent'>Total Revenue</p>
                                <h3 className='text-3xl'>&#8358;87.48M</h3>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-accent/40">
                                    <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                    <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                                    <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                                </svg>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-4 py-10 px-5 md:px-10 rounded-2xl bg-accent/5 flex justify-between items-center border-l- border-b-4 border-accent'>
                            <div>
                                <p className='mb-1 text-base text-accent'>Total Users</p>
                                <h3 className='text-3xl'>11,268</h3>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-accent/40">
                                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                </svg>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-4 py-10 px-5 md:px-10 rounded-2xl bg-accent/5 flex justify-between items-center border-l- border-b-4 border-accent'>
                            <div>
                                <p className='mb-1 text-base text-accent'>Total Orders</p>
                                <h3 className='text-3xl'>3,867,049</h3>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12  text-accent/40">
                                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='my-10 lg:my-16'>
                    <div className='grid grid-cols-12 gap-y-10 lg:gap-x-10'>
                        <div className='lg:col-span-8 col-span-12 bg-white rounded-xl p-5'>
                            <div className='h-60 md:h-96 w-full'>
                                <BarChart chartData={data} />
                            </div>
                        </div>
                        <div className='lg:col-span-4 col-span-12 bg-white rounded-xl p-5'>
                            <div className='h-60 md:h-96 w-full flex items-center'>
                                <PieChart chartData={servicedata} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='my-7 border-2 border-gray-200 rounded-2xl pt-10 pb-5 px-5'>
                    <div className='lg:flex justify-between items-center mb-5'>
                        <h3 className='text-xl font-bold ml-3 mb-5 lg:mb-0'>Recent Orders</h3>
                        <input type="text" name="filter" id="filter" className='bg-gray-200 px-3 py-2 rounded-lg outline-none w-full lg:w-80' placeholder='search order' value={''} />
                    </div>
                    <div className='overflow-x-auto admin-table'>
                        <table className='table-auto w-full'>
                            <thead className=''>
                                <tr className="border-b-2 border-gray-200">
                                    <th className='p-3 whitespace-nowrap text-sm'>S/N</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Refno</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Customer</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Contact</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Order</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Service</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Address</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Home delivery</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>In-cart</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Quantity</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Prepaid</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Amount</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Status</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b-2 border-gray-200'>
                                    <td className='whitespace-nowrap p-3 text-center'>1</td>
                                    <td className='whitespace-nowrap p-3 text-center'>1687392489</td>
                                    <td className='whitespace-nowrap p-3 text-center'>Emmanuel Ufot</td>
                                    <td className='whitespace-nowrap p-3 text-center'>codemonga@gmail.com, 07066340180</td>
                                    <td className='whitespace-nowrap p-3 text-center'>Afang soup, beef, garri</td>
                                    <td className='whitespace-nowrap p-3 text-center'><span className='bg-purple-200/80 text-xs rounded-md font-bold py-1 px-3 text-purple-700 hidden'>Full Pot</span><span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700'>Regular</span></td>
                                    <td className='whitespace-nowrap p-3 text-center'>Enugu east - coal city university</td>
                                    <td className='whitespace-nowrap p-3 flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500 hidde">
                                             <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500 hidden">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </td>
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
                                <tr className='border-b-2 border-gray-200'>
                                    <td className='whitespace-nowrap p-3 text-center'>2</td>
                                    <td className='whitespace-nowrap p-3 text-center'>1687392489</td>
                                    <td className='whitespace-nowrap p-3 text-center'>Emmanuel Ufot</td>
                                    <td className='whitespace-nowrap p-3 text-center'>codemonga@gmail.com, 07066340180</td>
                                    <td className='whitespace-nowrap p-3 text-center'>Afang soup, beef, garri</td>
                                    <td className='whitespace-nowrap p-3 text-center'><span className='bg-purple-200/80 text-xs rounded-md font-bold py-1 px-3 text-purple-700'>Full Pot</span><span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700 hidden'>Regular</span></td>
                                    <td className='whitespace-nowrap p-3 text-center'>Enugu east - coal city university</td>
                                    <td className='whitespace-nowrap p-3 flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500 hidden">
                                             <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500 hidde">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </td>
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
                                <tr className='border-b-2 border-gray-200'>
                                    <td className='whitespace-nowrap p-3 text-center'>3</td>
                                    <td className='whitespace-nowrap p-3 text-center'>1687392489</td>
                                    <td className='whitespace-nowrap p-3 text-center'>Emmanuel Ufot</td>
                                    <td className='whitespace-nowrap p-3 text-center'>codemonga@gmail.com, 07066340180</td>
                                    <td className='whitespace-nowrap p-3 text-center'>Afang soup, beef, garri</td>
                                    <td className='whitespace-nowrap p-3 text-center'><span className='bg-purple-200/80 text-xs rounded-md font-bold py-1 px-3 text-purple-700 hidden'>Full Pot</span><span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700'>Regular</span></td>
                                    <td className='whitespace-nowrap p-3 text-center'>Enugu east - coal city university</td>
                                    <td className='whitespace-nowrap p-3 flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500 hidde">
                                             <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500 hidden">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </td>
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
                </section>
                <footer className='pt-10 pb-5'>
                    <p className='text-gray-700 text-sm text-center space-x-5 font-bold'>
                        <a href="/admin/enugu" className='hover:text-accent'>Enugu</a>
                        <a href="/admin/enugu" className='hover:text-accent'>Akwa Ibom</a>
                        <a href="/admin/enugu" className='hover:text-accent'>Port Harcourt</a>
                        <a href="/admin/enugu" className='hover:text-accent'>Asaba</a>
                        <a href="/admin/enugu" className='hover:text-accent'>Lagos</a>
                        <a href="/admin/enugu" className='hover:text-accent'>Abuja</a>
                    </p>
                    <p className='text-gray-700 text-sm text-center'>copyright&copy; kisheen 2024</p>
                </footer>
            </main>
        </section>
    )
}

export default AdminDashboard
import React from 'react'

const Staffs = () => {
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
                                </a>
                            </li>
                            <li><a href="/admin/staffs" className="text-base flex items-center py-3 px-5 hover:bg-primary/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>
                                Staffs
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
                <h1 className='text-xl lg:text-4xl font-bold mt-7'>Staffs Table</h1>
                <section className='my-7 border-2 border-gray-200 rounded-2xl pt-10 pb-5 px-5'>
                    <div className='lg:flex justify-between items-center mb-5'>
                        <h3 className='text-xl font-bold ml-3 mb-5 lg:mb-0'>All Staffs</h3>
                        <input type="text" name="filter" id="filter" className='bg-gray-200 px-3 py-2 rounded-lg outline-none w-full lg:w-80' placeholder='search order' value={''} />
                    </div>
                    <div className='overflow-x-auto admin-table'>
                        <table className='table-auto w-full'>
                            <thead className=''>
                                <tr className="border-b-2 border-gray-200">
                                    <th className='p-3 whitespace-nowrap text-sm'>S/N</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Name</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Email</th>
                                    {/* <th className='p-3 whitespace-nowrap text-sm'>Country</th> */}
                                    <th className='p-3 whitespace-nowrap text-sm'>Branch</th>
                                    {/* <th className='p-3 whitespace-nowrap text-sm'>District</th> */}
                                    <th className='p-3 whitespace-nowrap text-sm'>Role</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Registered</th>
                                    <th className='p-3 whitespace-nowrap text-sm'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b-2 border-gray-200'>
                                    <td className='whitespace-nowrap p-3 text-center'>1</td>
                                    <td className='whitespace-nowrap p-3 text-center'>Emmanuel Ufot</td>
                                    <td className='whitespace-nowrap p-3 text-center'>codemonga@gmail.com</td>
                                    {/* <td className='whitespace-nowrap p-3 text-center'>Nigeria</td> */}
                                    <td className='whitespace-nowrap p-3 text-center'>Enugu</td>
                                    {/* <td className='whitespace-nowrap p-3 text-center'>Enugu east</td> */}
                                    <td className='whitespace-nowrap p-3 text-center'><span className='bg-purple-200/80 text-xs rounded-md font-bold py-1 px-3 text-purple-700 hidden'>Manager</span><span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700'>Agent</span></td>
                                    <td className='whitespace-nowrap p-3 text-center'>2/6/2024</td>
                                    <td className='whitespace-nowrap p-3 text-center flex items-center justify-center mt-2'>
                                        <span className='bg-green-500 text-xs rounded-md font-bold pt-2 pb-1 px-3 text-primary flex cursor-pointer mr-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mb-1 mr-1">
                                                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                                            </svg>Promote
                                        </span>
                                        <span className='bg-red-500 text-xs rounded-md font-bold pt-2 pb-1 px-3 text-primary flex cursor-pointer mr-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mb-1 mr-1">
                                            <path d="M10.375 2.25a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25ZM10.375 12a7.125 7.125 0 0 0-7.124 7.247.75.75 0 0 0 .363.63 13.067 13.067 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12ZM16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" />
                                        </svg>Fire
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='hidden justify-center mt-7'>
                        <button type="button" className='shadow-gray-500 shadow-md ml-3 flex items-center mb-5 rounded-full py-2 px-7  hover:bg-transparent hover:text-black hover:border-gray-300 border-accent bg-accent text-primary font-bold text-sm'>Load More</button>
                    </div>
                    <div className='lg:flex items-center justify-between mt-7'>
                        <p className='ml-3 text-gray-500'>showing 1 to 10 of 20 results</p>
                        <div className=' flex items-center space-x-3'>
                            <button type="button" className='border-2 border-gray-200 hover:shadow-gray-500 hover:shadow-md ml-3 flex items-center mb-5 rounded-full py-1 px-7 hover:border-primary bg-transparent font-bold text-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                </svg>Previous
                            </button>
                            <button type="button" className='hover:shadow-gray-500 hover:shadow-md ml-3 flex items-center mb-5 rounded-full py-1 px-7 hover:border-gray-900 border-accent bg-accent border-2 text-primary hover:bg-gray-900 font-bold text-sm'>Next
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>
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

export default Staffs
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

const FoodTray = () => {
    return (
        <>
            <Navbar />
            <section className='container py-10 lg:py-12 mt-0'>
                <h3 className='mt-0 font-black'>FOOD TRAY</h3>
                <div className='grid grid-cols-5 gap-x-10 gap-y-5'>
                    <div className='col-span-5 lg:col-span-4 min-w-full'>
                        <div className='border-b-2 border-gray-400 md:pb-8 mb-10'>
                            <div className='flex gap-x-5'>
                                <img className='object-cover w-12 h-12 md:w-20 md:h-20 mt-5'  src="https://www.allrecipes.com/thmb/p4F_knUDCrUNusNOTyjY_dCp8d4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13338-quick-and-easy-vegetable-soup-DDMFS-4x3-402702f59e7a41519515cecccaba1b80.jpg" alt="cart-image" />
                                <div>
                                    <a href='/' className='block mt-5 mb-0 font-bold overflow-ellipsis break-all text-lg'>Chicken curry sauce with plantain and yam</a>
                                    <div className='flex items-center justify-between mt-3 mb-3 md:mb-8'>
                                        <div className='space-x-3'>
                                            <span className='text-red-700 line-through'>&#8358;2,800</span>
                                            <span className='text-green-700'>&#8358;1,750</span>
                                        </div>
                                        <button type='button' className='text-red-700 font-bold px-4 py-1 rounded-full flex items-center text-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>Remove
                                        </button>
                                    </div>
                                    <form action="" method="post" className= 'hidden mb-5 md:flex items-center space-y-5 md:space-y-0 md:space-x-5'>
                                        <div className='flex items-center space-x-4'>
                                            <label htmlFor="" className='font-bold text-accent'>Quantity</label>
                                            <div className='bg-gray-200 px-3 py-2 flex justify-between'>
                                                <button type="button" className='px-2'>-</button>
                                                <input type="number" name="" id="" className='text-center bg-transparent outline-none w-12 sm:w-20 md:w-12 lg:w-20' value={1} />
                                                <button type="button" className='px-2'>+</button>
                                            </div>
                                        </div>
                                        <div className='w-ful flex items-center justify-start md:justify-between space-x-4'>
                                            <label htmlFor="" className='font-bold text-accent mr-5 md:mr-0'>Combo</label>
                                            <div className='bg-gray-200 px-3 py-2'>
                                                <select name="" id="" className='bg-transparent outline-none w-24 sm:w-32 md:w-24 lg:w-32'>
                                                    <option value="">Garri</option>
                                                    <option value="">Fufu</option>
                                                    <option value="">Semovita</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='w-ful flex items-center justify-start md:justify-between space-x-4'>
                                            <label htmlFor="" className='font-bold text-accent mr-8 md:mr-0'>Meat</label>
                                            <div className='bg-gray-200 px-3 py-2'>
                                                <select name="" id="" className='bg-transparent outline-none w-24 sm:w-32 md:w-24 lg:w-32'>
                                                    <option value="">Beef</option>
                                                    <option value="">Goat</option>
                                                    <option value="">Pork</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='md:hidden mt-0 mb-2' >
                                <button type="button" className='w-full flex justify-center items-center gap-2 py-2 px-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg> show options
                                </button>
                            </div>
                        </div>
                        <div className='border-b-2 border-gray-400 md:pb-8 mb-10'>
                            <div className='flex gap-x-5'>
                                <img className='object-cover w-12 h-12 md:w-20 md:h-20 mt-5'  src="https://www.allrecipes.com/thmb/p4F_knUDCrUNusNOTyjY_dCp8d4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13338-quick-and-easy-vegetable-soup-DDMFS-4x3-402702f59e7a41519515cecccaba1b80.jpg" alt="cart-image" />
                                <div>
                                    <a href='/' className='block mt-5 mb-0 font-bold overflow-ellipsis break-all text-lg'>Chicken curry sauce with plantain and yam</a>
                                    <div className='flex items-center justify-between mt-3 mb-3 md:mb-8'>
                                        <div className='space-x-3'>
                                            <span className='text-red-700 line-through'>&#8358;2,800</span>
                                            <span className='text-green-700'>&#8358;1,750</span>
                                        </div>
                                        <button type='button' className='text-red-700 font-bold px-4 py-1 rounded-full flex items-center text-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>Remove
                                        </button>
                                    </div>
                                    <form action="" method="post" className= 'hidden mb-5 md:flex items-center space-y-5 md:space-y-0 md:space-x-5'>
                                        <div className='flex items-center space-x-4'>
                                            <label htmlFor="" className='font-bold text-accent'>Quantity</label>
                                            <div className='bg-gray-200 px-3 py-2 flex justify-between'>
                                                <button type="button" className='px-2'>-</button>
                                                <input type="number" name="" id="" className='text-center bg-transparent outline-none w-12 sm:w-20 md:w-12 lg:w-20' value={1} />
                                                <button type="button" className='px-2'>+</button>
                                            </div>
                                        </div>
                                        <div className='w-ful flex items-center justify-start md:justify-between space-x-4'>
                                            <label htmlFor="" className='font-bold text-accent mr-5 md:mr-0'>Combo</label>
                                            <div className='bg-gray-200 px-3 py-2'>
                                                <select name="" id="" className='bg-transparent outline-none w-24 sm:w-32 md:w-24 lg:w-32'>
                                                    <option value="">Garri</option>
                                                    <option value="">Fufu</option>
                                                    <option value="">Semovita</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='w-ful flex items-center justify-start md:justify-between space-x-4'>
                                            <label htmlFor="" className='font-bold text-accent mr-8 md:mr-0'>Meat</label>
                                            <div className='bg-gray-200 px-3 py-2'>
                                                <select name="" id="" className='bg-transparent outline-none w-24 sm:w-32 md:w-24 lg:w-32'>
                                                    <option value="">Beef</option>
                                                    <option value="">Goat</option>
                                                    <option value="">Pork</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='md:hidden mt-0 mb-2' >
                                <button type="button" className='w-full flex justify-center items-center gap-2 py-2 px-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg> show options
                                </button>
                            </div>
                        </div>
                        <div className='border-b-2 border-gray-400 md:pb-8 mb-10'>
                            <div className='flex gap-x-5'>
                                <img className='object-cover w-12 h-12 md:w-20 md:h-20 mt-5'  src="https://www.allrecipes.com/thmb/p4F_knUDCrUNusNOTyjY_dCp8d4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13338-quick-and-easy-vegetable-soup-DDMFS-4x3-402702f59e7a41519515cecccaba1b80.jpg" alt="cart-image" />
                                <div>
                                    <a href='/' className='block mt-5 mb-0 font-bold overflow-ellipsis break-all text-lg'>Chicken curry sauce with plantain and yam</a>
                                    <div className='flex items-center justify-between mt-3 mb-3 md:mb-8'>
                                        <div className='space-x-3'>
                                            <span className='text-red-700 line-through'>&#8358;2,800</span>
                                            <span className='text-green-700'>&#8358;1,750</span>
                                        </div>
                                        <button type='button' className='text-red-700 font-bold px-4 py-1 rounded-full flex items-center text-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>Remove
                                        </button>
                                    </div>
                                    <form action="" method="post" className= 'hidden mb-5 md:flex items-center space-y-5 md:space-y-0 md:space-x-5'>
                                        <div className='flex items-center space-x-4'>
                                            <label htmlFor="" className='font-bold text-accent'>Quantity</label>
                                            <div className='bg-gray-200 px-3 py-2 flex justify-between'>
                                                <button type="button" className='px-2'>-</button>
                                                <input type="number" name="" id="" className='text-center bg-transparent outline-none w-12 sm:w-20 md:w-12 lg:w-20' value={1} />
                                                <button type="button" className='px-2'>+</button>
                                            </div>
                                        </div>
                                        <div className='w-ful flex items-center justify-start md:justify-between space-x-4'>
                                            <label htmlFor="" className='font-bold text-accent mr-5 md:mr-0'>Combo</label>
                                            <div className='bg-gray-200 px-3 py-2'>
                                                <select name="" id="" className='bg-transparent outline-none w-24 sm:w-32 md:w-24 lg:w-32'>
                                                    <option value="">Garri</option>
                                                    <option value="">Fufu</option>
                                                    <option value="">Semovita</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='w-ful flex items-center justify-start md:justify-between space-x-4'>
                                            <label htmlFor="" className='font-bold text-accent mr-8 md:mr-0'>Meat</label>
                                            <div className='bg-gray-200 px-3 py-2'>
                                                <select name="" id="" className='bg-transparent outline-none w-24 sm:w-32 md:w-24 lg:w-32'>
                                                    <option value="">Beef</option>
                                                    <option value="">Goat</option>
                                                    <option value="">Pork</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='md:hidden mt-0 mb-2' >
                                <button type="button" className='w-full flex justify-center items-center gap-2 py-2 px-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg> show options
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-5 lg:col-span-1'>
                        <h4 className='mt-0 font-bold uppercase'>Order Summary</h4>
                        <div className='space-y-0'>
                            <div className='flex items-center justify-between'>
                                <p className='font-bold'>Total amount</p>
                                <p>#25,000</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='font-bold'>V.A.T</p>
                                <p>0%</p>
                            </div>
                            <button type="button" className='w-full py-3 bg-accent font-bold'>checkout</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default FoodTray
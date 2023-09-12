import Footer from '@/components/Footer'
import Navbar from '@/components/bars/Navbar'
import CheckoutBanner from '@/components/banners/CheckoutBanner'
import React from 'react'

const Checkout = () => {
    return (
        <>
            <Navbar />
            <CheckoutBanner />
            <section className='container mt-20'>
                <form action="" method="post" className='lg:grid grid-cols-10 mb-36 gap-x-12'>
                    <div className='col-span-6'>
                        <div className='space-y-5'>
                            <h5 className='font-bold text-xl'>Personal details</h5>
                            <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                                <label htmlFor="name" className='text-accent'>Name</label>
                                <input className='bg-transparent outline-none' type="text" name="" id="name" placeholder='Input your fullname' />
                            </div>
                            <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                                <label htmlFor="email" className='text-accent'>Email</label>
                                <input type="email" name="" id="email" className='bg-transparent outline-none' placeholder='Input your email address' />
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <h5 className='font-bold mt-10 text-xl'>Address Informations</h5>
                            <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                                <label htmlFor="state" className='text-accent'>State</label>
                                <select name="state" id="state" className='bg-transparent outline-none'>
                                    <option value="enugu">Enugu</option>
                                    <option value="anambra" disabled>Anambra</option>
                                    <option value="portharcourt" disabled>Port Harcourt</option>
                                    <option value="delta" disabled>Delta</option>
                                    <option value="akwa ibom" disabled>Akwa Ibom</option>
                                    <option value="lagos" disabled>Lagos</option>
                                    <option value="abuja" disabled>Abuja</option>
                                </select>
                            </div>
                            <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                                <label htmlFor="subject" className='text-accent'>District</label>
                                <select name="" id="subject" className='bg-transparent outline-none'>
                                    <option value="enugu north">Enugu North</option>
                                    <option value="enugu east">Enugu East</option>
                                    <option value="nsukka" disabled>Nsukka</option>
                                    <option value="nkanu east" disabled>Nkanu East</option>
                                    <option value="nkanu west" disabled>Nkanu West</option>
                                </select>
                            </div>
                            <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                                <label htmlFor="address" className='text-accent'>Address line</label>
                                <input className='bg-transparent outline-none' type="text" name="" id="address" placeholder='Add your address line' />
                            </div>
                            <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                                <label htmlFor="phone" className='text-accent'>Phone number</label>
                                <input className='bg-transparent outline-none' type="text" name="" id="phone" placeholder='Add your phone number' />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <h5 className='mb-8 font-bold text-xl'>Ordered Meals</h5>
                        <div className='space-y-5'>
                            <div className='flex items-center'>
                                <img className='object-cover w-12 h-12 md:w-12 md:h-12 rounded-lg'  src="https://www.allrecipes.com/thmb/p4F_knUDCrUNusNOTyjY_dCp8d4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13338-quick-and-easy-vegetable-soup-DDMFS-4x3-402702f59e7a41519515cecccaba1b80.jpg" alt="cart-image" />
                                <div className='ml-5'>
                                    <h6 className='my-0 font-bold'>Egusi soup</h6>
                                    <div className='space-x-6'>
                                        <small><strong className='text-accent'>Qty:</strong> 2</small>
                                        <small><strong className='text-accent'>Combo:</strong> Garri</small>
                                        <small><strong className='text-accent'>Meat:</strong> Beef</small>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <img className='object-cover w-12 h-12 md:w-12 md:h-12 rounded-lg'  src="https://www.allrecipes.com/thmb/p4F_knUDCrUNusNOTyjY_dCp8d4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13338-quick-and-easy-vegetable-soup-DDMFS-4x3-402702f59e7a41519515cecccaba1b80.jpg" alt="cart-image" />
                                <div className='ml-5'>
                                    <h6 className='my-0 font-bold'>Egusi soup</h6>
                                    <div className='space-x-6'>
                                        <small><strong className='text-accent'>Qty:</strong> 2</small>
                                        <small><strong className='text-accent'>Combo:</strong> Garri</small>
                                        <small><strong className='text-accent'>Meat:</strong> Beef</small>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <img className='object-cover w-12 h-12 md:w-12 md:h-12 rounded-lg'  src="https://www.allrecipes.com/thmb/p4F_knUDCrUNusNOTyjY_dCp8d4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13338-quick-and-easy-vegetable-soup-DDMFS-4x3-402702f59e7a41519515cecccaba1b80.jpg" alt="cart-image" />
                                <div className='ml-5'>
                                    <h6 className='my-0 font-bold'>Egusi soup</h6>
                                    <div className='space-x-6'>
                                        <small><strong className='text-accent'>Qty:</strong> 2</small>
                                        <small><strong className='text-accent'>Combo:</strong> Garri</small>
                                        <small><strong className='text-accent'>Meat:</strong> Beef</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h5 className='font-bold mb-5 text-xl'>Summary</h5>
                            <div className='space-y-0'>
                                <div className='flex items-center justify-between'>
                                    <p className=''>Subtotal</p>
                                    <p>#25,000</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className=''>Delivery fee</p>
                                    <p>#500</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className=''>V.A.T</p>
                                    <p>#1,500</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='font-bold'>Total</p>
                                    <p>#27,000</p>
                                </div>
                                <div className='space-y-4'>
                                    <button type="button" className='w-full py-3 bg-accent font-bold'>Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Checkout
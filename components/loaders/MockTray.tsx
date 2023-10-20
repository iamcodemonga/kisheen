import React from 'react'

const MockTray = () => {
    return (
        <section className='container py-10 lg:py-12 mt-0 overflow-x-hidde'>
            <h3 className='mt-0 font-black text-5xl mb-5 lg:mb-5'>FOOD CART</h3>
            <div className='xl:grid grid-cols-6 lg:gap-x-32 gap-y-5 pt-5'>
                <div className='col-span-6 lg:col-span-4'>
                    {[1, 2, 3, 4, 5].map((product, index) => <div className='border-b-2 md:pb-8 mb-6 pb-6 w-full'>
                        <div className='flex items-center gap-x-5 overflow-x-hidde w-full'>
                            <div className='bg-slate-300/50 w-16 h-16 md:w-20 md:h-20 rounded-lg'></div>
                            <div className='w-full'>
                                <div className='bg-slate-300/50 w-full h-5 rounded-lg'></div>
                                <div className='bg-slate-300/50 w-3/4 h-5 rounded-lg mt-3'></div>
                                <div className='flex items-center justify-between mt-3 w-full'>
                                    <div className='flex space-x-3 w-full'>
                                        <div className='bg-slate-300/50 w-24 h-3 rounded-lg'></div>
                                        <div className='bg-slate-300/50 w-24 h-3 rounded-lg'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
                <div className='col-span-6 lg:col-span-2'>
                    <div className='border-2 p-6 lg:sticky lg:top-32'>
                        <h4 className='mt-0 font-bold uppercase text-3xl mb-5'>Summary</h4>
                        <div className='space-y-5'>
                            <div className='flex items-center justify-between'>
                                <div className='bg-slate-300/50 w-24 h-3 rounded-lg'></div>
                                <div className='bg-slate-300/50 w-24 h-3 rounded-lg'></div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='bg-slate-300/50 w-24 h-3 rounded-lg'></div>
                                <div className='bg-slate-300/50 w-24 h-3 rounded-lg'></div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='bg-slate-300/50 w-24 h-3 rounded-lg'></div>
                                <div className='bg-slate-300/50 w-24 h-3 rounded-lg'></div>
                            </div>
                            <div className='space-y-4'>
                                <div className='bg-slate-300/50 w-full h-12'></div>
                                <div className='bg-slate-300/50 w-full h-12'></div>
                                {/* <button type="button" className='w-full py-3 bg-blue-600 font-bold text-gray-300'>Pay with STRIPE</button> */}
                                {/* <Link href="/checkout" className='block text-center w-full py-3 bg-accent font-bold'>Pay on Delivery</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MockTray
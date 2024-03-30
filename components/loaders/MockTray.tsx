import React from 'react'

const MockTray = () => {
    return (
        <section className='w-full px-4 lg:px-20 py-10 lg:py-12 mt-0'>
            <h3 className='mt-0 font-normal text-2xl md:text-4xl mb-5 lg:mb-5'>FOOD CART</h3>
            <div className='grid grid-cols-12 lg:gap-x-12 gap-y-5 pt-5'>
                <div className='col-span-12 lg:col-span-8'>
                    {[1, 2, 3, 4, 5].map((product, index) => <div className='border-t md:pt-8 mb-6 pt-6 w-full' key={index}>
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
                <div className='col-span-12 lg:col-span-4'>
                    <div className='border rounded-lg p-6 lg:sticky lg:top-32'>
                    <h4 className='mt-0 font-normal uppercase text-2xl mb-5'>cart summary</h4>
                        <div className='space-y-7'>
                            <div className='flex items-center justify-between'>
                                <div className='bg-slate-300/50 w-24 h-4 rounded-lg'></div>
                                <div className='bg-slate-300/50 w-24 h-4 rounded-lg'></div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='bg-slate-300/50 w-24 h-4 rounded-lg'></div>
                                <div className='bg-slate-300/50 w-24 h-4 rounded-lg'></div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='bg-slate-300/50 w-24 h-4 rounded-lg'></div>
                                <div className='bg-slate-300/50 w-24 h-4 rounded-lg'></div>
                            </div>
                            <div className='space-y-4'>
                                <div className='bg-slate-300/50 w-full h-12'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MockTray
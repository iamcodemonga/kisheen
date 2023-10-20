import React from 'react'

const MockCheckoutItems = () => {
    return (
        <div className='col-span-4'>
            <h5 className='mb-8 mt-10 lg:mt-0 font-bold text-xl'>Ordered Meals</h5>
            <div className='space-y-5'>
                {[1,2,3,4,5].map((item: number, index: number) => <div className='flex items-center' key={index}>
                    <div className='bg-slate-300/50 w-12 h-12 md:w-12 md:h-12 rounded-lg'></div>
                    <div className='space-y-3 ml-5 w-full'>
                        <div className='bg-slate-300/50 w-3/4 h-4 md:w-3/4 md:h-4 rounded-lg'></div>
                        <div className='bg-slate-300/50 w-full h-3 md:w-full md:h-3 rounded-lg'></div>
                    </div>
                </div>)}
            </div>
            <div className='mt-10'>
                <h5 className='font-bold mb-5 text-xl'>Summary</h5>
                <div className='space-y-5'>
                    <div className='flex items-center justify-between'>
                        <div className='bg-slate-300/50 w-24 h-4 md:w-24 md:h-4 rounded-lg'></div>
                        <div className='bg-slate-300/50 w-24 h-4 md:w-24 md:h-4 rounded-lg'></div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='bg-slate-300/50 w-24 h-4 md:w-24 md:h-4 rounded-lg'></div>
                        <div className='bg-slate-300/50 w-24 h-4 md:w-24 md:h-4 rounded-lg'></div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='bg-slate-300/50 w-24 h-4 md:w-24 md:h-4 rounded-lg'></div>
                        <div className='bg-slate-300/50 w-24 h-4 md:w-24 md:h-4 rounded-lg'></div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='bg-slate-300/50 w-24 h-4 md:w-24 md:h-4 rounded-lg'></div>
                        <div className='bg-slate-300/50 w-24 h-4 md:w-24 md:h-4 rounded-lg'></div>
                    </div>
                    <div className='bg-slate-300/50 w-full h-14 md:w-full md:h-14'></div>
                </div>
            </div>
        </div>
    )
}

export default MockCheckoutItems
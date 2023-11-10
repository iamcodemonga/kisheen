import React from 'react'

const MockCartList = () => {
    return (
        <div className='w-full mt-10 lg:mt-7'>
            {[1, 2, 3, 4, 5].map((product, index) => <div className='border-b-2 md:pb-8 mb-6 pb-6 w-full' key={index}>
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
    )
}

export default MockCartList
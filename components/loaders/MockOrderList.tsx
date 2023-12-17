import React from 'react'

const MockOrderList = () => {
    return (
        <div className='w-full mt-10 lg:mt-7'>
            {[1, 2, 3, 4, 5].map((product, index) => <div className='mb-6 w-full space-y-2' key={index}>
                <div className='flex items-center gap-x-5 overflow-x-hidde w-full'>
                    <div className='bg-slate-300/50 w-14 h-12 md:w-14 md:h-12 rounded-lg'></div>
                    <div className='w-full'>
                        <div className='bg-slate-300/50 w-5/6 h-5 rounded-lg'></div>
                        <div className='bg-slate-300/50 w-full h-4 rounded-lg mt-3'></div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default MockOrderList
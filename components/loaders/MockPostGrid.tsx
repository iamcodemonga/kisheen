import React from 'react'

const MockPostGrid = ({ list }: { list: number[] }) => {
    return (
        <>
            {list.map((index) => <div className='card w-full relative' key={index}>
                <div className='h-80 lg:h-80 w-full rounded-xl bg-slate-300/50'></div>
                <div className='mb-1 mt-5 w-full h-6 rounded-full bg-slate-300/50'></div>
                <div className='mb-1 mt-2 w-4/5 h-6 rounded-full bg-slate-300/50'></div>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex space-x-2'>
                        <div className='mb-1 mt-2 w-20 h-4 rounded-full bg-slate-300/50'></div>
                        <div className='mb-1 mt-2 w-20 h-4 rounded-full bg-slate-300/50'></div>
                    </div>
                </div>
                <span className='px-2 pt-2 pb-1 w-16 h-8 bg-slate-50 absolute top-0 mt-2 rounded-lg left-0 ml-2'></span>
            </div>)}
        </>
    )
}

export default MockPostGrid
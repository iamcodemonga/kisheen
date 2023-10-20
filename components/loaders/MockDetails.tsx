import React from 'react'

const MockDetails = () => {
    return (
        <section className='container w-full grid grid-cols-2 gap-10 pt-7 pb-20 lg:py-28 items-center'>
            <div className='col-span-2 lg:col-span-1 bg-gray-200'>
                <div className='w-full rounded-lg bg-slate-300/50' style={{ height: '500px'}}></div>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <div className='h-6 w-full rounded-lg bg-slate-300/50'></div>
                <div className='h-6 w-3/4 rounded-lg bg-slate-300/50 mt-4'></div>
                <div className='flex space-x-3 my-5'>
                    <span className='h-4 w-28 rounded-lg bg-slate-300/50'></span>
                    <span className='h-4 w-28 rounded-lg bg-slate-300/50'></span>
                </div>
                <div className='h-5 w-full rounded-lg bg-slate-300/50'></div>
                <div className='h-5 w-full rounded-lg bg-slate-300/50 mt-4'></div>
                <div className='h-5 w-3/4 rounded-lg bg-slate-300/50 mt-4'></div>
                <form action="" method="post" className='space-y-5 mt-8'>
                    <div className='flex flex-col'>
                        <div className='h-4 w-28 rounded-lg bg-slate-300/50 mb-2'></div>
                        <input type="number" name="" id="" placeholder='xxxxxxxxxxxxx' className='w-full py-2 px-3 bg-gray-200 rounded-xl' disabled />
                    </div>
                    <div className='flex flex-col'>
                        <div className='h-4 w-28 rounded-lg bg-slate-300/50 mb-2'></div>
                        <input type="number" name="" id="" placeholder='xxxxxxxxxxx' className='w-full py-2 px-3 bg-gray-200 rounded-xl' disabled />
                    </div>
                    <div className='md:flex md:space-x-5 space-y-7 sm:space-y-0 items-center'>
                        <div className='bg-slate-300/50 w-full rounded-xl h-14'></div>
                        <div className='bg-slate-300/50 w-full rounded-xl h-14'></div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default MockDetails
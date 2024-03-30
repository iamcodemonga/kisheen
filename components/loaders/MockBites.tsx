import React from 'react'

const MockBites = () => {
    return (
        <section className='w-full bg-gray-900 mt-20 mb-20 pb-28 pt-20'>
            <section className='px-4 lg:px-20 py-20'>
                <div className='w-full md:flex items-center justify-between mb-14 md:mb-20'>
                    <h3 className='font-bold text-5xl md:text-5xl xl:text-9xl gap-x-5 text-primary'>Big <span className='text-accent'>Bites</span></h3>
                </div>
                <div className='grid md:grid-cols-4 gap-x-6 gap-y-12'>
                    {[1,2,3,4].map((meal:number) => <div className='relative' key={meal}>
                        <div className=''>
                            <div className='object-cover h-80 lg:h-96 w-full rounded-full border border-accent bg-transparent p-[4px] z-10 bg-slate-300'></div>
                        </div>
                        <div className=' shadow-gray-300 w-48 block absolute bottom-0 !bg-primary !z-auto py-3 px-3 rounded-tl-2xl ml-5 rounded-br-2xl'>
                            <div className='h-5 w-full bg-slate-300 rounded-full'></div>
                            <div className='h-3 w-full bg-slate-300 mt-4 rounded-full'></div>
                        </div>
                    </div>)}
                </div>
            </section>
        </section>
    )
}

export default MockBites
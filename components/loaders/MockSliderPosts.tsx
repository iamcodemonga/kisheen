import React from 'react'

const MockSliderPosts = () => {
    return (
        <section>
            <div className='lg:flex mt-14 lg:mt-36 w-full'>
                <div className='lg:block flex items-center justify-between lg:max-w-sm px-4 lg:px-8 lg:pl-20 mb-7 w-full'>
                    <h3 className='font-black text-xl md:text-3xl lg:text-5xl my-0 lg:mt-10 leading-normal'><span className='hidden lg:block'>Featured Delicacies</span><span className='lg:hidden'>Featured Meals</span></h3>
                    <p className='hidden lg:block lg:my-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, iure?</p>
                    <div className='h-10 w-28 rounded-full bg-slate-300/50'></div>
                </div>
                <div className='slider-container flex gap-3 lg:gap-6 overflow-x-auto w-full px-4 relative pb-3 scroll-smooth'>
                    {[1,2,3,4,5,6].map((meal:number, index: number) => <div className='slider-card relative' key={index}>
                        <div className='h-64 lg:h-96 w-full rounded-xl bg-slate-300/50'></div>
                        <div className='mb-1 mt-5 w-full h-6 rounded-full bg-slate-300/50'></div>
                        <div className='mb-1 mt-2 w-4/5 h-6 rounded-full bg-slate-300/50'></div>
                        <div className='flex space-x-2'>
                            <div className='mb-1 mt-2 w-20 h-4 rounded-full bg-slate-300/50'></div>
                            <div className='mb-1 mt-2 w-20 h-4 rounded-full bg-slate-300/50'></div>
                        </div>
                        <span className='px-2 pt-2 pb-1 w-16 h-8 bg-slate-50 absolute top-0 mt-2 rounded-lg left-0 ml-2'>
                        </span>
                    </div>)}
                </div>
            </div>
            <p className='space-x-5 text-end lg:mb-0 mt-8 lg:mt-12 lg:mr-10 pr-5'>
                <span className='bg-slate-300/50 rounded-full h-16 w-16 px-7 py-5'></span>
                <span className='bg-slate-300/50 rounded-full h-16 w-16 px-7 py-5'></span>
            </p>
        </section>
    )
}

export default MockSliderPosts
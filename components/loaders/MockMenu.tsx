import React from 'react'

const MockMenu = () => {
    return (
        <section className='grid grid-cols-6'>
            {/* <Menubar /> */}
            <aside className='pt-6 lg:pt-20 hidden lg:block lg:col-span-1 lg:pl-20 space-y-10'>
                <div>
                    <small className='text-accent font-normal text-xs'>CATEGORIES</small>
                    <ul className='space-y-9 mt-10'>
                        <li className='w-full bg-slate-300/50 pb-2 pt-3 rounded-full h-5'></li>
                        <li className='w-full bg-slate-300/50 pb-2 pt-3 rounded-full h-5'></li>
                        <li className='w-full bg-slate-300/50 pb-2 pt-3 rounded-full h-5'></li>
                        <li className='w-full bg-slate-300/50 pb-2 pt-3 rounded-full h-5'></li>
                        <li className='w-full bg-slate-300/50 pb-2 pt-3 rounded-full h-5'></li>
                    </ul>
                </div>
                <div>
                    <small className='text-accent font-normal text-xs'>PRICE FILTER</small>
                    <form action="" method="post" className='space-y-5 mt-4 w-full'>
                        <input type="number" name="" id="minimum" className='bg-gray-200 px-3 py-2 rounded-lg outline-none w-full' placeholder='minimum price' value="" disabled />
                        <input type="number" name="" id="maximum" className='bg-gray-200 px-3 py-2 rounded-lg outline-none w-full' placeholder='maximum price' value="" disabled />
                        <button type="button" className='w-full pt-3 pb-2 rounded-lg bg-accent font-medium text-sm'>Filter</button>
                    </form>
                </div>
            </aside>
            {/* <Fullmenu /> */}
            <section className='container py-6 lg:py-16 col-span-6 lg:col-span-5'>
                <h1 className='text-3xl md:text-5xl font-normal capitalize my-5'>Food Menu</h1>
                <div className='flex items-center justify-start mb-7 w-full'>
                    <button type="button" className='lg:hidden mr-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                    </button>
                    <form className='w-full'>
                      <input type="text" name="" id="search" placeholder='search meal' className='py-3 px-4 bg-gray-200 rounded-xl outline-none w-full' disabled />
                  </form>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 lg:gap-y-14'>
                    {[1, 2, 3, 4, 5, 6].map((meal:number, index: number) => <div className='card w-full relative' key={index}>
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
                </div>
                <p className='text-center mt-10 md:mt-14 lg:mt-16 flex justify-center'><div className='px-8 py-3 text-base bg-slate-300/50 rounded-full w-36 h-12'></div></p>
            </section>
        </section>
    )
}

export default MockMenu
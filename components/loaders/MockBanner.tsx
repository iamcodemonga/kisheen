import React from 'react'

const MockBanner = () => {
    return (
        <header className='relative w-full overflow-hidden bg-slate-300/50' style={{ height: '100vh'}}>
          {/* <div className='w-full h-full bg-black opacity-60 absolute top-0 left-0'></div> */}
          <div className='absolute bottom-0 left-0 w-full md:w-2/5 px-4 mb-24 md:mb-24 lg:mb-32 lg:ml-20' >
              <div className='text-accent font-bold uppercase w-40 h-5 bg-slate-50 rounded-2xl'></div>
              <div className='text-accent font-bold uppercase w-full mt-6 h-8 bg-slate-50 rounded-2xl'></div>
              <div className='text-accent font-bold uppercase w-full mt-6 h-8 bg-slate-50 rounded-2xl'></div>
              <div className='text-accent font-bold uppercase w-4/5 mt-6 h-8 bg-slate-50 rounded-2xl'></div>
              {/* <p className='font-bold text-xl mb-10 space-x-3'><span className='text-green-700'>&#8358;25,000</span><span className='text-red-500 line-through'>&#8358;40,000</span></p> */}
              <div className='px-10 py-4 mt-10 w-40 h-12 rounded-3xl bg-slate-50'></div>
            </div>
        </header>
    )
}

export default MockBanner
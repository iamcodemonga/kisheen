import React from 'react'

const MockNavbar = () => {
    return (
        <nav className="px-3 py-8 lg:px-20 z-10 w-full bg-primary sticky top-0 left-0">
            <div className= 'flex items-center justify-between'>
                <div className='w-40 h-7 lg:h-5 bg-slate-300/50 rounded-2xl'></div>
                <div className='flex justify-center items-center lg:hidden space-x-5'>
                    <div className='h-12 w-12 rounded-full bg-slate-300/50' ></div>
                    <div className='h-12 w-12 rounded-full bg-slate-300/50' ></div>
                </div>
                <div className='hidden lg:flex space-x-6'>
                    <div className='h-5 w-20 rounded-full bg-slate-300/50'></div>
                    <div className='h-5 w-20 rounded-full bg-slate-300/50'></div>
                    <div className='h-5 w-20 rounded-full bg-slate-300/50'></div>
                    <div className='h-5 w-20 rounded-full bg-slate-300/50'></div>
                    <div className='h-5 w-20 rounded-full bg-slate-300/50'></div>
                </div>
                <div className='hidden lg:flex space-x-6'>
                    <div className='h-5 w-20 rounded-full bg-slate-300/50'></div>
                    <div className='h-5 w-20 rounded-full bg-slate-300/50'></div>
                    <div className='h-5 w-20 rounded-full bg-slate-300/50'></div>
                </div>
            </div>
        </nav>
    )
}

export default MockNavbar
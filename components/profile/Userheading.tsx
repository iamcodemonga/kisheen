import React, { FC } from 'react'
import Link from 'next/link'

interface Active {
    page: string
}

const Userheading: FC<Active> = ({ page }) => {
    return (
        <>
            <header className='container pt-10 pb-5 lg:pb-10'>
                <h3 className='my-3 text-6xl font-bold'>Hello, Emmanuel Ufot</h3>
                <p>codemonga@gmail.com</p>
            </header>
            <div className='lg:hidden overflow-x-auto whitespace-nowrap container pb-5'>
                <Link href="/account" className={page == 'index' ? 'inline-block py-1 px-10 text-center border-b-4 border-accent font-bold text-accent' : 'inline-block py-1 px-10 text-center font-bold hover:text-accent'}>Orders</Link>
                <Link href="/account/settings" className={page == 'settings' ? 'inline-block py-1 px-10 text-center border-b-4 border-accent font-bold text-accent' : 'inline-block py-1 px-10 text-center font-bold hover:text-accent'}>Settings</Link>
            </div>
        </>
    )
}

export default Userheading
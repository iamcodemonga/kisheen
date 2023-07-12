import React, { FC } from 'react'
import Link from 'next/link'
import Mealorders from '../datalist/Mealorders'
import Changepassword from '../forms/Changepassword'

interface Active {
    page: string
}

const Usersection: FC<Active> = ({ page }) => {
    return (
        <section className='lg:grid grid-cols-6 container gap-7'>
                <aside className='hidden lg:block lg:col-span-1 mb-6'>
                    <ul className='space-y-7'>
                        <li className={page == 'index' ? 'py-1 lg:border-l-8 border-accent bg-accent/10' : 'py-1 border-l-8 border-transparent hover:bg-accent/10'}><Link href={`/account`} className='py-2 pl-3 pr-10 font-bold'>Orders</Link></li>
                        <li className={page == 'settings' ? 'py-1 lg:border-l-8 border-accent bg-accent/10' : 'py-1 border-l-8 border-transparent hover:bg-accent/10'}><Link href={`/account/settings`} className='py-2 pl-3 pr-10 font-bold'>Settings</Link></li>
                    </ul>
                </aside>
                {page == 'index' && <Mealorders />}
                {page == 'settings' && <Changepassword />}
            </section>
    )
}

export default Usersection
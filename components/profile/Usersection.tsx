import React, { FC } from 'react'
import Link from 'next/link'
import Mealorders from '../datalist/Mealorders'
import Changepassword from '../forms/Changepassword'
import { MyOrders } from '@/lib/graphcms'

type TUserProps = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    password?: string;
}

type Active = {
    page: string;
    user: TUserProps;
}

const Usersection: FC<Active> = async({ page, user }) => {
    const orders =  await MyOrders(user.email, 6, 0)

    return (
        <section className='lg:grid grid-cols-6 container gap-7'>
            <aside className='hidden lg:block lg:col-span-1 mb-6'>
                <ul className='space-y-7'>
                    <li className={page == 'index' ? 'py-4 lg:border-l-8 border-accent bg-accent/20 text-xl' : 'py-4 border-l-8 border-transparent hover:border-accent text-xl'}><Link href={`/dashboard`} className='py-2 pl-3 pr-10 font-bold'>All orders</Link></li>
                    <li className={page == 'settings' ? 'py-4 lg:border-l-8 border-accent bg-accent/10 text-xl' : 'py-4 border-l-8 border-transparent hover:border-accent hover:bg-accent/5 text-xl'}><Link href={`/dashboard/settings`} className='py-2 pl-3 pr-10 font-bold'>Settings</Link></li>
                </ul>
            </aside>
            {page == 'index' && <Mealorders orders={orders} email={user.email} />}
            {page == 'settings' && <Changepassword email={user.email} />}
        </section>
    )
}

export default Usersection
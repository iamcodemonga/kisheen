import React, { FC } from 'react'
import Link from 'next/link'
import Mealorders from '../datalist/Mealorders'
import Changepassword from '../forms/Changepassword'
import { MyOrders } from '@/lib/graphcms'
import EditUserForm from '../forms/EditUserForm'
import Bio from '@/components/profile/Userheading'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { EmailExists } from '@/lib/graphcms'

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
    const session = await getServerSession(authOptions)
    const userparams = await EmailExists(session?.user?.email as string)

    return (
        <section className='px-10 gap-7'>
            <Bio page='index' user={userparams[0]} />
            {page == 'index' && <Mealorders orders={orders} email={user.email} />}
            {page == 'settings' && <EditUserForm />}
            {/* {page == 'settings' && <Changepassword email={user.email} />} */}
        </section>
    )
}

export default Usersection
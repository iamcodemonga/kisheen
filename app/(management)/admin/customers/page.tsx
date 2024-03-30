import React from 'react'
import Navbar from '@/components/bars/AdminNavbar'
import Table from '@/components/tables/Customers'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { getUser } from '@/lib/datacalls'
import { redirect } from 'next/navigation'
import axios from 'axios'

export const dynamic = "force-dynamic";

const Customers = async({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)
    console.log(user.profile);
    

    if (user.profile.role == "customer") {
        redirect('/dashboard')
    }

    if (user.profile.role == "agent") {
        redirect('/admin/orders')
    }

    let p: number = Number(searchParams.page);
    let offset: number;

    if (p == undefined || Number.isNaN(p) || p == 0) {
        p = 1;
        offset = 0*10;
    } else {
        offset = (p-1)*10;
    }

    const { data } = await axios(`${process.env.API_ROOT}/user/all?start=${offset}&limit=10`);

    return (
        <>
            <Navbar />
            <h1 className='text-2xl lg:text-4xl font-normal mt-7'>Customers Table</h1>
            <Table customers={data.table.customers} page={p} prev={data.table.prev} next={data.table.next} tableCount={data.table.total} admin={user.profile} />
        </>
    )
}

export default Customers
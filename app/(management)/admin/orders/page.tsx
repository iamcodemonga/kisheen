import React from 'react'
import Link from 'next/link'
import Table from '@/components/tables/Orders'
import Navbar from '@/components/bars/AdminNavbar'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { getUser } from '@/lib/datacalls'
import { redirect } from 'next/navigation'
import axios from 'axios'

export const dynamic = "force-dynamic";

const page = async({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)

    if (user.profile.role == "customer") {
        redirect('/dashboard')
    }

    let p: number = Number(searchParams.page);
    let offset: number;

    if (p == undefined || Number.isNaN(p) || p == 0) {
        p = 1;
        offset = 0*10;
    } else {
        offset = (p-1)*10;
    }

    let info;
    if (user.profile.role == "manager" || user.profile.role == "agent") {
        const { data } = await axios(`${process.env.API_ROOT}/orders/all?start=${offset}&limit=10&filter=city&value=${user.profile.city}`);
        info = data
    }

    if (user.profile.role == "board") {
        const { data } = await axios(`${process.env.API_ROOT}/orders/all?start=${offset}&limit=10`);
        info = data
    }

    const orderstoprint = (info.table.orders.length > 0 ?  info.table.orders.filter((item: any, index:number) => {
        return item.stage == 1 && item.printed == false;
    }) : null)
    

    return (
        <>
            <Navbar />
            <h1 className='text-2xl lg:text-4xl font-normal mt-7'>Orders Table</h1>
            <Table recent={false} orders={info.table.orders} page={p} prev={info.table.prev} next={info.table.next} tableCount={info.table.total} orderstoprint={orderstoprint} />
        </>
    )
}

export default page
import React from 'react'
import Navbar from '@/components/bars/AdminNavbar'
import Table from '@/components/tables/Staffs'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { getUser } from '@/lib/datacalls'
import { redirect } from 'next/navigation'
import axios from 'axios'

export const dynamic = "force-dynamic";

const Staffs = async({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)

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

    let info;
    if (user.profile.role == "board") {
        const { data } = await axios(`${process.env.API_ROOT}/user/staffs?start=${offset}&limit=10`);
        info = data;
    }

    if (user.profile.role == "manager") {
        const { data } = await axios(`${process.env.API_ROOT}/user/agents?start=${offset}&limit=10&country=${user.profile.country}&city=${user.profile.city}`);
        info = data;
    }

    return (
        <>
            <Navbar />
            <h1 className='text-2xl lg:text-4xl font-normal mt-7'>Staffs Table</h1>
            <Table staffs={info.table.staffs} page={p} prev={info.table.prev} next={info.table.next} tableCount={info.table.total} admin={user.profile} />
        </>
    )
}

export default Staffs
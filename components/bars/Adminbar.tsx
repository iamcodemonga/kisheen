"use client"

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FormEvent } from 'react'

type Props = {
    visible: boolean;
    activate: () => void;
}

const Adminbar = ({ visible, activate }: Props) => {

    const pathname = usePathname();

    const handleClose = (event: any) => {
        if (event.target.id == "adminpopup") {
            activate()
        }
        return;
    }

    const handleLogout = async(e: FormEvent) => {
        e.preventDefault();
        await signOut()
        return;
    }

    return (
        <section className={`w-full h-screen ${visible ? "fixed" : "hidden"} z-[60] bg-gray-950/70 top-0 left-0 flex items-end justify-center px-2 pb-5` }id='adminpopup' onClick={(e) => handleClose(e)}>
            <div className='w-full px-5 py-10 rounded-xl bg-primary space-y-5'>
                <Link href="/" className={`block ${pathname == '/' ? "text-2xl text-accent" : "text-base"}`}>Home</Link>
                <Link href="/admin" className={`block ${pathname == '/admin' ? "text-2xl text-accent" : "text-base"}`}>Overview</Link>
                <Link href="/admin/orders" className={`block ${pathname == '/admin/orders' ? "text-2xl text-accent" : "text-base"}`}>Orders</Link>
                <Link href="/admin/customers" className={`block ${pathname == '/admin/customers' ? "text-2xl text-accent" : "text-base"}`}>Customers</Link>
                <Link href="/admin/staffs" className={`block ${pathname == '/admin/staffs' ? "text-2xl text-accent" : "text-base"}`}>Staffs</Link>
                <a href="/" className='text-red-600 block text-base' onClick={(e) => handleLogout(e)}>Logout</a>
            </div>
        </section>
    )
}

export default Adminbar
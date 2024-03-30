"use client"

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FormEvent } from 'react'

type Props = {
    visible: boolean;
    activate: () => void;
}

const Profilebar = ({ visible, activate }: Props) => {

    const pathname = usePathname();

    const handleClose = (event: any) => {
        if (event.target.id == "dashboardpopup") {
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
        <section className={`w-full h-screen ${visible ? "fixed" : "hidden"} z-[60] bg-gray-950/70 top-0 left-0 flex items-end justify-center px-2 pb-5` }id='dashboardpopup' onClick={(e) => handleClose(e)}>
            <div className='w-full px-5 py-10 rounded-xl bg-primary space-y-5'>
                <Link href="/dashboard" className={`block ${pathname == '/dashboard' ? "text-2xl text-accent" : "text-base"}`}>Dashboard</Link>
                <Link href="/dashboard/settings" className={`block ${pathname == '/dashboard/settings' ? "text-2xl text-accent" : "text-base"}`}>Settings</Link>
                <a href="/dashboard/settings" className='text-red-600 block text-base' onClick={(e) => handleLogout(e)}>Logout</a>
            </div>
        </section>
    )
}

export default Profilebar
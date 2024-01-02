"use client"

import { playAudio } from '@/lib/graphcms'
import axios from 'axios'
import { signOut } from 'next-auth/react'
import React, { FormEvent, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'

const AdminDashboard = () => {

    const [ currentPwd, setCurrentPwd ] = useState<string>("")
    const [ newPwd, setNewPwd ] = useState<string>("")
    const [ email, setEmail ] = useState<string>("")
    const [ confirmedPwd, setConfirmedPwd ] = useState<string>("")
    const [ showCurrent, setShowCurrent ] = useState<boolean>(false);
    const [ showNew, setShowNew ] = useState<boolean>(false);
    const [ showConfirmed, setShowConfirmed ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(false)

    const handleShowPassword = (index: number) => {
        if (index == 1) {
            setShowCurrent(prev => !prev)
            return;
        }
        if (index == 2) {
            setShowNew(prev => !prev)
            return;
        }
        if (index == 3) {
            setShowConfirmed(prev => !prev)
            return;
        }
        return;
    }

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();

        if (currentPwd.trim() == "" || newPwd.trim() == "" || confirmedPwd.trim() == "") {
            toast.error(`Please, fill in all field!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            playAudio('/error.mp3')
            return;
        }

        if (newPwd !== confirmedPwd) {
            toast.error(`Passwords don't match!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            playAudio('/error.mp3')
            return;
        }

        setLoading(true)
        try {
            const { data } = await axios.post('/api/user/password', { email: email, currentpwd: currentPwd, newpwd: newPwd });
            if (data.status != "ok") {
                toast.error(`${data.message}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                playAudio('/error.mp3')
                setLoading(false)
                return;
            }

            toast.success(`${data.message}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            playAudio('/livechat.mp3')
            setLoading(false)
            await signOut()
            return;

        } catch (error) {
            console.log(error)
        }

        setLoading(false)
        return;
    }

    return (
        <section className='flex w-full h-screen'>
            <aside className='hidden lg:block w-full lg:w-60 fixed left-0 top-0 h-full'>
                <nav className='flex flex-col justify-between w-full bg-gray-900 pt-7 pb-16 h-full'>
                    <div className='w-full flex justify-between items-center px-5'>
                        <a href="/admin" className='text-2xl font-bold text-accent'>Kisheen</a>
                        <button type="button" className='lg:hidden h-10 w-10 rounded-full mb-2 bg-primary/10 hover:bg-primary/30 flex justify-center items-center text-primary'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                    <div>
                        <span className='block text-gray-500 uppercase mb-3 px-5' style={{fontSize: '10px'}}>main</span>
                        <ul className='text-white'>
                            <li><a href="/admin" className="text-base flex items-center py-3 px-5 bg-primary/10 border-l-4 border-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                </svg>
                                Overview
                                </a>
                            </li>
                        </ul>
                        <span className='block text-gray-500 uppercase my-4 px-5' style={{fontSize: '10px'}}>Datatables</span>
                        <ul className='text-white space-y-3'>
                            <li><a href="/admin/orders" className="text-base flex items-center py-3 px-5 hover:bg-primary/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                Orders
                                <span className='bg-red-500 h-2 w-2 mb-2 ml-1 text-xs rounded-full text-center'></span>
                                </a>
                            </li>
                            <li><a href="/admin/customers" className="text-base flex items-center py-3 px-5 hover:bg-primary/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                                Customers
                                </a>
                            </li>
                            <li><a href="/admin/staffs" className="text-base flex items-center py-3 px-5 hover:bg-primary/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>
                                Staffs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className='flex items-center text-lg text-red-600 hover:text-red-500 px-5 bottom-12 left-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 pb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                        </svg> Signout
                    </button>
                </nav>
            </aside>
            <main className='w-full lg:ml-60 px-5 overflow-x-hidden'>
                <nav className='flex items-center justify-between lg:justify-end sticky top-0 py-7 lg:py-7 bg-primary'>
                    <button className='flex justify-center items-center lg:hidden' type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                        <span className='text-xl'>Menu</span>
                    </button>
                    <a className='flex justify-center items-center' href='/admin/dashboard'>
                        <div className='h-8 w-8 rounded-full bg-accent/80 flex justify-center items-center text-primary mr-1 text-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <span className='font-semibold hover:font-bold'>Emmanuel</span>
                    </a>
                </nav>
                <section className='my-0 pt-10 pb-5 lg:px-5'>
                    <div className='grid grid-cols-12 items-start gap-y-10 lg:gap-y-0  lg:gap-x-8'>
                        <div className='col-span-12 lg:col-span-5 border-2 border-gray-200 rounded-xl px-5 py-10' >
                            <div className=''>
                                <div className='flex justify-center w-full'>
                                    <div className='h-40 w-40 rounded-full bg-accent/80 flex justify-center items-center text-primary mb-8 text-5xl'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className='text-center lg:text-4xl text-xl mb-2'>Emmanuel Ufot</h3>
                                <h3 className='text-center text-gray-500 mb-2'>codemonga@gmail.com</h3>
                                <h3 className='text-center text-gray-500 mb-5'>Enugu, Nigeria</h3>
                                <div className='w-full flex justify-center space-x-4'>
                                    <button type="button" className='text-green-900 bg-green-200 px-10 py-2 rounded-md font-bold cursor-default'>Board</button>
                                    <button type="button" className='text-primary bg-gray-900 px-10 py-2 rounded-md font-bold flex items-center hover:text-accent'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
                                            <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                        </svg>settings
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-7 lg:border-2 lg:border-gray-200 rounded-xl lg:px-10 lg:py-10">
                            <div className='flex w-full justify-center'>
                                <form action="" onSubmit={(e) => handleSubmit(e)} method="post" className='space-y-8 w-full'>
                                    <h4 className='font-black mb-10 mt-5 lg:mt-0 text-2xl text-center'>Change Password</h4>
                                    <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                                        <div className='flex w-full justify-between items-center'>
                                            <label htmlFor="current" className='text-accent font-bold'>Current Password</label>
                                            <button type='button' className='font-bold' onClick={() => handleShowPassword(1)}>{ showCurrent ? "hide" : "show" }</button>
                                        </div>
                                        <input className='bg-transparent outline-none' type={showCurrent ? "text" : "password"} name="current" id="current" placeholder='Input your current password' value={currentPwd} onChange={(e) => setCurrentPwd(e.target.value)} />
                                    </div>
                                    <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                                        <div className='flex w-full justify-between items-center'>
                                            <label htmlFor="new" className='text-accent font-bold'>New Password</label>
                                            <button type='button' className='font-bold' onClick={() => handleShowPassword(2)}>{ showNew ? "hide" : "show" }</button>
                                        </div>
                                        <input className='bg-transparent outline-none' type={showNew ? "text" : "password"} name="new" id="new" placeholder='Input your new password' value={newPwd} onChange={(e) => setNewPwd(e.target.value)} />
                                    </div>
                                    <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                                        <div className='flex w-full justify-between items-center'>
                                            <label htmlFor="confirm" className='text-accent font-bold'>Confirm Password</label>
                                            <button type='button' className='font-bold' onClick={() => handleShowPassword(3)}>{ showConfirmed ? "hide" : "show" }</button>
                                        </div>
                                        <input className='bg-transparent outline-none' type={showConfirmed ? "text" : "password"} name="confirm" id="confirm" placeholder='Input your confirm password' value={confirmedPwd} onChange={(e) => setConfirmedPwd(e.target.value)} />
                                    </div>
                                    <div>
                                    {loading ? <button type="button" className='w-full bg-accent/40 py-4 rounded-lg text-lg font-bold mb-3' disabled><BeatLoader color="#ffffff" loading={loading} aria-label="Loading Spinner" data-testid="loader" size={10} /></button> : <button type="submit" className='w-full bg-accent py-4 rounded-lg text-lg font-bold mb-3'>submit</button>}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className='pt-10 pb-5'>
                    <p className='text-gray-700 text-sm text-center space-x-5 font-bold'>
                        <a href="/admin/enugu" className='hover:text-accent'>Enugu</a>
                        <a href="/admin/enugu" className='hover:text-accent'>Akwa Ibom</a>
                        <a href="/admin/enugu" className='hover:text-accent'>Port Harcourt</a>
                        <a href="/admin/enugu" className='hover:text-accent'>Asaba</a>
                        <a href="/admin/enugu" className='hover:text-accent'>Lagos</a>
                        <a href="/admin/enugu" className='hover:text-accent'>Abuja</a>
                    </p>
                    <p className='text-gray-700 text-sm text-center'>copyright&copy; kisheen 2024</p>
                </footer>
            </main>
        </section>
    )
}

export default AdminDashboard
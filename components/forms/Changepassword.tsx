"use client"

import { playAudio } from '@/lib/graphcms'
import axios from 'axios'
import { signOut } from 'next-auth/react'
import { FormEvent, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import { toast } from 'react-toastify'

const Changepassword = ({ id }: { id: number }) => {

    const [ currentPwd, setCurrentPwd ] = useState<string>("")
    const [ newPwd, setNewPwd ] = useState<string>("")
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
            const { data } = await axios.put(`${process.env.NEXT_PUBLIC_API_ROOT}/password?id=${id}`, { oldpassword: currentPwd, newpassword: newPwd, confirmedpassword: confirmedPwd });
            if (data.error) {
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
            } else {
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
            }

        } catch (error) {
            console.log(error)
        }

        setLoading(false)
        return;
    }

    return (
        <div className='col-span-12 lg:col-span-6 items-start'>
            <div className='flex w-full justify-center'>
                <form action="" onSubmit={(e) => handleSubmit(e)} method="post" className='space-y-8 w-full border border-slate-300 rounded-lg px-4 py-4 pb-8 lg:p-10'>
                    <h4 className='font-medium mb-5 mt-5 lg:mt-0 text-2xl text-center'>Change Password</h4>
                    <div className='flex flex-col bg-slate-200 py-3 px-5 rounded-lg'>
                        <div className='flex w-full justify-between items-center'>
                            <label htmlFor="current" className='text-accent text-xs mb-1'>Current Password</label>
                            <button type='button' className='font-bold' onClick={() => handleShowPassword(1)}>{ showCurrent ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            }</button>
                        </div>
                        <input className='bg-transparent outline-none text-sm font-normal' type={showCurrent ? "text" : "password"} name="current" id="current" placeholder='Input your current password' value={currentPwd} onChange={(e) => setCurrentPwd(e.target.value)} />
                    </div>
                    <div className='flex flex-col bg-slate-200 py-3 px-5 rounded-lg'>
                        <div className='flex w-full justify-between items-center'>
                            <label htmlFor="new" className='text-accent text-xs mb-1'>New Password</label>
                            <button type='button' className='font-bold' onClick={() => handleShowPassword(2)}>{ showNew ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            }</button>
                        </div>
                        <input className='bg-transparent outline-none text-sm font-normal' type={showNew ? "text" : "password"} name="new" id="new" placeholder='Input your new password' value={newPwd} onChange={(e) => setNewPwd(e.target.value)} />
                    </div>
                    <div className='flex flex-col bg-slate-200 py-3 px-5 rounded-lg'>
                        <div className='flex w-full justify-between items-center'>
                            <label htmlFor="confirm" className='text-accent text-xs mb-1'>Confirm Password</label>
                            <button type='button' className='font-bold' onClick={() => handleShowPassword(3)}>{ showConfirmed ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            }</button>
                        </div>
                        <input className='bg-transparent outline-none text-sm font-normal' type={showConfirmed ? "text" : "password"} name="confirm" id="confirm" placeholder='Input your confirm password' value={confirmedPwd} onChange={(e) => setConfirmedPwd(e.target.value)} />
                    </div>
                    <div>
                    {loading ? <button type="submit" className=' bg-accent py-4 lg:py-3 w-full md:w-60 rounded-lg text-base font-medium mb-3'><BeatLoader color="#ffffff" loading={loading} aria-label="Loading Spinner" data-testid="loader" size={10} /></button> : <button type="submit" className=' bg-accent py-4 lg:py-3 w-full md:w-60 rounded-lg text-base font-medium mb-3 text-primary'>submit</button>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Changepassword
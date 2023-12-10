"use client"

import { playAudio } from '@/lib/graphcms'
import axios from 'axios'
import { signOut } from 'next-auth/react'
import { FormEvent, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import { toast } from 'react-toastify'

const Changepassword = ({ email }: { email: string}) => {

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
        <div className='col-span-6 lg:col-span-5 pb-28'>
            <div className='flex w-full justify-center'>
                <form action="" onSubmit={(e) => handleSubmit(e)} method="post" className='space-y-8 lg:w-2/3 w-full lg:border lg:border-gray-300 lg:rounded-lg lg:p-10'>
                    <h4 className='font-black mb-10 mt-5 lg:mt-0 text-3xl text-center'>Change Password</h4>
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
    )
}

export default Changepassword
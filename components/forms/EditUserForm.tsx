"use client"

import { playAudio } from '@/lib/graphcms'
import axios from 'axios'
import { signOut } from 'next-auth/react'
import React, { FormEvent, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import { toast } from 'react-toastify'

type Props = {
    id: number
    first: string
    last: string;
    gend: string
}

const EditUserForm = ({ id, first, last, gend }: Props) => {

    const [ firstName, setFirstname ] = useState<string>(first)
    const [ lastName, setLastname ] = useState<string>(last)
    const [ gender, setGender ] = useState<string>(gend);
    const [ loading, setLoading ] = useState<boolean>(false)

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();
        let nameRegex = /^([a-zA-Z ]+)$/;

        if (firstName.trim() == "" || lastName.trim() == "") {
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

        if (gender.trim() == "none") {
            toast.error(`Select your gender!`, {
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

        if(!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
            toast.error(`Name format is invalid!`, {
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
            const { data } = await axios.put(`${process.env.NEXT_PUBLIC_API_ROOT}/user/edit?id=${id}`, { firstname: firstName.toLowerCase(), lastname: lastName.toLowerCase(), gender: gender });
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
            <div className=''>
                <form action="" onSubmit={(e) => handleSubmit(e)} method="post" className='space-y-8 w-full border border-slate-300 rounded-lg px-4 py-4 pb-8 lg:p-10'>
                    <h4 className='font-medium mb-5 mt-5 lg:mt-0 text-2xl text-center'>Update Profile</h4>
                    <div className='flex flex-col bg-slate-200 py-3 px-5 rounded-lg'>
                        <div className='flex w-full justify-between items-center'>
                            <label htmlFor="firstname" className='text-accent text-xs mb-1'>First name</label>
                        </div>
                        <input className='bg-transparent outline-none text-sm font-normal' type={"text"} name="firstname" id="firstname" placeholder='Input your first name' value={firstName} onChange={(e) => setFirstname(e.target.value)} />
                    </div>
                    <div className='flex flex-col bg-slate-200 py-3 px-5 rounded-lg'>
                        <div className='flex w-full justify-between items-center'>
                            <label htmlFor="lastname" className='text-accent text-xs mb-1'>Last name</label>
                        </div>
                        <input className='bg-transparent outline-none text-sm font-normal' type={"text"} name="lastname" id="lastname" placeholder='Input your last name' value={lastName} onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <div className='flex flex-col bg-slate-200 py-3 px-5 rounded-lg'>
                        <label htmlFor="gender" className='text-accent text-xs mb-2 ml-1'>Gender</label>
                        <select name="" id="gender" className='bg-transparent outline-none text-sm font-normal' value={gender} onChange={(e) => setGender(e.target.value)} >
                            <option value="none">None</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className=''>
                        {loading ? <button type="button" className='w-full bg-accent/40 py-4 rounded-lg text-base font-medium mb-3 px-5' disabled><BeatLoader color="#ffffff" loading={loading} aria-label="Loading Spinner" data-testid="loader" size={10} /></button> : <button type="submit" className=' bg-accent py-4 lg:py-3 w-full md:w-60 rounded-lg text-base font-medium mb-3 text-primary'>submit</button>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUserForm
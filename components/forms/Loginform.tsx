'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import BeatLoader from 'react-spinners/BeatLoader';
import { signIn } from 'next-auth/react';
import { playAudio } from '@/lib/graphcms';

const Loginform = () => {
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ visible, setVisible ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async(e: FormEvent) =>  {
        e.preventDefault();
        let emailRegex = /^([a-zA-Z0-9\.\-_]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/;

        if (email.trim() == "" || password.trim() == "") {
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

        if(!emailRegex.test(email)) {
            toast.error(`Email address is invalid!`, {
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

        // send an axios request to check data validity, decrypt password and set cookie
        setLoading(true)
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false
            });
    
            if (res?.error) {
                toast.error(`Email or password is incorrect!`, {
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
                setLoading(false);
                return;
            }
            return router.push('/dashboard');
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
        return;
    }

    return (
        <form className='w-full px-6 sm:w-96 py-14 md:pt-14 md:pb-14 md:bg-primary/20 md:backdrop-blur-lg absolute rounded-lg md:brightness-75 mt-16 md:mt-0 md:border md:border-primary' onSubmit={(e) => handleSubmit(e)}>
            <div>
                <h6 className='font-normal text-center text-primary text-2xl leading-relaxed mb-8'> WELCOME BACK</h6>
                <div className='flex flex-col mb-5'>
                    <label htmlFor="email" className='text-white text-xs mb-2'>Email address</label>
                    <input type="email" className='px-3 py-2 border border-primary rounded-md text-primary bg-transparent outline-none text-sm font-normal placeholder:text-primary/50 placeholder:font-light' name="email" id="email" placeholder='e.g johndoe@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col mb-7'>
                    <div className='flex items-center justify-between pr-1 mb-1'>
                        <label htmlFor="password" className='text-white text-xs mb-1'>Password</label>
                        <button type='button' className='text-primary font-black' onClick={() => setVisible(prev => !prev)}>{visible ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg> : 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>} 
                        </button>
                    </div>
                    <input type={visible ? "text" : "password"} className='px-3 py-2 border border-primary rounded-md text-primary bg-transparent outline-none text-sm font-normal placeholder:text-primary/50 placeholder:font-light' name="password" id="password" placeholder='xxxxxxxxxxxxxx' onChange={(e) => setPassword(e.target.value)} />
                </div>
                {loading ? <button type="button" className='w-full bg-accent/90 py-2 rounded-md text-base font-normal mb-4' disabled><BeatLoader color="#ffffff" loading={loading} aria-label="Loading Spinner" data-testid="loader" size={10} /></button> : <button type="submit" className='w-full bg-accent py-2 rounded-md text-base font-normal mb-4'>Login</button>}
                <p className='text-primary text-xs text-end underline'><Link className='font-xs' href='/forgotpassword'>Forgot your password?</Link></p>
            </div>
        </form>
    )
}

export default Loginform
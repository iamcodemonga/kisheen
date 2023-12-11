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
        await signIn("credentials", {
            email,
            password
        });

        return;

        // if (res?.error) {
        //     toast.error(`Email or Password is incorrect`, {
        //         position: "bottom-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "colored",
        //     });
        //     playAudio('/error.mp3')
        //     setLoading(false);
        //     return;
        // }

        // toast.success(`Welcome back`, {
        //     position: "bottom-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "colored",
        // });
        // playAudio('/livechat.mp3')
        // setLoading(false);
        // router.push('/dashboard');
        // return;
    }

    return (
        <form className='max-w-sm md:max-w-md px-6 md:pt-14 md:pb-14 md:bg-primary/20 md:backdrop-blur-lg absolute rounded-lg md:brightness-75 mt-16 md:mt-0' onSubmit={(e) => handleSubmit(e)}>
            <div>
                <h6 className='font-extrabold text-primary text-base mb-5 leading-relaxed'><strong className='text-accent'>ORDER AND EXPERIENCE</strong> THE BEST NIGERIAN DELICACIES TODAY!.</h6>
                <div className='flex flex-col mb-5'>
                    <label htmlFor="email" className='text-white text-sm mb-1'>Email address</label>
                    <input type="email address" className='px-3 py-2 border-2 border-primary rounded-lg text-primary bg-transparent outline-none' name="email" id="email" placeholder='e.g johndoe@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col mb-7'>
                    <div className='flex items-center justify-between pr-2'>
                        <label htmlFor="password" className='text-white text-sm mb-1'>Password</label>
                        <button type='button' className='text-primary font-black' onClick={() => setVisible(prev => !prev)}>{visible ? "hide" : "show"}</button>
                    </div>
                    <input type={visible ? "text" : "password"} className='px-3 py-2 border-2 border-primary rounded-lg text-primary bg-transparent outline-none' name="password" id="password" placeholder='xxxxxxxxxxxxxx' onChange={(e) => setPassword(e.target.value)} />
                </div>
                {loading ? <button type="button" className='w-full bg-accent/40 py-3 rounded-lg text-lg font-bold mb-3' disabled><BeatLoader color="#ffffff" loading={loading} aria-label="Loading Spinner" data-testid="loader" size={10} /></button> : <button type="submit" className='w-full bg-accent py-3 rounded-lg text-lg font-bold mb-3'>submit</button>}
                <p className='text-primary text-xs text-end'>Forgot password? <Link className='text-accent font-bold' href='/forgotpassword'>click here</Link></p>
            </div>
        </form>
    )
}

export default Loginform
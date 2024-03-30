"use client"

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import BeatLoader from 'react-spinners/BeatLoader';

const ForgotpasswordForm = () => {
    const [ email, setEmail ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(false);
    const router = useRouter();
    const api = process.env.NEXT_PUBLIC_API_ROOT;

    const handleSubmit = async(e: FormEvent) =>  {
        e.preventDefault();
        let emailRegex = /^([a-zA-Z0-9\.\-_]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/;
        // check for empty fields
        if (email.trim() == "") {
            toast.error(`Please, fill in your email!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
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
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(`${api}/password/reset`, { email: email.toLowerCase() });
            if (response.data.error) {
                toast.error(`${response.data.message}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setLoading(false)
                return;
            }
            // send welcome mail message
             const { data } = await axios.post(`/api/send/password`, { email, password: response.data.password });
             if (data.status == "ok") {
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
                setLoading(false);
                router.push('/login');
                return;
             } else {
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
                setLoading(false)
                return;
             }
             
        } catch (error) {
            console.log(error);
        }

        setLoading(false)
        return;
    }

    return (
        <>
            <form className='max-w-sm md:max-w-md px-6 pb-8 pt-12 md:bg-primary/20 md:backdrop-blur-lg absolute rounded-lg brightness-75 hidden' onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h6 className='font-extrabold text-accent text-2xl'>FORGOT PASSWORD?</h6>
                    <p className='text-gray-300 mt-2 mb-6 leading-normal'>We will generate and send new password this e-mail, change the password as soon as you log into your dashboard!</p>
                    <div className='flex flex-col mb-6'>
                        <label htmlFor="email" className='text-primary text-sm mb-1'>Email address</label>
                        <input type="email" className='px-3 py-2 border-2 border-primary rounded-lg text-primary bg-transparent outline-none' name="email" id="email" placeholder='e.g johndoe@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {loading ? <button type="button" className='w-full bg-accent/40 py-3 rounded-lg text-lg font-bold mb-3' disabled><BeatLoader color="#ffffff" loading={loading} aria-label="Loading Spinner" data-testid="loader" size={10} /></button> : <button type="submit" className='w-full bg-accent py-3 rounded-lg text-lg font-bold mb-3'>submit</button>}
                    <p className='text-primary text-xs'>Don't have an account? <Link className='text-accent font-bold' href='/register'>Create account here!</Link></p>
                </div>
            </form>
            <form className='w-full px-6 sm:w-96 py-14 md:pt-14 md:pb-14 md:bg-primary/20 md:backdrop-blur-lg absolute rounded-lg md:brightness-75 mt-16 md:mt-0 md:border md:border-primary' onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h6 className='font-normal text-center text-primary text-2xl leading-relaxed'>FORGOT PASSWORD?</h6>
                    <p className='text-xs text-center mb-5 text-primary/70'>A new password will be sent to this e-mail, you can change it when you login to your dashboard!</p>
                    <div className='flex flex-col mb-5'>
                        <label htmlFor="email" className='text-white text-xs mb-2'>Email address</label>
                        <input type="email" className='px-3 py-2 border border-primary rounded-md text-primary bg-transparent outline-none text-sm font-normal placeholder:text-primary/50 placeholder:font-light' name="email" id="email" placeholder='e.g johndoe@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {loading ? <button type="button" className='w-full bg-accent/90 py-2 rounded-md text-base font-normal mb-4' disabled><BeatLoader color="#ffffff" loading={loading} aria-label="Loading Spinner" data-testid="loader" size={10} /></button> : <button type="submit" className='w-full bg-accent py-2 rounded-md text-base font-normal mb-4'>Submit</button>}
                    <p className='text-primary text-xs font-normal text-center'>Don't have an account?  <Link className='text-accent font-bold' href='/register'>create account</Link></p>
                </div>
            </form>
        </>
    )
}

export default ForgotpasswordForm
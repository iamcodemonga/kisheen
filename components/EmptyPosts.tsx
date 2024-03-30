import React from 'react'
import Image from "next/image"
import Link from 'next/link';

type Props = {
    illustration: string;
    heading: string;
    cta: string;
}

const EmptyPosts = ({ illustration, heading, cta }: Props) => {
    return (
        <section className='w-full h-96 border border-solid border-slate-300 flex justify-center items-center mb-7 lg:mb-0 rounded-lg py-60'>
            <div className="space-y-5">
                <Image src={illustration} alt="order successful" width={100} height={100} className="object-cover block mx-auto" />
                <h5 className='text-lg mb-5 text-center font-light text-slate-500'>{heading}</h5>
                <p className='text-center'>
                    <Link href="/menu" className='py-3 px-5 bg-gray-900 hover:bg-gray-900/90 font-normal rounded-full text-xs text-primary'>{cta}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default EmptyPosts
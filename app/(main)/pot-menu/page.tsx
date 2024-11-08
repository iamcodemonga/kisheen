import Navbar from '@/components/bars/Navbar';
import { getUser } from '@/lib/datacalls';
import { PotMeals, SpecialMeals } from '@/lib/graphcms';
import { TMeal } from '@/types';
import Link from 'next/link'
import { getServerSession } from 'next-auth/next'
import React from 'react'
import axios from 'axios';
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import Image from 'next/image';

type Props = {}

const page = async(props: Props) => {

    // const meals: TMeal[] = await SpecialMeals();
    const potmeals: TMeal[]  = await PotMeals();
    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)
    const [ discount, settings ] = await Promise.all([
        axios(`${process.env.API_ROOT}/settings/discount`),
        axios(`${process.env.API_ROOT}/settings`)
      ])

    return (
        <section>
            <Navbar user={user.profile} allowcart={settings.data.cart} />
            <div className='mt-5'>
                <header className='relative w-full overflow-hidden h-[50vh] rounde-xl'>
                    {/* <img src={meals[0].photo.url} alt="" className='w-full h-full object-cover rounde-2xl' /> */}
                    <div className='w-full h-full bg-gradient-to-tr from-accent/5 to-accent/20 opacity-100 absolute top-0 left-0'></div>
                    <div className='absolute bottom-5 lg:bottom-0 left-0 w-full flex justify-center px-4 mb-20 md:mb-24 lg:mb-24' >
                        {/* <small className='text-accent font-bold text-xs uppercase px-3 py-2 rounded-xl bg-gray-950'>Exclusive meal</small> */}
                        <div className='max-w-xl'>
                            <div className='flex justify-center'>
                                <Link className='mr-2 text-accent font-semibold' href={"/"}>Home</Link> / <Link className='ml-2 text-gray-500' href={'/pot-menu'}>Menu</Link>
                                {/* <small className='text-white font-bold text-[10px] uppercase rounded-xl bg-gray-950 px-3 py-1 text-center'>Full-pot menu</small> */}
                            </div>
                            <h2 className='font-normal text-gray-800 text-3xl md:text-5xl mb-3 mt-2 leading-snug md:leading-tight text-center capitalize'>Full pot menu</h2>
                            {/* <p className='font-normal text-gray-400 text-sm md:text-base mb-7 mt-0 leading-snug md:leading-tight text-center'>Perfect for busy professionals, families, business meetings, or friends' gatherings—enjoy a premium, stress-free dining experience with every pot.</p>
                            <Link href={"/menu"} className='inline-block px-7 py-3 rounded-full bg-accent hover:bg-primary hover:text-accent transition-all text-primary font-medium text-base'>See menu <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </Link> */}
                        </div>
                    </div>
                </header>
                <div className='w-full flex justify-center mt-10'>
                    <div className='max-w-xl'>
                        {/* <div className='flex justify-center'>
                            <small className='text-gray-900 font-bold text-[10px] uppercase rounded-xl bg-accent px-3 py-1 text-center'>Full-pot menu</small>
                        </div> */}
                        <p className='text-center mx-4'>Exquisite Full-Pot Meals Delivered Fresh to Your Doorstep</p>
                    </div>
                </div>
                <div className='w-full flex justify-center mt-10 px-3 lg:px-20 mb-20'>
                    <div className='grid md:grid-cols-3 gap-x-2 gap-y-7'>
                        {potmeals ? potmeals.map((meal:TMeal) => <Link href={`/meal/${meal.slug}`} className='relative overflow-hidden' key={meal.id}>
                            <div className='relative rounded-xl overflow-hidden'>
                                <div>
                                    <Image  alt="food" className='w-full object-cover min-h-[400px] lg:min-h-[400px]' src={meal.photo.url} width={800} height={1000} />
                                </div>
                                <div className='w-full h-full bg-gradient-to-b from-transparent to-black/50 absolute top-0 left-0'></div>
                                <span className='absolute top-0 left-0 font-normal text-base rounded-tl-xl text-primary space-x-3 bg-green-700 pt-2 pb-1 px-4'>ready in 5h - 24h</span>
                                {/* <div className='w-full absolute bottom-0 left-0 py-10 px-4'>
                                    <span className='font-medium text-lg rounded-lg text-primary space-x-3 bg-green-700 pt-2 pb-1 px-4'>&#8358;{meal.priceSm?.toLocaleString()} - &#8358;{meal.priceXl?.toLocaleString()}</span>
                                </div> */}
                            </div>
                            <h1 className='text-xl lg:text-3xl font-normal mt-4 mb-1 ml-2'>{meal.title}</h1>
                            <p className='text-sm text-green-700 ml-2'>&#8358;{meal.priceSm?.toLocaleString()} — &#8358;{meal.priceXl?.toLocaleString()}</p>
                        </Link>) : null}
                    </div>
                </div>
                {/* <div className='w-full flex justify-center mt-16 lg:mt-20 mb-32 lg:mb-40'>
                    <button type="button" className='bg-gray-900 text-white rounded-full py-3 px-7 text-sm'>Load more</button>
                </div> */}
            </div>
        </section>
    )
}

export default page
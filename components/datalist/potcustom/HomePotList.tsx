import { PotMeals } from '@/lib/graphcms';
import { TMeal } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {}

const HomePotList = async(props: Props) => {

    const meals: TMeal[]  = await PotMeals();

    return (
        <section className='w-full'>
            <section className='w-full px-4 lg:px-20'>
                <div className='w-full flex justify-center mt-20 lg:mt-36'>
                    <div className='max-w-xl px-4 mb-10 md:mb-10 lg:mb-10 lg:ml-20' >
                        <div className='flex justify-center'>
                            <small className='text-accent font-bold text-[14px] uppercase text-center'>Our Menu 🍴</small>
                        </div>
                        <h2 className='font-normal text-black text-3xl md:text-5xl mb-3 mt-2 leading-snug md:leading-tight text-center capitalize'>Tailor your Taste</h2>
                        <p className='font-normal text-gray-600 text-base md:text-base mb-3 mt-2 leading-snug md:leading-tight text-center'>Customize your meal to match your cravings—choose your ingredients, flavors, and portions for a truly personalized dining experience.</p>
                        <div className='flex justify-center mb-10 mt-8'>
                            <Link href={"/pot-menu"} className='inline-block px-10 py-4 rounded-full bg-black hover:bg-accent hover:text-white transition-all text-accent font-medium'>See full menu <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-x-2 gap-y-7'>
                    {meals ? meals.map((meal:TMeal) => <Link href={`/meal/${meal.slug}`} className='relative overflow-hidden' key={meal.id}>
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
            </section>
            <div className='bg-accent/5 px-4 lg:px-20 pt-80 pb-28 lg:pb-52 -mt-96 lg:-mt-72'>
                <h5 className='text-accent uppercase font-bold text-center mb-28 mt-40 lg:mt-28 text-base'>Why choose us</h5>
                <div className="grid lg:grid-cols-3 gap-x-40 gap-y-10">
                    <div className=''>
                        <div className='block'>
                            <img src="food.png" alt="" className='h-60 mx-auto'/>
                        </div>
                        <h1 className='text-center text-3xl font-medium pb-4'>Quality Meals</h1>
                        <p className='text-center text-gray-500 font-normal'>Nigerian delicacies cooked and served with no compromise on quality. </p>
                    </div>
                    <div className=''>
                        <div className="block">
                            <img src="payment.png" alt="" className='h-60 mx-auto'/>
                        </div>
                        <h1 className='text-center text-3xl font-medium pb-4'>Flexible Payment</h1>
                        <p className='text-center text-gray-500 font-normal'>We offer a range of payment options including payment on delivery.</p>
                    </div>
                    <div className=''>
                        <div className="block">
                            <img src="delivery.png" alt="" className='h-60 mx-auto'/>
                        </div>
                        <h1 className='text-center text-3xl font-medium pb-4'>Quick Delivery</h1>
                        <p className='text-center text-gray-500 font-normal'>Fast, accurate and flexible delivery methods with a happy ending.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePotList
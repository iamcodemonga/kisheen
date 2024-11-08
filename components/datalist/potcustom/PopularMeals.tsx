import { PotMeals } from '@/lib/graphcms';
import { TMeal } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {}

const PopularMeals = async(props: Props) => {

    const meals: TMeal[]  = await PotMeals();

    return (
        <section className='w-full px-4 lg:px-20'>
            <div className='w-full flex justify-center mt-20'>
                <div className='max-w-xl px-4 mb-10 md:mb-10 lg:mb-10 lg:ml-20' >
                    <div className='flex justify-center'>
                        <small className='text-accent font-bold text-[10px] uppercase rounded-xl bg-gray-900 px-3 py-2 text-center'>Best-selling packages</small>
                    </div>
                    <h2 className='font-normal text-black text-3xl md:text-5xl mb-3 mt-2 leading-snug md:leading-tight text-center'>Popular Choice✌</h2>
                    <p className='font-normal text-gray-600 text-sm lg:text-base md:text-base mb-0 lg:mb-3 mt-2 leading-snug md:leading-tight text-center'>Trusted by <span className='font-black text-accent'>100+</span> customers with over <span className='font-black text-accent'>4000</span> pots delivered.</p>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2'>
                {meals ? meals.map((meal:TMeal) => <Link href={`/meal/${meal.slug}`} className='relative overflow-hidden rounded-xl' key={meal.id}>
                    <div>
                        <Image  alt="food" className='w-full object-cover min-h-[250px] lg:min-h-[400px]' src={meal.photo.url} width={800} height={1000} />
                    </div>
                    <div className='w-full h-full bg-gradient-to-b from-transparent to-black/80 absolute top-0 left-0'></div>
                    <span className='absolute top-0 left-0 font-normal text-xs rounded-tl-xl text-primary space-x-3 bg-green-700 pt-2 pb-1 px-4'>ready in 5h - 24h</span>
                    <div className='w-full absolute bottom-0 left-0 py-5 px-2'>
                        <h1 className='text-xl lg:text-3xl font-normal text-primary mb-0'>{meal.title}</h1>
                        <span className='font-medium text-xs text-green-500 space-x-3'>&#8358;{meal.priceSm?.toLocaleString()} — &#8358;{meal.priceXl?.toLocaleString()}</span>
                    </div>
                </Link>) : null}
            </div>
        </section>
    )
}

export default PopularMeals
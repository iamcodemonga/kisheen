import Link from 'next/link'
import React, { FC } from 'react'
import Image from 'next/image'

const Potservices: FC<any> = ({ meals }) => {
    return (
        <section className='container w-full py-20'>
            <div className='md:flex items-center justify-between mb-16'>
                <h3 className='font-bold text-5xl md:text-5xl xl:text-9xl gap-x-5'>Pot Services</h3>
                <p className='md:max-w-sm mt-8 md:mt-0 mb-10'> Ducimus, repudiandae perspiciatis ratione soluta ad molestiae tempora odio ut saepe quis voluptatem non suscipit, labore beatae! Dolorum sapiente cupiditate tempore. Ducimus.</p>
            </div>
            <div className='grid md:grid-cols-2 gap-x-6 gap-y-12'>
                {meals && meals.map((meal:any, index:number) => <Link href={`/meal/${meal.slug}`} className='pot-card relative overflow-hidden rounded-xl'>
                    <div>
                        {/* <img  alt="food" className='w-full object-cover' src={meal.photo.url} /> */}
                        <Image  alt="food" className='w-full object-cover' src={meal.photo.url} width={800} height={1000} />
                    </div>
                    <div className='w-full h-full bg-black/50 absolute top-0 left-0'></div>
                    <span className='absolute top-0 left-0 font-extrabold text-base rounded-tl-xl text-gray-900 space-x-3 bg-green-700 pt-2 pb-1 px-4'>ready in 5h - 24h</span>
                    <div className='w-full absolute bottom-0 left-0 py-10 px-4'>
                        <span className='font-extrabold text-lg rounded-lg text-gray-900 space-x-3 bg-green-700 pt-2 pb-1 px-4'>&#8358;{meal.priceSm} - &#8358;{meal.priceXl}</span>
                        <h1 className='text-3xl lg:text-6xl font-bold text-primary mt-2'>{meal.title}</h1>
                    </div>
                </Link>)}
            </div>
        </section>
    )
}

export default Potservices
"use client"

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Link from 'next/link';

type Props = {
    title: string;
    photo: string;
    slug: string;
}

const SwiperList = ({ meals }: { meals: Array<{title: string, photo: { url: string }, slug: string}> }) => {
    return (
        <Swiper
            rewind={true}
            pagination={{
                dynamicBullets: true,
                clickable: true
            }}
            effect='fade'
            autoplay={{
            delay: 10000,
            disableOnInteraction: true,
            }}
            modules={[Pagination, Autoplay, EffectFade]}
            className="mySwiper">
            {meals.length > 0 ? meals.map((meal, index) => <SwiperSlide>
                <header className='relative w-full overflow-hidden' style={{ height: '100vh'}}>
                    <img src={meal.photo.url} alt="" className='w-full h-full object-cover' />
                    <div className='w-full h-full bg-black opacity-50 absolute top-0 left-0'></div>
                    <div className='absolute bottom-0 left-0 max-w-2xl px-4 mb-24 md:mb-24 lg:mb-32 lg:ml-20' >
                        <small className='text-accent font-bold text-xs uppercase'>special meal</small>
                        <h2 className='font-normal text-primary text-3xl md:text-5xl mb-10 mt-2 leading-snug md:leading-tight'>{meal.title}</h2>
                        {/* <Link href={"meal/"+meals[randomNumber].slug} className='px-10 py-4 rounded-3xl bg-primary hover:bg-accent hover:text-white transition-all text-accent font-medium'>Order now</Link> */}
                        <Link href={"meal/"+meal.slug} className='inline-block px-10 py-4 rounded-full bg-primary hover:bg-accent hover:text-white transition-all text-accent font-medium'>Order now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </header>
            </SwiperSlide>) : null}
        </Swiper>
    )
}

export default SwiperList
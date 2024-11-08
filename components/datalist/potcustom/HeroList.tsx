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

const HeroList = ({ meals }: { meals: Array<{title: string, photo: { url: string }, slug: string}> }) => {
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
            {meals.length > 0 ? meals.map((meal, index) => <SwiperSlide key={meal.slug}>
                <header className='relative w-full overflow-hidden h-[100vh]'>
                    <img src={meal.photo.url} alt="" className='w-full h-full object-cover' />
                    <div className='w-full h-full bg-black opacity-80 absolute top-0 left-0'></div>
                    <div className='absolute bottom-0 left-0 max-w-xl px-4 mb-28 md:mb-28 lg:mb-28 lg:ml-20' >
                        {/* <small className='text-accent font-bold text-xs uppercase px-3 py-2 rounded-xl bg-gray-950'>Exclusive meal</small> */}
                        <h2 className='font-normal text-primary text-3xl md:text-4xl mb-3 mt-2 leading-snug md:leading-tight'>Exquisite Full-Pot Meals Delivered Fresh to Your Doorstep</h2>
                        <p className='font-normal text-gray-400 text-sm md:text-base mb-7 mt-0 leading-snug md:leading-tight'>Perfect for busy professionals, families, business meetings, or friends' gatherings—enjoy a premium, stress-free dining experience with every pot.</p>
                        {/* <Link href={"meal/"+meals[randomNumber].slug} className='px-10 py-4 rounded-3xl bg-primary hover:bg-accent hover:text-white transition-all text-accent font-medium'>Order now</Link> */}
                        <Link href={"/pot-menu"} className='inline-block px-7 py-3 rounded-full bg-accent hover:bg-primary hover:text-accent transition-all text-primary font-medium text-base'>See menu <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </header>
            </SwiperSlide>) : null}
        </Swiper>
    )
}

export default HeroList
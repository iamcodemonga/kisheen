"use client"

import Link from 'next/link'
import Image from 'next/image'
import { TMeal } from '@/types'

type Props = {
    meals: TMeal[]
}

const Slidermenu = ({ meals }: Props) => {

    const handleSlideRight = (): void => {
        const container = document.querySelector('.slider-container') as HTMLElement;
        const containerWidth = container.getBoundingClientRect().width;
        container.scrollLeft += containerWidth;
        // container.scrollLeft += 300;
    };
    
    const handleSlideLeft = (): void => {
        const container = document.querySelector('.slider-container') as HTMLElement;
        const containerWidth = container.getBoundingClientRect().width;
        container.scrollLeft -= containerWidth;
        // container.scrollLeft -= 300;
    };

    return (
        <section>
            <div className='lg:flex mt-14 lg:mt-36 w-full'>
                <div className='lg:block flex items-center justify-between lg:max-w-sm px-4 lg:px-8 lg:pl-20 mb-7 w-full'>
                    <h3 className='font-black text-xl md:text-3xl lg:text-5xl my-0 lg:mt-10 leading-normal'><span className='hidden lg:block'>Featured Delicacies</span><span className='lg:hidden'>Featured Meals</span></h3>
                    <p className='hidden lg:block lg:my-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, iure?</p>
                    <Link href="/menu" className='btn-link'>View Menu</Link>
                </div>
                <div className='slider-container flex gap-3 lg:gap-6 overflow-x-auto w-full px-4 relative pb-3 scroll-smooth'>
                    {meals ? meals.map((meal: TMeal, index: number) => <div className='slider-card relative' key={meal.id}>
                        <Link href={"/meal/"+meal.slug}>
                            {/* <img className='object-cover h-64 lg:h-96 w-full rounded-xl' style={{}} src={meal.photo.url} alt="food"/> */}
                            <Image className='object-cover h-64 lg:h-96 w-full rounded-xl bg-gray-200' src={meal.photo.url} width={500} height={700} alt="food"/>
                        </Link>
                        <h4 className='mb-1 mt-5 text-lg md:text-2xl font-bold'><Link href={meal.slug}>{meal.title}</Link></h4>
                        <div className='flex justify-between items-center w-full'>
                            <div className='space-x-2'>
                                <span className='text-red-700 line-through text-sm lg:text-sm'>&#8358;{meal.price}</span><span className='text-green-700 text-sm lg:text-sm'>&#8358;{meal.price*(1-0.37)}</span>
                            </div>
                        </div>
                        <button className='px-4 py-3 bg-primary/30 backdrop-blur-md text-primary rounded-xl hover:bg-green-600 flex items-center justify-start absolute bottom-1/4 mb-2 lg:-mb-6 right-0 mr-2 text-sm' type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black">
                                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                            </svg>
                        </button>
                        <span className='px-2 pt-2 pb-1 bg-green-700 absolute top-0 mt-2 rounded-lg left-0 ml-2 text-xs text-black font-bold'>37% off
                        </span>
                        {!meal.quantity && <span className='px-4 pt-2 pb-1 bg-red-500 absolute top-0 mt-0 right-0 -mr-3 text-sm text-primary font-black uppercase rotate-12'>Sold out!</span>}
                    </div>) : null}
                </div>
            </div>
            <p className='space-x-5 text-end lg:mb-0 mt-2 lg:mt-12 lg:mr-10 pr-10'>
                <button type="button" className='p-3 bg-accent hover:bg-gray-800 transition-all rounded-full' onClick={handleSlideLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </button>
                <button type="button" className='p-3 bg-accent hover:bg-gray-800 transition-all rounded-full' onClick={handleSlideRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </p>
        </section>
    )
}

export default Slidermenu
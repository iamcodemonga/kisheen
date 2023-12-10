"use client"

import Link from 'next/link'
import Image from 'next/image'
import { TCartItem, TMeal } from '@/types'
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/cartSlice';
import SwipeControllers from '../SwipeControllers'

const Slidermenu = async({ meals }: { meals: TMeal[]}) => {

    const dispatch = useDispatch()

    const handleAddToCart = (food: TCartItem) => {
        dispatch(addToCart(food));
        return;
    }

    return (
        <section>
            <div className='lg:flex mt-14 lg:mt-36 w-full'>
                <div className='lg:block flex items-center justify-between lg:max-w-sm px-4 lg:px-8 lg:pl-20 mb-7 w-full'>
                    <h3 className='font-black text-xl md:text-3xl lg:text-5xl my-0 lg:mt-10 leading-normal'><span className='hidden lg:block'>Featured Delicacies</span><span className='lg:hidden'>Featured Meals</span></h3>
                    <p className='hidden lg:block lg:my-6'>Make your choice from our list of delicious meals and get it delivered to your doorstep, today.</p>
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
                        <span className='px-2 pt-2 pb-1 bg-green-700 absolute top-0 mt-2 rounded-lg left-0 ml-2 text-xs text-black font-bold'>37% off
                        </span>
                        {!meal.quantity ? <span className='px-4 pt-2 pb-1 bg-red-500 absolute top-0 mt-0 right-0 -mr-3 text-sm text-primary font-black uppercase rotate-12'>Sold out!</span> : <button className='px-6 py-2 bg-white/60 backdrop-blur-md text-primary rounded-lg hover:bg-accent flex items-center justify-start absolute top-0 right-0 mt-2 mr-2' type='button' onClick={() => handleAddToCart({id: meal.id, photo: meal.photo.url, name: meal.name, title: meal.title, slug: meal.slug, price: meal.price, quantity: meal.quantity, cartQty: 1, type: meal.type, category: meal.category, combo: meal.combo?.split(',')[0], comboList: meal.combo?.split(','), meat: meal.meat?.split(',')[0], meatList: meal.meat?.split(',')})}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
                            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                          </svg>
                        </button>}
                    </div>) : null}
                </div>
            </div>
            <SwipeControllers />
        </section>
    )
}

export default Slidermenu
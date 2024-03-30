"use client"

import Link from 'next/link'
import Image from 'next/image'
import { TCartItem, TMeal } from '@/types'
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/cartSlice';

type Props = {}

const Bigbites = async({ meals, allowcart, discount }: { meals: TMeal[], allowcart: boolean, discount: number }) => {

    const dispatch = useDispatch();

    const handleAddToCart = (food: TCartItem) => {
        dispatch(addToCart(food));
        return;
    }

    return (
        <section className='w-full bg-gray-900 mt-20 mb-20 pb-28 pt-20'>
            <section className='px-4 lg:px-20 py-20'>
                <div className='w-full md:flex items-center justify-between mb-14 md:mb-20'>
                    <h3 className='font-bold text-5xl md:text-5xl xl:text-9xl gap-x-5 text-primary'>Big <span className='text-accent'>Bites</span></h3>
                </div>
                <div className='grid md:grid-cols-4 gap-x-6 gap-y-12'>
                    {meals ? meals.map((meal:TMeal) => <div className='relative' key={meal.id}>
                        <Link href={"/meal/"+meal.slug} className=''>
                            <Image className='object-cover h-80 lg:h-96 w-full rounded-full border border-accent bg-transparent p-[4px] z-10' src={meal.photo.url} width={500} height={700} alt="food"/>
                        </Link>
                        <div className=' shadow-gray-300 w-48 block absolute bottom-0 !bg-primary !z-auto py-3 px-3 rounded-tl-2xl ml-5 rounded-br-2xl'>
                            <h4 className='text-lg md:text-lg font-normal'><Link href={meal.slug}>{meal.title}</Link></h4>
                            <div className='flex justify-between items-center w-full'>
                                <div className='space-x-2'>
                                    <span className={`${discount > 0 ? "text-red-700 line-through" : "text-green-700"} text-sm lg:text-sm font-normal`}>&#8358;{meal.price.toLocaleString()}</span>{discount > 0 ?<span className='text-green-700 text-sm lg:text-sm font-normal'>&#8358;{(meal.price*(1-(discount/100))).toLocaleString()}</span> : null}
                                </div>
                            </div>
                        </div>
                        
                        {discount > 0 ? <span className='px-2 pt-2 pb-1 bg-green-700 absolute top-0 mt-2 rounded-lg left-0 ml-10 text-xs text-primary font-normal'>{discount}% off
                        </span> : null}
                        {!meal.quantity ? <span className='px-4 pt-2 pb-1 bg-red-500 absolute top-0 mt-0 right-0 -mr-3 text-sm text-primary font-black uppercase rotate-12'>Sold out!</span> : <button className={`px-6 py-2 bg-white/60 backdrop-blur-md text-primary rounded-lg hover:bg-accent ${allowcart ? "flex" : "hidden"} items-center justify-start absolute top-0 right-0 mt-2 mr-10`} type='button' onClick={() => handleAddToCart({id: meal.id, photo: meal.photo.url, name: meal.name, title: meal.title, slug: meal.slug, price: meal.price, quantity: meal.quantity, cartQty: 1, type: meal.type, category: meal.category, combo: meal.combo?.split(',')[0], comboList: meal.combo?.split(','), meat: meal.meat?.split(',')[0], meatList: meal.meat?.split(',')})}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black">
                            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                          </svg>
                        </button>}
                    </div>) : null}
                </div>
            </section>
        </section>
    )
}

export default Bigbites
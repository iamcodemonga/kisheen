"use client"

import Link from 'next/link'
import { TCartItem, TMeal } from '@/types'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/features/cartSlice'

type Props = {
    meals: TMeal[];
    type: string;
    allowcart: boolean;
    discount: number;
}

const RecommendedMeals = ({ meals, type, allowcart, discount }: Props) => {

    const dispatch = useDispatch();

    const handleAddToCart = (eatable: TCartItem) => {
        dispatch(addToCart(eatable));
        return;
    }

    return (
        <section className='px-4 lg:px-20 py-6 lg:pt-0 lg:pb-32 col-span-6 lg:col-span-5'>
            <h2 className='mb-7 text-2xl md:text-3xl font-normal'>Similar Meals</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 lg:gap-y-14'>
                {meals && meals.map((meal:TMeal, index:number) => <div className='card w-full relative' key={meal.id}>
                    <Link href={`/meal/${meal.slug}`}>
                        <img className='object-cover rounded-xl' src={meal.photo.url} alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
                    </Link>
                    <h4 className='mt-4 mb-1 text-xl font-normal'><Link href={`meal/${meal.slug}`}>{meal.title}</Link></h4>
                    <div className='flex justify-between items-center w-full'>
                        <div className='space-x-3'>
                            {type == "pot" ? <span className='text-green-700 font-normal text-sm'>&#8358;{`${meal.priceSm?.toLocaleString()}`} &ndash; &#8358;{`${meal.priceXl?.toLocaleString()}`}</span> : <>
                                <span className={`${discount > 0 ? "text-red-700 line-through" : "text-green-700"} text-sm lg:text-sm font-normal`}>&#8358;{meal.price.toLocaleString()}</span>{discount > 0 ?<span className='text-green-700 text-sm lg:text-sm font-normal'>&#8358;{(meal.price*(1-(discount/100))).toLocaleString()}</span> : null}
                            </>}
                        </div>
                    </div>
                    {type != "pot" ? <span className={`px-2 pt-2 pb-1 bg-green-700 absolute top-0 mt-2 rounded-lg left-0 ml-2 text-xs text-primary font-normal ${discount < 1 ? "hidden" : null}`}>{discount}% off</span> : null}
                    {meal.quantity ? type != "pot" ? <button className={`px-6 py-2 bg-white/60 backdrop-blur-md text-primary rounded-lg hover:bg-accent ${allowcart ? "flex" : "hidden"} items-center justify-start absolute top-0 right-0 mt-2 mr-2`} type='button' onClick={() => handleAddToCart({id: meal.id, photo: meal.photo.url, name: meal.name, title: meal.title, slug: meal.slug, price: meal.price, quantity: meal.quantity, cartQty: 1, type: meal.type, category: meal.category, combo: meal.combo?.split(',')[0], comboList: meal.combo?.split(','), meat: meal.meat?.split(',')[0], meatList: meal.meat?.split(',')})}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                    </button> : null : <span className='px-5 pt-3 pb-2 bg-red-500 absolute top-0 mt-0 right-0 -mr-3 text-base text-primary font-normal uppercase rotate-12'>Sold out!</span>
                    }
                </div>)}
            </div>
        </section>
    )
}

export default RecommendedMeals
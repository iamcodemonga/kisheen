"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import MockTray from '@/components/loaders/MockTray'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from '@/components/EmptyCart'
import { TCartItem } from '@/types'
import { addToCart, changeCombo, changeMeat, deleteMeal, initializeCart, removeFromCart } from '@/features/cartSlice'
import MockCartSummary from '@/components/loaders/MockCartSummary'
import MockCartList from '../loaders/MockCartList'

type TUserProps = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    password?: string;
}

const CartSection = ({ discount, checkout }:{ discount: number, checkout: boolean }) => {

    const [ active, setActive ] = useState<number[]>([])
    const dispatch = useDispatch();
    const items = useSelector((state: { cart: { items: TCartItem[] }}) => state.cart.items);
    const amount = useSelector((state: { cart: { amount: number }}) => state.cart.amount);
    const pending = useSelector((state: { cart: { loading: boolean }}) => state.cart.loading);

    const handleOptions = (index: number) => {
        if(active.includes(index)) {
            setActive(prev => prev.filter(number => number != index));
            return;
        }
        setActive(prev => [...prev, index]);
        return;
    }

    const handleIncrease = (mealInfo: TCartItem) => {
        dispatch(addToCart(mealInfo))
        return;
    }

    const handleDecrease = (mealInfo: TCartItem) => {
        dispatch(removeFromCart(mealInfo))
        return;
    }

    const handleDeleteMeal = (mealInfo: TCartItem) => {
        dispatch(deleteMeal(mealInfo))
        return;
    }

    const handleChangeCombo = (mealInfo: TCartItem) => {
        dispatch(changeCombo(mealInfo))
        return;
    }

    const handleChangeMeat = (mealInfo: TCartItem) => {
        dispatch(changeMeat(mealInfo))
        return;
    }

    return (
        <section className='w-full px-4 lg:px-20 py-10 lg:py-12 mt-0 hidde'>
            <h3 className='mt-0 font-normal text-2xl md:text-4xl mb-5 lg:mb-5'>FOOD CART ({ items.length })</h3>
            <div className='grid grid-cols-12 lg:gap-x-12 gap-y-5 hidde'>
                <div className='col-span-12 lg:col-span-8'>
                    {!pending ? items.length >= 1 ? items.map((meal: TCartItem, index: number) => <div className='border-t md:pt-8 mt-6 w-full' key={index}>
                        <div className='flex gap-x-5 overflow-x-hidde w-full'>
                            <img className='object-cover w-12 h-12 md:w-20 md:h-20 mt-5 rounded-lg'  src={meal.photo} alt="cart-image" />
                            <div className='w-full'>
                                <Link href={`/meal/${meal.slug}`} className='block mt-5 mb-0 font-normal overflow-ellipsis break-all text-lg lg:text-xl w-full'>{meal.title}</Link>
                                <div className='flex items-center justify-between mt-2 mb-3 md:mb-5'>
                                    <div className='space-x-3'>
                                        <span className={`${discount > 0 ? "text-red-700 line-through" : "text-green-700"} text-sm font-normal`}>&#8358;{(Number(meal.price)*Number(meal.cartQty)).toLocaleString()}</span>
                                        {discount > 0 ? <span className='text-green-700 text-sm font-normal'>&#8358;{((Number(meal.price)*Number(meal.cartQty))*(1-(discount/100))).toLocaleString()}</span> : null}
                                    </div>
                                    <button type='button' className='text-red-700 font-normal px-4 py-1 rounded-full flex items-center text-sm' onClick={() => handleDeleteMeal({ id: meal.id })}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>Remove
                                    </button>
                                </div>
                                <form action="" method="post" className= {active.includes(index) ? 'mb-5 md:flex items-center space-y-5 md:space-y-0 md:space-x-5 w-full' : 'hidden mb-5 md:flex items-center space-y-5 md:space-y-0 md:space-x-5 w-full'}>
                                    <div className='flex items-center space-x-4'>
                                        <label htmlFor="" className='font-normal text-sm text-accent'>Quantity</label>
                                        <div className='bg-gray-200 px-3 py-2 flex justify-between'>
                                            <button type="button" className='px-2 text-gray-950' onClick={() => handleDecrease({ id: meal.id,  price: meal.price })}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                            <input type="number" name="" id="" className='text-center bg-transparent outline-none w-full sm:w-20 md:w-12 lg:w-20' value={meal.cartQty} disabled />
                                            <button type="button" className='px-2 text-green-700' onClick={() => handleIncrease({id: meal.id, price: meal.price, quantity: meal.quantity})}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='w-ful flex items-center justify-start md:justify-between space-x-4'>
                                        <label htmlFor="" className='font-normal text-sm text-accent mr-5 md:mr-0'>Combo</label>
                                        <div className='bg-gray-200 px-3 py-2 w-full'>
                                            <select name="" id="" className='bg-transparent outline-none w-full sm:w-32 md:w-24 lg:w-32 text-center' value={meal.combo} onChange={(e) => handleChangeCombo({ id: meal.id, combo: e.target.value })}>
                                                {meal.comboList ? meal.comboList.map((combination: string) => <option value={combination}>{combination}</option>) : null}
                                                {/* <option value="">Fufu</option>
                                                <option value="">Semovita</option> */}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='w-ful flex items-center justify-start md:justify-between space-x-4 w-full'>
                                        <label htmlFor="" className='font-normal text-sm text-accent mr-8 md:mr-0'>Meat</label>
                                        <div className='bg-gray-200 px-3 py-2 w-full'>
                                            <select name="" id="" className='bg-transparent outline-none !w-full sm:w-32 md:w-24 lg:w-32 text-center' value={meal.meat} onChange={(e) => handleChangeMeat({ id: meal.id, meat: e.target.value })}>
                                                {meal.meatList ? meal.meatList.map((choppable: string) => <option value={choppable}>{choppable}</option>) : null}
                                                {/* <option value="">Goat</option>
                                                <option value="">Pork</option> */}
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='md:hidden mt-0 mb-2' >
                            <button type="button" className='w-full flex justify-center items-center gap-2 py-2 px-3' onClick={() => handleOptions(index)}>
                                {!active.includes(index) ? 
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>show options
                                    </> : 
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                        </svg>hide options
                                    </>
                                }
                                
                            </button>
                        </div>
                    </div>) : <EmptyCart /> : <MockCartList />}
                </div>
                <div className='col-span-12 lg:col-span-4'>
                    <div className='border border-slate-300 p-6 lg:sticky lg:top-32 rounded-lg'>
                        <h4 className='mt-0 font-normal uppercase text-2xl mb-5'>cart summary</h4>
                        {!pending ? <div className='space-y-0'>
                            <div className='flex items-center justify-between'>
                                <p className='text-gray-700'>Amount</p>
                                <p>&#8358;{amount.toLocaleString()}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-gray-700'>Discount <span className='text-green-600'>({discount}%)</span></p>
                                <p className='text-green-600 text-base'> - &#8358;{(amount*(discount/100)).toLocaleString()}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='font-medium'>sub-total</p>
                                <p>&#8358;{(amount*(1-(discount/100))).toLocaleString()}</p>
                            </div>
                            <div className='space-y-4'>
                                {items.length >= 1 ? checkout ? <Link href="/checkout" className='block text-center w-full py-3 bg-gray-950 hover:text-accent font-normal text-primary'>Proceed to checkout</Link> : <button type="button" className='block text-center w-full py-3 bg-gray-950 hover:text-accent font-normal text-primary'>Proceed to checkout</button> : <button type="button" className='block text-center w-full py-3 bg-gray-950 hover:text-accent font-normal text-primary'>Proceed to checkout</button>}
                            </div>
                        </div> : <MockCartSummary />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartSection
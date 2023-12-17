"use client"

import React, { useState } from 'react'
import MockPostGrid from '../loaders/MockPostGrid';
import EmptyPosts from '../EmptyPosts';
import { MyOrders } from '@/lib/graphcms';

type TMyOrders = {
    photo: string;
    name: string;
    amount: number;
    receipt: string;
    pending: boolean;
    customerId: string;
    email: string;
    quantity: number;
}

const Mealorders = ({ orders, email }: { orders: TMyOrders[]; email: string }) => {
    const [ food, setFood ] = useState<TMyOrders[]>(orders)
    const [ limit, setLimit ] = useState<number>(6)
    const [ loading, setLoading ] = useState<{ page: boolean, more: boolean }>({ page: false, more: false })

    const handleMore = async() => {
        setLoading(prev => {
          return { ...prev, more: true }
        })
    
        setLimit(prev => prev+3)
        const newMeal = await MyOrders(email, 3, limit);
        setFood((prev: TMyOrders[]) => {
          return [...prev, ...newMeal]
        });
    
        setLoading(prev => {
          return { ...prev, more: false }
        })
        return;
    
      }

    return (
        <section className='col-span-6 lg:col-span-5 min-w-full pb-10'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 lg:gap-y-14'>
            {!loading.page ? food.length > 0 ? food.slice(0, limit).map((meal:TMyOrders, index: number) => <div className='card w-full relative' key={index}><div><img className='object-cover rounded-xl' src={meal.photo} alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
                </div>
                <h4 className='mt-4 mb-0 text-lg font-bold'>{meal.name}</h4>
                <small className='text-gray-500'>RefNo: {meal.receipt}</small>
                <div className='flex justify-between items-center w-full mt-1'>
                    <div className='space-x-3'><span className='text-green-700'>&#8358;{meal.amount.toLocaleString()} (Qty - {meal.quantity})</span>
                    </div>
                </div>
                {meal.pending ? <span className='px-10 pt-3 pb-2 bg-red-500 absolute top-0 -mt-3 right-0 -mr-3 text-sm text-primary font-black uppercase rotate-0'>Pending</span> : <span className='px-5 pt-3 pb-2 bg-green-700 absolute top-0 mt-0 right-0 -mr-3 text-sm text-primary font-black uppercase rotate-12'>Delivered</span>}</div>): null : <MockPostGrid list={[1, 2, 3, 4, 5, 6]} />}
            {loading.more ? <MockPostGrid list={[1, 2, 3]} /> : null}
            </div>
            {food.length > 0 ? null : <EmptyPosts heading="You haven't made any order yet!" cta="Make order?" />}
            <p className='text-center mt-10 md:mt-14 lg:mt-12 mb-16'>{limit <= food.length ? <button type='button' className='px-8 py-3 text-base bg-gray-900 font-bold rounded-full text-primary' onClick={() => handleMore()}>Load more</button> : null}</p>
        </section>
    )
}

export default Mealorders
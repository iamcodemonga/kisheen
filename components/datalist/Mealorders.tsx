"use client"

import React, { useState } from 'react'
import MockPostGrid from '../loaders/MockPostGrid';
import EmptyPosts from '../EmptyPosts';
import axios from 'axios';

type TMyOrders = {
    photo: string;
    title: string;
    combo: string;
    meat: string;
    amount: number;
    receipt: string;
    method: string;
    stage: number;
    customerId: string;
    email: string;
    quantity: number;
}

const Mealorders = ({ orders, email }: { orders: TMyOrders[]; email: string }) => {
    const [ food, setFood ] = useState<TMyOrders[]>(orders)
    const [ limit, setLimit ] = useState<number>(6)
    const [ loading, setLoading ] = useState<{ page: boolean, more: boolean }>({ page: false, more: false })
    const api = process.env.NEXT_PUBLIC_API_ROOT;

    const handleMore = async() => {
        setLoading(prev => {
          return { ...prev, more: true }
        })
    
        setLimit(prev => prev+6)
        // const newMeal = await MyOrders(email, 3, limit);
        // const newMeal = await getUserOrders(email, limit, 6);
        const { data } = await axios(`${api}/orders?email=${email}&start=${limit}&limit=${6}`)
        setFood((prev: TMyOrders[]) => {
          return [...prev, ...data.orders]
        });
    
        setLoading(prev => {
          return { ...prev, more: false }
        })
        return;
      }

    return (
        <section className='col-span-6 lg:col-span-5 min-w-full pb-10 px-3 lg:px-5'>
            {orders.length > 0 ? <h5 className='text-xl lg:text-2xl mb-5 text-light flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 lg:w-10 lg:h-10 mr-2 mb-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>Recent Orders</h5> : null}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 lg:gap-y-14'>
            {!loading.page ? food.length > 0 ? food.slice(0, limit).map((meal:TMyOrders, index: number) => <div className='card w-full relative' key={index}><div><img className='object-cover rounded-lg' src={meal.photo} alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
                </div>
                <h4 className='mt-4 mb-0 text-xl font-medium'>{meal.title} with {meal.combo} and {meal.meat}</h4>
                <div className='flex justify-between items-center w-full mb-2'>
                    <div className='space-x-3'><span className='text-green-700 font-normal text-xs'>&#8358;{meal.amount.toLocaleString()} (Qty - {meal.quantity})</span>
                    </div>
                </div>
                <div className='bg-slate-100 rounded-lg px-3 py-1 inline-block' onClick={() => {}}>
                  <div className="flex items-center">
                    <input className='text-slate-500 font-normal text-sm pt-1 inline-block cursor-pointer' value={meal.receipt} disabled />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                  </div>
                </div>
                {/* <small className='text-slate-500 font-normal text-sm'>Refno - {meal.receipt}</small> */}
                {meal.method == "home" ? meal.stage == 1 ? <span className='px-10 pt-3 pb-2 bg-red-500 absolute top-0 -mt-3 right-0 -mr-3 text-xs text-primary font-bold uppercase rotate-0 rounded-sm'>&#127873; Processing</span> : meal.stage == 2 ? <span className='px-5 pt-3 pb-2 bg-yellow-700 absolute top-0 mt-0 right-0 -mr-3 text-xs text-black font-bold uppercase rotate-12 rounded-sm'>&#128077; Transporting</span> : <span className='px-5 pt-3 pb-2 bg-green-700 absolute top-0 mt-0 right-0 -mr-3 text-xs text-primary font-bold uppercase rotate-12 rounded-sm'>&#128077; Delivered</span> : null}</div>): null : <MockPostGrid list={[1, 2, 3, 4, 5, 6]} />}
            {loading.more ? <MockPostGrid list={[1, 2, 3]} /> : null}
            </div>
            {food.length > 0 ? null : <EmptyPosts illustration="/emptycart.svg" heading="You haven't made any order yet!" cta="Place order" />}
            <p className='text-center mt-10 md:mt-14 lg:mt-12 mb-16'>{limit <= food.length ? <button type='button' className='px-8 py-3 text-base bg-gray-900 font-normal rounded-full text-primary' onClick={() => handleMore()}>Load more</button> : null}</p>
        </section>
    )
}

export default Mealorders
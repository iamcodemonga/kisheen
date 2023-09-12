'use client'

import React, { FC, FormEvent, FormEventHandler, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
    filter:  (minimum:number, maximum:number, group:string | null) => void
    category:  (group:string | null) => void
    active: string
}

const Filter: FC<Props> = ({ filter, category, active }) => {

    const [ minPrice, setMinPrice ] = useState<number>(0)
    const [ maxPrice, setMaxPrice ] = useState<number>(100000)
    const [ routeCategory, setRouteCategory ] = useState<string | null >(active);
    const router = useRouter();

    const handleChangeCategory = (route: string | null) => {
        setRouteCategory(route);
        category(route)
        return;
    }

    return (
        <>
            <div>
                <small className='text-accent font-bold'>CATEGORIES</small>
                <ul className='space-y-4 mt-3'>
                    <li>
                        <button onClick={() => {handleChangeCategory(null)}} className={!routeCategory ? 'w-full bg-accent pb-2 pt-3 rounded-full text-base font-bold': 'w-full pb-2 pt-3 rounded-full text-base font-bold'} type="button">All meals</button>
                    </li>
                    <li>
                        <button onClick={() => {handleChangeCategory('soup')}} className={routeCategory == 'soup' ? 'w-full bg-accent pb-2 pt-3 rounded-full text-base font-bold': 'w-full pb-2 pt-3 rounded-full text-base font-bold'} type="button">Soup</button>
                    </li>
                    <li>
                        <button onClick={() => {handleChangeCategory('rice')}} className={routeCategory == 'rice' ? 'w-full bg-accent pb-2 pt-3 rounded-full text-base font-bold': 'w-full pb-2 pt-3 rounded-full text-base font-bold'} type="button">Rice</button>
                    </li>
                    <li>
                        <button onClick={() => {handleChangeCategory('sauce')}} className={routeCategory == 'sauce' ? 'w-full bg-accent pb-2 pt-3 rounded-full text-base font-bold': 'w-full pb-2 pt-3 rounded-full text-base font-bold'} type="button">Sauce</button>
                    </li>
                </ul>
            </div>
            <div>
                <small className='text-accent font-bold'>PRICE FILTER</small>
                <form action="" method="post" className='space-y-5 mt-4'>
                    <input type="number" name="" id="minimum" className='bg-gray-200 px-3 py-2 rounded-lg outline-none max-w-full' placeholder='minimum price' value={minPrice} onChange={(e:any) => setMinPrice(e.target.value)} />
                    <input type="number" name="" id="maximum" className='bg-gray-200 px-3 py-2 rounded-lg outline-none max-w-full' placeholder='maximum price' value={maxPrice} onChange={(e:any) => setMaxPrice(e.target.value)} />
                    <button type="button" className='w-full pt-3 pb-2 rounded-lg bg-accent font-bold' onClick={() => filter(minPrice, maxPrice, routeCategory)}>Filter</button>
                </form>
            </div>
        </>
    )
}

export default Filter
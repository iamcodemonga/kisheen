'use client'

import { ChangeEvent } from 'react'

interface FilterFormProps {
    active: string | null;
    min: string;
    max: string;
    changeMin: (value: number) => void;
    changeMax: (value: number) => void;
    filter:  (minimum:number, maximum:number, group:string | null) => void;
    category:  (group:string | null) => void;
    changeActive: (type: string | null) => void;
}

const Filter = ({ min, max, active, changeMin, changeMax, filter, category, changeActive }: FilterFormProps) => {

    const handleChangeCategory = (route: string | null) => {
        changeActive(route);
        category(route)
        return;
    }

    return (
        <>
            <div>
                <small className='text-accent font-normal text-xs'>CATEGORIES</small>
                <ul className='space-y-4 mt-3'>
                    <li>
                        <button onClick={() => {handleChangeCategory(null)}} className={!active ? 'w-full bg-accent text-primary pb-2 pt-3 rounded-full text-base font-medium': 'w-full pb-2 pt-3 rounded-full text-base font-medium'} type="button">All meals</button>
                    </li>
                    <li>
                        <button onClick={() => {handleChangeCategory('soup')}} className={active == 'soup' ? 'w-full bg-accent text-primary pb-2 pt-3 rounded-full text-base font-medium': 'w-full pb-2 pt-3 rounded-full text-base font-medium'} type="button">Soup</button>
                    </li>
                    <li>
                        <button onClick={() => {handleChangeCategory('rice')}} className={active == 'rice' ? 'w-full bg-accent text-primary pb-2 pt-3 rounded-full text-base font-medium': 'w-full pb-2 pt-3 rounded-full text-base font-medium'} type="button">Rice</button>
                    </li>
                    <li>
                        <button onClick={() => {handleChangeCategory('sauce')}} className={active == 'sauce' ? 'w-full bg-accent text-primary pb-2 pt-3 rounded-full text-base font-medium': 'w-full pb-2 pt-3 rounded-full text-base font-medium'} type="button">Sauce</button>
                    </li>
                    <li>
                        <button onClick={() => {handleChangeCategory('meats')}} className={active == 'meats' ? 'w-full bg-accent text-primary pb-2 pt-3 rounded-full text-base font-medium': 'w-full pb-2 pt-3 rounded-full text-base font-medium'} type="button">Meats</button>
                    </li>
                </ul>
            </div>
            <div>
                <small className='text-accent font-normal text-xs'>PRICE FILTER</small>
                <form action="" method="post" className='space-y-5 mt-4 w-full'>
                    <input type="number" name="" id="minimum" className='bg-gray-200 px-3 py-2 rounded-lg outline-none w-full' placeholder='minimum price' value={min} onChange={(e:ChangeEvent<HTMLInputElement>) => changeMin(Number(e.target.value))} />
                    <input type="number" name="" id="maximum" className='bg-gray-200 px-3 py-2 rounded-lg outline-none w-full' placeholder='maximum price' value={max} onChange={(e:ChangeEvent<HTMLInputElement>) => changeMax(Number(e.target.value))} />
                    <button type="button" className='w-full pt-3 pb-2 rounded-lg bg-accent font-medium text-sm' onClick={() => filter(Number(min), Number(max), active)}>Filter</button>
                </form>
            </div>
        </>
    )
}

export default Filter
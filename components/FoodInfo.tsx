"use client"

import { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TCartItem, TMeal } from '@/types'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '@/features/cartSlice'

const FoodInfo = ({ meal, allowcart, discount }: { meal: TMeal, allowcart: boolean, discount: number }) => {

    const dispatch = useDispatch();

    // Array of combo and meat
    const comboList = meal.combo?.split(',') as string[];
    const meatList = meal.meat?.split(',') as string[];

    // States
    const [ food, setFood ] = useState<TMeal>(meal);
    const [ combo, setCombo ] = useState<string>(comboList[0])
    const [ meat, setMeat ] = useState<string>(meatList[0])
    // const [ quantity, setQuantity ] = useState<number>(1)
    const [ quantity, setQuantity ] = useState<string>("1")
    const [ potSize, setPotSize ] = useState<string>('medium(md)')
    const [ amount, setAmount ] = useState<number>(meal.price)

    // Array of pot sizes
    const sizeList: string[] = ['small(sm)', 'medium(md)', 'large(lg)', 'extra-large(xl)']

    //  Executive functions
    const handleSize = (size: string) => {
        if (size == 'small(sm)') {
            setPotSize(size);
            setAmount(food.priceSm as number);
        } else if (size == 'medium(md)') {
            setPotSize(size);
            setAmount(food.price);
        } else if (size == 'large(lg)') {
            setPotSize(size);
            setAmount(food.priceLg as number);
        } else if (size == 'extra-large(xl)') {
            setPotSize(size);
            setAmount(food.priceXl as number);
        }
        return;
    }

    const handleCombo = (combination: string) => {
        setCombo(combination)
        return;
    }

    const handleMeat = (bitable: string) => {
        setMeat(bitable)
        return;
    }

    const handleQuantity = (value: number): void => {

        if (!Number(value)) {
            setQuantity("1");
            setAmount(meal.price);
            return;
        }

        if (Number(value) < 1) {
            setQuantity("1");
            setAmount(meal.price);
            return;
        }

        if (Number(value) > meal.quantity) {
            setQuantity(meal.quantity.toString())
            setAmount(meal.price*value)
            return;
        }

        setQuantity(value.toString());
        setAmount(meal.price*Number(value))
        return;
    }

    const handleCart = (choppable: TCartItem) => {
        dispatch(addProduct(choppable))
        return;
    }
    
    return (
        <section className='px-4 lg:px-20 w-full grid grid-cols-2 gap-y-10 gap-x-10 py-20 lg:py-28 items-center'>
            <div className='col-span-2 lg:col-span-1 bg-gray-200 rounded-lg'>
                <Image className='w-full object-cover rounded-lg' src={food.photo.url} alt="meal_picture" height={500} width={400} priority />
            </div>
            <div className="col-span-2 lg:col-span-1">
                <h1 className='my-0 text-2xl md:text-4xl font-normal lg:leading-snug'>{food.title}</h1>
                <h5 className='space-x-3 mb-5 mt-3'>
                    <span className={food.type == 'pot' ? 'text-green-700 font-normal' : discount > 0 ? 'text-red-700 line-through font-normal' : 'text-green-700 font-normal' }>&#8358;{amount.toLocaleString()}</span>
                    <span className={food.type == 'pot' ? 'text-green-700 hidden' : discount > 0 ? 'text-green-700 font-normal' : 'hidden'}>&#8358;{(amount*(1-(discount/100))).toLocaleString()}</span></h5>
                {food.description && <p className='hidde'>{food.description}</p>}
                <form action="" method="post" className={food.type == 'pot' ? `space-y-4 mt-8 hidden` : `space-y-4 mt-8`}>
                    <div className='flex flex-col'>
                        <label htmlFor="combo" className='font-normal text-sm text-accent'>Combo</label>
                        <select name="combo" id="combo" value={combo} onChange={(e) => handleCombo(e.target.value)} className='w-full py-3 px-3 bg-slate-200 rounded-lg outline-none'>
                            {comboList && comboList.map(combo => <option value={combo}>{combo}</option>)}
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-normal text-sm text-accent'>Meat</label>
                        <select name="meat" id="meat" value={meat} onChange={(e) => handleMeat(e.target.value)} className='w-full py-3 px-3 bg-slate-200 rounded-lg outline-none'>
                            {meatList && meatList.map(bite => <option value={bite}>{bite}</option>)}
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-normal text-sm text-accent'>Quantity</label>
                        <input type="number" name="" id="" placeholder=' quantity of food e.g 2' className='w-full py-2 px-3 bg-slate-200 rounded-lg outline-none' value={quantity} onChange={(e:ChangeEvent<HTMLInputElement>) => setQuantity(e.target.value)} onBlur={(e:ChangeEvent<HTMLInputElement>) => handleQuantity(Number(e.target.value))} />
                    </div>
                    <div className='md:flex md:space-x-5 space-y-7 md:space-y-4 items-center'>
                        {allowcart ? <button type="button" className='bg-slate-800 hover:bg-slate-700 w-full pt-4 pb-3 rounded-lg font-normal mt-4 uppercase text-sm text-primary' onClick={() => handleCart({id: meal.id, photo: meal.photo.url, name: meal.name, title: meal.title, slug: meal.slug, price: meal.price, quantity: meal.quantity, cartQty: Number(quantity), type: meal.type, category: meal.category, combo: combo, comboList: meal.combo?.split(','), meat: meat, meatList: meal.meat?.split(',')})}>Add to cart</button> : null}
                        <Link href={`/checkout/${food.slug}?qty=${quantity}&meat=${meat.trim()}&combo=${combo.trim()}`} className='bg-accent hover:bg-accent/90 w-full pt-4 pb-3 rounded-lg font-medium mt-4 uppercase text-sm text-center block text-primary'>Buy Now</Link>
                    </div>
                </form>
                <form action="" method="post" className={food.type == 'pot' ? `space-y-4 mt-8` : `space-y-4 mt-8 hidden`}>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-normal text-sm text-accent'>Pot size</label>
                        <select name="" id="" value={potSize} onChange={(e) => handleSize(e.target.value)} className='w-full py-3 px-3 bg-slate-200 rounded-lg outline-none'>
                            {sizeList && sizeList.map(size => <option value={size} className=''>{size}</option>)}
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-normal text-sm text-accent'>Meat</label>
                        <select name="" id="" value={meat} onChange={(e) => handleMeat(e.target.value)}  className='w-full py-3 px-3 bg-slate-200 rounded-lg outline-none'>
                            {meatList && meatList.map(bite => <option value={bite}>{bite}</option>)}
                        </select>
                    </div>
                    <div>
                        <Link href={`/checkout/${food.slug}?meat=${meat.trim()}&size=${potSize}`} className='bg-accent hover:bg-accent/90 w-full pt-4 pb-3 rounded-lg font-medium mt-8 uppercase text-sm text-center block text-primary'>Buy Now</Link>
                    </div>
                </form>
            </div>
        </section>
    )
    
}

export default FoodInfo
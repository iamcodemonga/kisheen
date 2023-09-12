"use client"

import { FC, ChangeEvent, useState, FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Photo {
    url: string
}

interface Food {
    category: string
    combo: string
    description: string | null
    id: string
    meat: string
    name: string
    photo: Photo
    price: number
    priceLg: number | null
    priceSm: number | null
    priceXl: number | null
    quantity: number
    slug: string
    title: string
    type: string
}

interface CartValues { 
    id: string
    title: string
    type: string
    quantity: number
    amount: number
    photo: string
    meat: string
    combo: string
}

const FoodInfo: FC<any> = ({ meal }) => {

    const comboList: string[] = meal.combo.split(',');
    const meatList: string[] = meal.meat.split(',');

    const [ food, setfood ] = useState(meal);
    const [ combo, setCombo ] = useState<string>(comboList[0])
    const [ meat, setMeat ] = useState<string>(meatList[0])
    const [ quantity, setQuantity ] = useState<number>(1)
    const [ amount, setAmount ] = useState<number>(meal.price)
    const [ meatTopup, setMeatTopup ] = useState<boolean>(false);
    const [ comboTopup, setComboTopup ] = useState<boolean>(false);
    const [ potSize, setPotSize ] = useState<string>('medium(md)')

    const ExpensiveComboArray: string[] = ['fufu', 'semovita', 'goat meat'];
    const sizeList: string[] = ['small(sm)', 'medium(md)', 'large(lg)', 'extra-large(xl)']
    console.log(food)

    const handleCombo = (combination:string) => {

        if (food.type == 'special') {
            setCombo(combination)
            return;
        }

        if (meatTopup && ExpensiveComboArray.includes(combination.trim())) {
            setCombo(combination);
            if (!comboTopup) {
                setAmount(prev => (prev+500));
                setComboTopup(true);
            }
            setComboTopup(true);
            // console.log(amount);
            // done
            return;
        }

        if (!meatTopup && ExpensiveComboArray.includes(combination.trim())) {
            setCombo(combination);
            if(!comboTopup) {
                setAmount((meal.price+500));
                setComboTopup(true);
            }
            setComboTopup(true);
            // console.log(amount);
            // done
            return;
        }

        if (meatTopup && !ExpensiveComboArray.includes(combination.trim())) {
            setCombo(combination);
            if (comboTopup) {
                setAmount(prev => (prev-500));
                setComboTopup(false);
            }
            // console.log(amount);
            // done
            return;
        }

        if (!meatTopup && !ExpensiveComboArray.includes(combination.trim())) {
            setCombo(combination);
            setAmount((meal.price));
            setComboTopup(false);
            // console.log(amount);
            // done
            return;
        }

    }

    const handleMeat = (biteable:string) => {

        if (food.type == 'special') {
            setMeat(biteable)
            return;
        }

        // console.log(meat)
        // setMeat(biteable)
        // console.log(ExpensiveComboArray.includes(meat.trim()))
        // return;

        if (comboTopup && ExpensiveComboArray.includes(biteable.trim())) {
            setMeat(biteable);
            setAmount(prev => (prev+1000));
            setMeatTopup(true);
            console.log(amount);
            // done
            return;
        }

        if (!comboTopup && ExpensiveComboArray.includes(biteable.trim())) {
            setMeat(biteable);
            setAmount((meal.price+1000));
            setMeatTopup(true);
            // console.log(amount);
            // done
            return;
        }

        if (comboTopup && !ExpensiveComboArray.includes(biteable.trim())) {
            setMeat(biteable);
            if (comboTopup) {
                setAmount(prev => (prev-1000));
                setMeatTopup(false);
            }
            // console.log(amount);
            // done
            return;
        }

        if (!comboTopup && !ExpensiveComboArray.includes(biteable.trim())) {
            setMeat(biteable);
            setAmount(meal.price);
            setMeatTopup(false);
            // console.log(amount);
            // done
            return;
        }
        
    }

    const handleQuantity = (value: number): void => {
        if (value < 1) {
            setQuantity(1);
            return;
        }

        setQuantity(value);
        // setAmount(prev => (prev/number)*quantity)
        // setNumber(value)
        console.log(value)
        return;
    }

    const handleSize = (size: string) => {
        if (size == 'small(sm)') {
            setPotSize(size);
            setAmount(food.priceSm);
        } else if (size == 'medium(md)') {
            setPotSize(size);
            setAmount(food.price);
        } else if (size == 'large(lg)') {
            setPotSize(size);
            setAmount(food.priceLg);
        } else if (size == 'extra-large(xl)') {
            setPotSize(size);
            setAmount(food.priceXl);
        }
        return;
    }

    const handleCart = () => {
        let cart: CartValues = { id: food.id, title: food.title, type: food.type, quantity: quantity, amount: amount*quantity, photo: food.photo.url, meat: meat, combo: combo };
        console.log(cart);
        return;
    }
    
    return (
        <section className='container w-full grid grid-cols-2 gap-10 py-20 lg:py-28 items-center'>
            <div className='col-span-2 lg:col-span-1 bg-gray-200'>
                <Image className='w-full object-cover rounded-lg' src={food.photo.url} alt="meal_picture" height={500} width={400} priority />
            </div>
            <div className="col-span-2 lg:col-span-1">
                <h3 className='my-0 text-5xl font-bold'>{food.title}</h3>
                <h5 className='space-x-3 my-5'>
                    <span className={food.type == 'pot' ? 'text-green-700' : 'text-red-700 line-through' }>&#8358;{amount.toLocaleString()}</span>
                    <span className={food.type == 'pot' ? 'text-green-700 hidden' : 'text-green-700'}>&#8358;{(amount*(1-0.37)).toLocaleString()}</span></h5>
                {food.description && <p className='hidde'>{food.description}</p>}
                <form action="" method="post" className={food.type == 'pot' ? `space-y-4 mt-8 hidden` : `space-y-4 mt-8`}>
                    <div className='flex flex-col'>
                        <label htmlFor="combo" className='font-bold'>Combo</label>
                        <select name="combo" id="combo" value={combo} onChange={(e) => handleCombo(e.target.value)} className='w-full py-3 px-3 bg-gray-200 rounded-xl'>
                            {comboList && comboList.map(combo => <option value={combo}>{ food.type == 'casual' ? ExpensiveComboArray.includes(combo.trim()) ? combo+" (+N500)": combo: combo }</option>)}
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-bold'>Meat</label>
                        <select name="meat" id="meat" value={meat} onChange={(e) => handleMeat(e.target.value)} className='w-full py-3 px-3 bg-gray-200 rounded-xl'>
                            {meatList && meatList.map(bite => <option value={bite}>{ food.type == "casual" ? ExpensiveComboArray.includes(bite.trim()) ? bite+" (+N1000)": bite: bite }</option>)}
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-bold'>Quantity</label>
                        <input type="number" name="" id="" placeholder=' quantity of food e.g 2' className='w-full py-2 px-3 bg-gray-200 rounded-xl' value={quantity} onChange={(e:ChangeEvent<HTMLInputElement> | any) => setQuantity(e.target.value)} onBlur={(e:ChangeEvent<HTMLInputElement>) => handleQuantity(Number(e.target.value))} />
                    </div>
                    <div className='md:flex md:space-x-5 space-y-7'>
                        <button type="button" className='bg-accent hover:bg-accent/90 w-full pt-4 pb-3 rounded-xl font-bold mt-4 uppercase text-sm' onClick={handleCart}>Add to cart</button>
                        <Link href="/checkout" className='bg-green-500 hover:bg-green-600 w-full pt-4 pb-3 rounded-xl font-bold mt-4 uppercase text-sm block text-center'>Buy Now</Link>
                    </div>
                </form>
                <form action="" method="post" className={food.type == 'pot' ? `space-y-4 mt-8` : `space-y-4 mt-8 hidden`}>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-bold'>Pot size</label>
                        <select name="" id="" value={potSize} onChange={(e) => handleSize(e.target.value)} className='w-full py-3 px-3 bg-gray-200 rounded-xl'>
                            {sizeList && sizeList.map(size => <option value={size}>{size}</option>)}
                            {/* <option value="">small(sm)</option>
                            <option value="">medium(md)</option>
                            <option value="">large(lg)</option>
                            <option value="">extra-large(xl)</option> */}
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-bold'>Meat</label>
                        <select name="" id="" value={meat} onChange={(e) => handleMeat(e.target.value)}  className='w-full py-3 px-3 bg-gray-200 rounded-xl'>
                            {meatList && meatList.map(bite => <option value={bite}>{ food.type == "casual" ? ExpensiveComboArray.includes(bite.trim()) ? bite+" (+N1000)": bite: bite }</option>)}
                        </select>
                    </div>
                    <div>
                        <button type="submit" className='bg-accent w-full pt-3 pb-2 rounded-xl font-bold mt-4'>Place order</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FoodInfo
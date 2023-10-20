"use client"

import React, { FC, useState } from 'react'
// import Fullmenu from './datalist/Fullmenu'
// import Menubar from './bars/Menubar'
// import Filterbars from './bars/Filterbars'
import Filterform from './forms/Filter'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AllMeals, CategorisedMeals, FilterdedMeals, SearchMeals } from '@/actions'

interface Status {
  open: boolean,
  close: () => void
}

const Menusection: FC<any> = ({ meals, active }) => {

  const router = useRouter();

  const [ word, setWord ] = useState<string>('')
  const [ limit, setLimit ] = useState<number>(6)
  const [ food, setFood ] = useState<any>(meals)
  const [ open, setOpen ] = useState<boolean>(false)

  const OpenFilter = () => {
    setOpen(true)
  }

  const CloseFilter = () => {
    setOpen(false)
  }

  const handleClose = (e:any) => {
    if (e.target.id == "filterbar")  CloseFilter()
  }

  const handleCategory = async(group: string | null): Promise<void> => {

    if (group) {
      const newMeal = await CategorisedMeals(group);
      router.push(`/menu?category=${group}`);
      setFood(newMeal);
      return;
    } else {
      const allMeals = await AllMeals();
      router.push(`/menu`);
      setFood(allMeals);
      return;
    }
    
  }

  const handleFilter = async(minimum: number, maximum: number, group:string | null): Promise<void> => {
    // const category = group ? group : null;
    const newMeal = await FilterdedMeals(minimum, maximum, group);
    setFood(newMeal);
    // let min = minimum;
    // let max = maximum;

    if(group) {
      router.push(`/menu?category=${group}&min=${minimum}&max=${maximum}`)
      return;
    } else {
      router.push(`/menu?min=${minimum}&max=${maximum}`)
      return;
    }

  }

  const handleSearch = async(phrase:string) => {
    const searchedmeal = await SearchMeals(phrase);
    setTimeout(() => {
      setFood(searchedmeal);
    }, 2000);
  }

    return (
      <section className='grid grid-cols-6'>
        {/* <Menubar /> */}
        <aside className='pt-6 lg:pt-20 hidden lg:block lg:col-span-1 lg:pl-20 space-y-10'>
            <Filterform filter={handleFilter} category={handleCategory} active={active} />
        </aside>
        {/* <Filterbars open={open} close={handleFilter} /> */}
        <aside className={open ? 'fixed w-full top-0 left-0 bg-primary/30 h-screen z-50' : 'hidden'} id='filterbar' onClick={handleClose}>
          <div className='absolute w-64 px-10 top-0 left-0 bg-primary h-full pt-28 space-y-10'>
            <Filterform category={handleCategory} filter={handleFilter} active='active' />
            <button type='button' className='absolute top-0 right-0 mr-3' onClick={CloseFilter}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </aside>
        {/* <Fullmenu /> */}
        <section className='container py-6 lg:py-16 col-span-6 lg:col-span-5'>
            <h1 className='text-5xl font-extrabold capitalize my-5'>Food Menu</h1>
            <div className='flex items-center justify-start mb-5 w-full'>
                <button type="button" className='lg:hidden mr-3' onClick={OpenFilter}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                </button>
                <form>
                    <input type="text" name="" id="search" placeholder='search meal' className='py-2 px-4 bg-gray-200 rounded-xl outline-none w-64 md:w-96' value={word} onChange={(e) => setWord(e.target.value)} onKeyUp={() => handleSearch(word)} />
                </form>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 lg:gap-y-14'>
                {food && food.slice(0, limit).map((meal:any) => <div className='card w-full relative'>
                    <Link href={`meal/${meal.slug}`}>
                        <img className='object-cover rounded-xl' src={meal.photo.url} alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
                    </Link>
                    <h4 className='mt-4 mb-1 text-lg font-bold'><Link href={`meal/${meal.slug}`}>{meal.title}</Link></h4>
                    <div className='flex justify-between items-center w-full'>
                        <div className='space-x-3'>
                            <span className='text-red-700 line-through'>&#8358;{meal.price}</span><span className='text-green-700'>&#8358;{meal.price*(1-0.37)}</span>
                        </div>
                        <button className='px-6 py-2 bg-accent text-primary rounded-full hover:bg-accent/90 flex items-center justify-start absolute bottom-20 lg:bottom-24 lg:-mb-6 right-0 mr-2' type='button'>Add to tray
                        </button>
                    </div>
                    <span className='px-2 pt-2 pb-1 bg-green-700 absolute top-0 mt-2 rounded-lg left-0 ml-2 text-xs text-black font-bold'>37% off</span>
                    {!meal.quantity && <span className='px-5 pt-3 pb-2 bg-red-500 absolute top-0 mt-0 right-0 -mr-3 text-base text-primary font-black uppercase rotate-12'>Sold out!</span>}
                </div>)}
            </div>
            <p className='text-center mt-10 md:mt-14 lg:mt-16'><button type='button' className='px-8 py-3 text-base bg-gray-900 font-bold rounded-full text-primary' onClick={() => setLimit(prev => prev+3)}>Load more</button></p>
        </section>
      </section>
    )
}

export default Menusection
"use client"

import React, { FC, useState } from 'react'
// import Fullmenu from './datalist/Fullmenu'
// import Menubar from './bars/Menubar'
// import Filterbars from './bars/Filterbars'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/features/cartSlice'
import Filterform from './forms/Filter'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AllMeals, CategorisedMeals, FilterdedMeals, SearchMeals } from '@/actions'
import { TCartItem, TMeal } from '@/types'
import MockPostGrid from './loaders/MockPostGrid'
import EmptyPosts from './EmptyPosts'

interface Status {
  open: boolean,
  close: () => void
}

type Props = {
  meals: TMeal[];
  active: string | null;
  initialMinimumPrice: number;
  initialMaximumPrice: number;
}

const Menusection = ({ meals, active, initialMinimumPrice, initialMaximumPrice }: Props) => {

  const router = useRouter();
  const [ minPrice, setMinPrice ] = useState<number>(initialMinimumPrice)
  const [ maxPrice, setMaxPrice ] = useState<number>(initialMaximumPrice)
  const [ activeRoute, setActiveRoute ] = useState<string | null>(active)
  const [ word, setWord ] = useState<string>('')
  const [ limit, setLimit ] = useState<number>(6)
  const [ food, setFood ] = useState<TMeal[]>(meals)
  const [ open, setOpen ] = useState<boolean>(false)
  const [ loading, setLoading ] = useState<{ page: boolean, more: boolean }>({ page: false, more: false })
  const dispatch = useDispatch();

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
    setLoading(prev => {
      return { ...prev, page: true }
    })
    CloseFilter();
    setLimit(6);
    if (group) {
      router.push(`/menu?category=${group}`);
      const newMeal = await CategorisedMeals(group, 6, 0);
      setFood(newMeal);
      setLoading(prev => {
        return { ...prev, page: false }
      })
      return;
    } else {
      router.push(`/menu`);
      const allMeals = await AllMeals();
      setFood(allMeals);
      setLoading(prev => {
        return { ...prev, page: false }
      })
      return;
    }
    
  }

  const handleFilter = async(minimum: number, maximum: number, group:string | null): Promise<void> => {

    setLoading(prev => {
      return { ...prev, page: true }
    })
    setLimit(6);
    CloseFilter();

    const newMeal = await FilterdedMeals(6, 0, minimum, maximum, group);
    setFood(newMeal);

    if(group) {
      router.push(`/menu?category=${group}&min=${minimum}&max=${maximum}`)
      setLoading(prev => {
        return { ...prev, page: false }
      })
      return;
    } else {
      router.push(`/menu?min=${minimum}&max=${maximum}`)
      setLoading(prev => {
        return { ...prev, page: false }
      })
      return;
    }

  }

  const handleChangeMin = (value: number) => {
    setMinPrice(value);
    return;
  }

  const handleChangeMax = (value: number) => {
    setMaxPrice(value);
    return;
  }

  const handleSearch = async(phrase:string) => {
    setLoading(prev => {
      return { ...prev, page: true }
    })
    setLimit(6);

    const searchedmeal = await SearchMeals(phrase);
    setTimeout(() => {
      setFood(searchedmeal);
      setLoading(prev => {
        return { ...prev, page: false }
      })
    }, 2000);
  }

  const handleChangeActive = (type: string | null) => {
    setActiveRoute(type);
    return;
  }

  const handleMore = async(minimum: number, maximum: number, group?: string | null) => {
    console.log(`minimum: ${minimum}, maximum: ${maximum}, group: ${group}`)
    setLoading(prev => {
      return { ...prev, more: true }
    })

    setLimit(prev => prev+3)
    const newMeal = await FilterdedMeals(3, limit, minimum, maximum, group);
    setFood((prev: TMeal[]) => {
      return [...prev, ...newMeal]
    });

    setLoading(prev => {
      return { ...prev, more: false }
    })
    return;

  }

  const handleAddToCart = (eatable: TCartItem) => {
      dispatch(addToCart(eatable));
      return;
  }

  return (
      <section className='grid grid-cols-6'>
          <aside className='pt-6 lg:pt-20 hidden lg:block lg:col-span-1 lg:pl-20 space-y-10'>
              <Filterform min={minPrice} max={maxPrice} changeMin={handleChangeMin} changeMax={handleChangeMax} filter={handleFilter} category={handleCategory} changeActive={handleChangeActive} active={activeRoute as string} />
          </aside>
          <aside className={open ? 'small-screen-sidebar fixed w-full top-0 left-0 bg-primary/30 h-screen z-50' : 'hidden small-screen-sidebar'} id='filterbar' onClick={handleClose}>
              <div className='absolute w-80 px-10 top-0 left-0 bg-primary h-full pt-28 space-y-10'>
              <Filterform min={minPrice} max={maxPrice} changeMin={handleChangeMin} changeMax={handleChangeMax} filter={handleFilter} category={handleCategory} changeActive={handleChangeActive} active={activeRoute as string} />
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
              <div className='flex items-center justify-start mb-7 w-full'>
                  <button type="button" className='lg:hidden mr-3' onClick={OpenFilter}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                      </svg>
                  </button>
                  <form className='w-full'>
                      <input type="text" name="" id="search" placeholder='search meal' className='py-3 px-4 bg-gray-200 rounded-xl outline-none w-full' value={word} onChange={(e) => setWord(e.target.value)} onKeyUp={() => handleSearch(word)} />
                  </form>
              </div>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 lg:gap-y-14'>
                  {!loading.page ? food ? food.slice(0, limit).map((meal:TMeal) => <div className='card w-full relative' key={meal.id}>
                      <Link href={meal.quantity ? `/meal/${meal.slug}` : ``} >
                          {/* <Image className='object-cover rounded-xl' src={meal.photo.url} alt="food" width={500} height={400} /> */}
                          <img className='object-cover rounded-xl bg-slate-300/50' src={meal.photo.url} alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
                      </Link>
                      <h4 className='mt-4 mb-1 text-lg font-bold'><Link href={meal.quantity ? `/meal/${meal.slug}` : ``}>{meal.title}</Link></h4>
                      <div className='flex justify-between items-center w-full'>
                          <div className='space-x-3'>
                              <span className='text-red-700 line-through'>&#8358;{meal.price}</span><span className='text-green-700'>&#8358;{meal.price*(1-0.37)}</span>
                          </div>
                      </div>
                      <span className='px-2 pt-2 pb-1 bg-green-700 absolute top-0 mt-2 rounded-lg left-0 ml-2 text-xs text-black font-bold'>37% off</span>
                      {meal.quantity ? <button className='px-6 py-2 bg-white/60 backdrop-blur-md text-primary rounded-lg hover:bg-accent flex items-center justify-start absolute top-0 right-0 mt-2 mr-2' type='button' onClick={() => handleAddToCart({id: meal.id, photo: meal.photo.url, name: meal.name, title: meal.title, slug: meal.slug, price: meal.price, quantity: meal.quantity, cartQty: 1, type: meal.type, category: meal.category, combo: meal.combo?.split(',')[0], comboList: meal.combo?.split(','), meat: meal.meat?.split(',')[0], meatList: meal.meat?.split(',')})}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
                            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                          </svg>
                        </button> : <span className='px-5 pt-3 pb-2 bg-red-500 absolute top-0 mt-0 right-0 -mr-3 text-base text-primary font-black uppercase rotate-12'>Sold out!</span>
                      }
                  </div>): <EmptyPosts heading="Search not found!" cta="Back to menu" />: <MockPostGrid list={[1, 2, 3, 4, 5, 6]} />}
                  {loading.more ? <MockPostGrid list={[1, 2, 3]} /> : null}
              </div>
              {food.length < 1 && <EmptyPosts heading="Search not found!" cta="Back to menu" />}
              <p className='text-center mt-10 md:mt-14 lg:mt-16'>
                {limit <= food.length ? <button type='button' className='px-8 py-3 text-base bg-gray-900 font-bold rounded-full text-primary' onClick={() => handleMore(minPrice, maxPrice, activeRoute )}>Load more</button> : null}
              </p>
          </section>
      </section>
  )
}

export default Menusection
import { FC } from 'react'
import Link from 'next/link'

const RecommendedMeals:FC<any> = ({ meals }) => {
    return (
        <section className='container py-6 lg:pt-0 lg:pb-32 col-span-6 lg:col-span-5'>
            <h3 className='mb-7 text-4xl md:text-5xl font-bold'>Similar Meals</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 lg:gap-y-14'>
                {meals && meals.map((meal:any, index:number) => <div className='card w-full relative' key={meal.id}>
                    <Link href={`/meal/${meal.slug}`}>
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
                <div className='card w-full relative hidden'>
                    <Link href={``}>
                        <img className='object-cover rounded-xl' src="https://i0.wp.com/chillinginghana.com/wp-content/uploads/2022/09/cook-jollof-rice.jpg?fit=768%2C432&ssl=1" alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
                    </Link>
                    <h4 className='mt-4 mb-1 text-lg font-bold'><Link href={``}>Egusi(Melon) Soup</Link></h4>
                    <div className='flex justify-between items-center w-full'>
                        <div className='space-x-3'>
                            <span className='text-red-700 line-through'>&#8358;6,700</span><span className='text-green-700'>&#8358;4,350</span>
                        </div>
                        <button className='px-6 py-2 bg-accent text-primary rounded-full hover:bg-accent/90 flex items-center justify-start absolute bottom-20 lg:bottom-24 lg:-mb-6 right-0 mr-2' type='button'>Add to tray
                        </button>
                    </div>
                    <span className='px-2 pt-2 pb-1 bg-green-700 absolute top-0 mt-2 rounded-lg left-0 ml-2 text-xs text-black font-bold'>37% off</span>
                </div>
                <div className='card w-full relative hidden'>
                    <Link href={``}>
                        <img className='object-cover rounded-xl' src="https://dvinecuisineloungeng.com/wp-content/uploads/2023/01/okro-soup.jpg" alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
                    </Link>
                    <h4 className='mt-4 mb-1 text-lg font-bold'><Link href={``}>Egusi(Melon) Soup</Link></h4>
                    <div className='flex justify-between items-center w-full'>
                        <div className='space-x-3'>
                            <span className='text-red-700 line-through'>&#8358;6,700</span><span className='text-green-700'>&#8358;4,350</span>
                        </div>
                        <button className='px-6 py-2 bg-accent text-primary rounded-full hover:bg-accent/90 flex items-center justify-start absolute bottom-20 lg:bottom-24 lg:-mb-6 right-0 mr-2' type='button'>Add to tray
                        </button>
                    </div>
                    <span className='px-2 pt-2 pb-1 bg-green-700 absolute top-0 mt-2 rounded-lg left-0 ml-2 text-xs text-black font-bold'>37% off</span>
                </div>
            </div>
        </section>
    )
}

export default RecommendedMeals
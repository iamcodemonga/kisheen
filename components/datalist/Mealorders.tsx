import React from 'react'
import Link from 'next/link'

const Mealorders = () => {
    return (
        <section className='col-span-6 lg:col-span-5 min-w-full'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 lg:gap-y-14'>
                <div className='card w-full relative'>
                    <Link href={``}>
                        <img className='object-cover rounded-xl' src="https://cookingwithclaudy.com/wp-content/uploads/2023/02/78ac1c561170aa182f9cf73ad7302c1c-500x500.jpg" alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
                    </Link>
                    <h4 className='mt-4 mb-1 text-lg font-bold'><Link href={``}>Egusi(Melon) Soup</Link></h4>
                    <div className='flex justify-between items-center w-full'>
                        <div className='space-x-3'><span className='text-green-700'>&#8358;4,350</span>
                        </div>
                    </div>
                    <span className='px-5 pt-3 pb-2 bg-red-500 absolute top-0 -mt-2 right-0 mr-2 text-sm text-primary font-black uppercase'>pending</span>
                </div>
                <div className='card w-full relative'>
                    <Link href={``}>
                        <img className='object-cover rounded-xl' src="https://i0.wp.com/chillinginghana.com/wp-content/uploads/2022/09/cook-jollof-rice.jpg?fit=768%2C432&ssl=1" alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
                    </Link>
                    <h4 className='mt-4 mb-1 text-lg font-bold'><Link href={``}>Egusi(Melon) Soup</Link></h4>
                    <div className='flex justify-between items-center w-full'>
                        <div className='space-x-3'><span className='text-green-700'>&#8358;4,350</span>
                        </div>
                    </div>
                    <span className='px-5 pt-3 pb-2 bg-green-700 absolute top-0 -mt-2 right-0 mr-2 text-sm text-black font-black uppercase'>Delivered</span>
                </div>
                <div className='card w-full relative'>
                    <Link href={``}>
                        <img className='object-cover rounded-xl' src="https://dvinecuisineloungeng.com/wp-content/uploads/2023/01/okro-soup.jpg" alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
                    </Link>
                    <h4 className='mt-4 mb-1 text-lg font-bold'><Link href={``}>Egusi(Melon) Soup</Link></h4>
                    <div className='flex justify-between items-center w-full'>
                        <div className='space-x-3'><span className='text-green-700'>&#8358;4,350</span>
                        </div>
                    </div>
                    <span className='px-5 pt-3 pb-2 bg-green-700 absolute top-0 -mt-2 right-0 mr-2 text-sm text-black font-black uppercase'>Delivered</span>
                </div>
                <div className='card w-full relative'>
                    <Link href={``}>
                        <img className='object-cover rounded-xl' src="https://www.lemonblossoms.com/wp-content/uploads/2020/07/Chile-Colorado-Beef-Stew-S1-500x500.jpg" alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
                    </Link>
                    <h4 className='mt-4 mb-1 text-lg font-bold'><Link href={``}>Egusi(Melon) Soup</Link></h4>
                    <div className='flex justify-between items-center w-full'>
                        <div className='space-x-3'><span className='text-green-700'>&#8358;4,350</span>
                        </div>
                    </div>
                    <span className='px-5 pt-3 pb-2 bg-green-700 absolute top-0 -mt-2 right-0 mr-2 text-sm text-black font-black uppercase'>Delivered</span>
                </div>
                <div className='card w-full relative'>
                    <Link href={``}>
                        <img className='object-cover rounded-xl' src="https://i.ytimg.com/vi/ITZNhJdiYFM/maxresdefault.jpg" alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
                    </Link>
                    <h4 className='mt-4 mb-1 text-lg font-bold'><Link href={``}>Egusi(Melon) Soup</Link></h4>
                    <div className='flex justify-between items-center w-full'>
                        <div className='space-x-3'><span className='text-green-700'>&#8358;4,350</span>
                        </div>
                    </div>
                    <span className='px-5 pt-3 pb-2 bg-green-700 absolute top-0 -mt-2 right-0 mr-2 text-sm text-black font-black uppercase'>Delivered</span>
                </div>
                <div className='card w-full relative'>
                    <Link href={``}>
                        <img className='object-cover rounded-xl' src="https://img-global.cpcdn.com/recipes/a3f5568bcc2d947e/400x400cq70/photo.jpg" alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
                    </Link>
                    <h4 className='mt-4 mb-1 text-lg font-bold'><Link href={``}>Egusi(Melon) Soup</Link></h4>
                    <div className='flex justify-between items-center w-full'>
                        <div className='space-x-3'><span className='text-green-700'>&#8358;4,350</span>
                        </div>
                    </div>
                    <span className='px-5 pt-3 pb-2 bg-green-700 absolute top-0 -mt-2 right-0 mr-2 text-sm text-black font-black uppercase'>Delivered</span>
                </div>
            </div>
            <p className='text-center mt-10 md:mt-14 lg:mt-12 mb-16'><button type='button' className='px-8 py-3 text-base bg-gray-900 font-bold rounded-full text-primary'>Load More</button></p>
        </section>
    )
}

export default Mealorders
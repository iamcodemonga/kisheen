import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Menu = () => {
    return (
        <section className='container py-6 lg:py-10'>
            <h2 className='border-l-4 lg:border-l-8 border-accent pl-3 lg:pl-6 text-2xl md:text-5xl font-bold mb-7 mt-10 md:mt-16 md:mb-10'>Featured Delicacies</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-14'>
                <div className='card w-full relative'>
                    <Link href={``}>
                        <img className='object-cover rounded-xl' src="https://cookingwithclaudy.com/wp-content/uploads/2023/02/78ac1c561170aa182f9cf73ad7302c1c-500x500.jpg" alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
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
                <div className='card w-full relative'>
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
                <div className='card w-full relative'>
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
                <div className='card w-full relative'>
                    <Link href={``}>
                        <img className='object-cover rounded-xl' src="https://www.lemonblossoms.com/wp-content/uploads/2020/07/Chile-Colorado-Beef-Stew-S1-500x500.jpg" alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
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
                <div className='card w-full relative'>
                    <Link href={``}>
                        <img className='object-cover rounded-xl' src="https://i.ytimg.com/vi/ITZNhJdiYFM/maxresdefault.jpg" alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
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
                <div className='card w-full relative'>
                    <Link href={``}>
                        <img className='object-cover rounded-xl' src="https://img-global.cpcdn.com/recipes/a3f5568bcc2d947e/400x400cq70/photo.jpg" alt="food" width={500} height={900} style={{width: '100%', height: '350px'}}/>
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
            <p className='text-center mt-10 md:mt-14 lg:mt-16'><button type='button' className='px-8 py-3 text-base bg-gray-900 font-bold rounded-full text-primary'>Load more</button></p>
        </section>
    )
}

export default Menu
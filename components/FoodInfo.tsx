import React from 'react'

const FoodInfo = () => {
    return (
        <section className='container w-full grid grid-cols-2 gap-10 py-20 lg:py-28 items-center'>
            <div className='col-span-2 lg:col-span-1'>
                <img className='w-full object-cover' src="https://www.allrecipes.com/thmb/p4F_knUDCrUNusNOTyjY_dCp8d4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13338-quick-and-easy-vegetable-soup-DDMFS-4x3-402702f59e7a41519515cecccaba1b80.jpg" alt="meal_picture" />
            </div>
            <div className="col-span-2 lg:col-span-1">
                <h3 className='my-0'>Tomato stew</h3>
                <h5 className='space-x-3 my-5'><span className='text-red-700 line-through'>&#8358;2,800</span><span className='text-green-700'>&#8358;1,750</span></h5>
                <p className='hidde'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, natus quam eum quo quod a voluptates corrupti accusamus. Eum, quasi!
                </p>
                <form action="" method="post" className='space-y-4 mt-8 hidde'>
                    <div className='flex flex-col'>
                        <label htmlFor="">Combo</label>
                        <select name="" id="" className='w-full py-3 px-3 bg-gray-200 rounded-xl'>
                            <option value="">Garri</option>
                            <option value="">FuFu (+#200)</option>
                            <option value="">Semovita</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Meat</label>
                        <select name="" id="" className='w-full py-3 px-3 bg-gray-200 rounded-xl'>
                            <option value="">Beef</option>
                            <option value="">Goat (+#200)</option>
                            <option value="">Pork</option>
                            <option value="">Chicken</option>
                            <option value="">Turkey</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Quantity</label>
                        <input type="number" name="" id="" placeholder=' quantity of food e.g 2' className='w-full py-2 px-3 bg-gray-200 rounded-xl' />
                    </div>
                    <div>
                        <button type="submit" className='bg-accent w-full pt-3 pb-2 rounded-xl font-bold mt-4'>Place order</button>
                    </div>
                </form>
                <form action="" method="post" className='space-y-4 mt-8 hidden'>
                    <div className='flex flex-col'>
                        <label htmlFor="">Pot size</label>
                        <select name="" id="" className='w-full py-3 px-3 bg-gray-200 rounded-xl'>
                            <option value="">small(sm)</option>
                            <option value="">medium(md)</option>
                            <option value="">large(lg)</option>
                            <option value="">extra-large(xl)</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Meat</label>
                        <select name="" id="" className='w-full py-3 px-3 bg-gray-200 rounded-xl'>
                            <option value="">Beef</option>
                            <option value="">Goat (+#200)</option>
                            <option value="">Pork</option>
                            <option value="">Chicken</option>
                            <option value="">Turkey</option>
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
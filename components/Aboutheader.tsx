import React from 'react'

const Aboutheader = () => {
    return (
        <>
            <section>
                <div className='grid grid-cols-2 items-center gap-7 px-4 lg:px-20 pt-16 lg:pt-20 lg:pb-16'>
                    <div className='col-span-2 lg:col-span-1'>
                        <h2 className='text-4xl lg:text-6xl font-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    </div>
                    <div className='col-span-2 lg:col-span-1'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rerum sit sunt quos architecto illum. Repellat ex perspiciatis debitis architecto.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rerum sit sunt quos architecto illum. Repellat ex perspiciatis debitis architecto.</p>
                    </div>
                </div>
                <div className='lg:grid grid-cols-2 gap-14 items-center mt-20 mb-28'>
                    <div className='mt-0'>
                        <img className='w-full object-cover h-96' src="https://www.allrecipes.com/thmb/L3JWwNTNQjkioY3kzu1ukd3bCw8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/12978-Egusi-Soup-ddmfs-024-2x1-1-db86e652329940219b3d2bcd4001d489.jpg" alt="" />
                    </div>
                    <div className='space-y-16 mt-16 lg:mt-0'>
                        <h2 className='font-bold text-5xl'>How we work</h2>
                        <div className='space-y-7'>
                            <div className='flex max-w-lg items-center gap-5'>
                                <h1 className='mb-1 text-5xl font-bold'>01</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit at hic? Perferendis, omnis accusamus.</p>
                            </div>
                            <div className='flex max-w-lg items-center gap-5'>
                                <h1 className='mb-1 text-5xl font-bold'>02</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit at hic? Perferendis, omnis accusamus.</p>
                            </div>
                            <div className='flex max-w-lg items-center gap-5'>
                                <h1 className='mb-1 text-5xl font-bold'>03</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit at hic? Perferendis, omnis accusamus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-accent/5 w-full container pt-96 pb-28 lg:pb-52 -mt-96 lg:-mt-72'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-40 gap-y-10">
                    <div className=''>
                        <div className='block'><img src="food.png" alt="" className='h-60 mx-auto'/></div>
                        <h1 className='text-center text-3xl font-bold pb-4'>Quality Meals</h1>
                        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, at?</p>
                    </div>
                    <div className=''>
                        <div className="block"><img src="payment.png" alt="" className='h-60 mx-auto'/></div>
                        <h1 className='text-center text-3xl font-bold pb-4'>Flexible Payment</h1>
                        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, at?</p>
                    </div>
                    <div className=''>
                        <div className="block"><img src="delivery.png" alt="" className='h-60 mx-auto'/></div>
                        <h1 className='text-center text-3xl font-bold pb-4'>Quick Delivery</h1>
                        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, at?</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutheader
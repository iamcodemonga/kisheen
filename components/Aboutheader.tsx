import Link from 'next/link'
import React from 'react'

const Aboutheader = () => {
    return (
        <section className='w-full'>
            <section className=''>
                <div className='grid grid-cols-2 items-center gap-7 px-4 lg:px-20 pt-16 lg:pt-20 lg:pb-16'>
                    <div className='col-span-2 lg:col-span-1'>
                        <h2 className='text-4xl lg:text-6xl font-black lg:leading-tight'>We serve up quality delicacies and deliver straight to you – <span className='text-accent'>yes, you!</span> </h2>
                    </div>
                    <div className='col-span-2 lg:col-span-1'>
                        <p className='text-base text-gray-500 font-normal lg:leading-relaxed'>At Kisheen, we hold an unwavering commitment to excellence, never compromising on the quality of our offerings. Whether you find yourself immersed in a busy schedule or simply yearning for a sumptuously prepared meal, our dedication is to craft and deliver culinary delights right to the sanctuary of your home. Indulge in an experience where quality meets convenience, tailored exclusively for your enjoyment.</p>
                    </div>
                </div>
                <div className='lg:grid grid-cols-2 px-4 lg:px-20 gap-14 items-center mt-20 mb-28'>
                    <div className='mt-0'>
                        <img className='w-full object-cover h-96' src="https://www.allrecipes.com/thmb/L3JWwNTNQjkioY3kzu1ukd3bCw8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/12978-Egusi-Soup-ddmfs-024-2x1-1-db86e652329940219b3d2bcd4001d489.jpg" alt="" />
                    </div>
                    <div className='space-y-16 mt-16 lg:mt-0'>
                        <h2 className='font-bold text-6xl'>How it <span className='text-accent'>work</span></h2>
                        <div className='space-y-10'>
                            <div className='md:flex max-w-lg items-center gap-5'>
                                <h1 className='mb-4 md:mb-3 text-5xl font-black'>01</h1>
                                <p className='text-gray-500 font-normal text-base'>Browse our <Link href="/menu" className='text-accent underline'>menu</Link> to discover your favorite meal, customize it to your taste, proceed to checkout or add it to your <Link href="/cart" className='text-accent underline'>cart</Link>.</p>
                            </div>
                            <div className='md:flex max-w-lg items-center gap-5'>
                                <h1 className='mb-4 md:mb-3 text-5xl font-black'>02</h1>
                                <p className='text-gray-500 font-normal text-base'>Place your order and conveniently track it's progress on you dashboard (i.e if you are a <Link href="/register" className='text-accent underline'>registered</Link> member).</p>
                            </div>
                            <div className='md:flex max-w-lg items-center gap-5'>
                                <h1 className='mb-4 md:mb-3 text-5xl font-black'>03</h1>
                                <p className='text-gray-500 font-normal text-base'>Sit back, relax, and watch as your delicious meal is delivered right to your doorstep</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-accent/5 px-4 lg:px-20 pt-96 pb-28 lg:pb-52 -mt-96 lg:-mt-72'>
                <div className="grid lg:grid-cols-3 gap-x-40 gap-y-10">
                    <div className=''>
                        <div className='block'>
                            <img src="food.png" alt="" className='h-60 mx-auto'/>
                        </div>
                        <h1 className='text-center text-3xl font-medium pb-4'>Quality Meals</h1>
                        <p className='text-center text-gray-500 font-normal'>Nigerian delicacies cooked and served with no compromise on quality. </p>
                    </div>
                    <div className=''>
                        <div className="block">
                            <img src="payment.png" alt="" className='h-60 mx-auto'/>
                        </div>
                        <h1 className='text-center text-3xl font-medium pb-4'>Flexible Payment</h1>
                        <p className='text-center text-gray-500 font-normal'>We offer a range of payment options including payment on delivery.</p>
                    </div>
                    <div className=''>
                        <div className="block">
                            <img src="delivery.png" alt="" className='h-60 mx-auto'/>
                        </div>
                        <h1 className='text-center text-3xl font-medium pb-4'>Quick Delivery</h1>
                        <p className='text-center text-gray-500 font-normal'>Fast, accurate and flexible delivery methods with a happy ending.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Aboutheader
import React from 'react'

const Services = () => {
    return (
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
    )
}

export default Services
import React from 'react'

const MockPots = () => {
    return (
        <>
            <section className='container w-full py-20'>
                <div className='md:flex items-center justify-between mb-16'>
                    <h3 className='font-bold text-5xl md:text-5xl xl:text-9xl gap-x-5'>Pot Services</h3>
                    <p className='md:max-w-sm mt-8 md:mt-0 mb-10 text-gray-700'> While you are focused on working hard and achieving your dreams, we are focused on taking from you the pressure of having to cook your meals by cooking and delivering full pot of delicious meals to your doorstep in less than 24 hours.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-x-6 gap-y-12'>
                    {[1, 2, 3, 4].map((meal:number, index:number) => <div className='pot-card relative overflow-hidden rounded-xl' key={index}>
                        <div className='w-full bg-slate-300/50 mock_pot_img'></div>
                        <span className='absolute top-0 left-0 rounded-tl-xl space-x-3 bg-slate-50 pt-2 pb-1 px-4 w-52 h-9'></span>
                        <div className='w-full absolute bottom-0 left-0 py-10 px-4'>
                            <div className='rounded-lg bg-slate-50 pt-2 pb-1 px-4 w-1/4 h-5'></div>
                            <div className='mt-2 w-3/4 h-8 bg-slate-50 rounded-lg'></div>
                        </div>
                    </div>)}
                </div>
            </section>
            <section className='bg-accent/5 w-full container pt-96 pb-28 lg:pb-52 -mt-96 lg:-mt-72'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-40 gap-y-10">
                    <div className=''>
                        <div className='block'><img src="food.png" alt="" className='h-60 mx-auto'/></div>
                        <h1 className='text-center text-3xl font-bold pb-4'>Quality Meals</h1>
                        <p className='text-center text-gray-700'>Nigerian delicacies cooked and served with no compromise on quality.</p>
                    </div>
                    <div className=''>
                        <div className="block"><img src="payment.png" alt="" className='h-60 mx-auto'/></div>
                        <h1 className='text-center text-3xl font-bold pb-4'>Flexible Payment</h1>
                        <p className='text-center text-gray-700'>We offer a range of payment options including payment on delivery.</p>
                    </div>
                    <div className=''>
                        <div className="block"><img src="delivery.png" alt="" className='h-60 mx-auto'/></div>
                        <h1 className='text-center text-3xl font-bold pb-4'>Quick Delivery</h1>
                        <p className='text-center text-gray-700'>Fast, accurate and flexible delivery methods with a happy ending.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MockPots
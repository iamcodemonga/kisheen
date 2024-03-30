import Link from 'next/link'
import Image from 'next/image'
import { TMeal } from '@/types'
import { PotMeals } from '@/lib/graphcms'
import { Suspense } from 'react'
import MockPostGrid from '../loaders/MockPostGrid'

const Potservices = async() => {

    const meals: TMeal[]  = await PotMeals();

    return (
        <section className='w-full'>
            <section className='px-4 lg:px-20 py-20'>
                <div className='w-full md:flex items-center justify-between mb-16'>
                    <h3 className='font-bold text-5xl md:text-5xl xl:text-9xl gap-x-5'>Pot <span className='text-accent'>Services</span></h3>
                    <p className='md:max-w-sm mt-8 md:mt-0 mb-10 text-gray-500 font-normal'>While you are focused on working hard and achieving your dreams, we are focused on taking from you the pressure of having to cook your meals by cooking and delivering full pot of delicious meals to your doorstep in less than 24 hours.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-x-6 gap-y-12'>
                    {meals ? meals.map((meal:TMeal) => <Link href={`/meal/${meal.slug}`} className='pot-card relative overflow-hidden rounded-xl' key={meal.id}>
                        <div>
                            <Image  alt="food" className='w-full object-cover' src={meal.photo.url} width={800} height={1000} />
                        </div>
                        <div className='w-full h-full bg-black/50 absolute top-0 left-0'></div>
                        <span className='absolute top-0 left-0 font-normal text-base rounded-tl-xl text-primary space-x-3 bg-green-700 pt-2 pb-1 px-4'>ready in 5h - 24h</span>
                        <div className='w-full absolute bottom-0 left-0 py-10 px-4'>
                            <span className='font-medium text-lg rounded-lg text-primary space-x-3 bg-green-700 pt-2 pb-1 px-4'>&#8358;{meal.priceSm?.toLocaleString()} - &#8358;{meal.priceXl?.toLocaleString()}</span>
                            <h1 className='text-3xl lg:text-6xl font-normal text-primary mt-4'>{meal.title}</h1>
                        </div>
                    </Link>) : null}
                </div>
            </section>
            <div className='bg-accent/5 px-4 lg:px-20 pt-96 pb-28 lg:pb-52 -mt-96 lg:-mt-72'>
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
            </div>
        </section>
    )
}

export default Potservices
import Link from 'next/link'
import Image from 'next/image'
import { TMeal } from '@/types'
import { PotMeals } from '@/actions'

const Potservices = async() => {

    const meals: TMeal[]  = await PotMeals();

    return (
        <>
            <section className='container w-full py-20'>
                <div className='md:flex items-center justify-between mb-16'>
                    <h3 className='font-bold text-5xl md:text-5xl xl:text-9xl gap-x-5'>Pot Services</h3>
                    <p className='md:max-w-sm mt-8 md:mt-0 mb-10'> Ducimus, repudiandae perspiciatis ratione soluta ad molestiae tempora odio ut saepe quis voluptatem non suscipit, labore beatae! Dolorum sapiente cupiditate tempore. Ducimus.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-x-6 gap-y-12'>
                    {meals ? meals.map((meal:TMeal) => <Link href={`/meal/${meal.slug}`} className='pot-card relative overflow-hidden rounded-xl' key={meal.id}>
                        <div>
                            <Image  alt="food" className='w-full object-cover' src={meal.photo.url} width={800} height={1000} />
                        </div>
                        <div className='w-full h-full bg-black/50 absolute top-0 left-0'></div>
                        <span className='absolute top-0 left-0 font-extrabold text-base rounded-tl-xl text-gray-900 space-x-3 bg-green-700 pt-2 pb-1 px-4'>ready in 5h - 24h</span>
                        <div className='w-full absolute bottom-0 left-0 py-10 px-4'>
                            <span className='font-extrabold text-lg rounded-lg text-gray-900 space-x-3 bg-green-700 pt-2 pb-1 px-4'>&#8358;{meal.priceSm} - &#8358;{meal.priceXl}</span>
                            <h1 className='text-3xl lg:text-6xl font-bold text-primary mt-2'>{meal.title}</h1>
                        </div>
                    </Link>) : null}
                </div>
            </section>
            <section className='bg-accent/5 w-full container pt-96 pb-28 lg:pb-52 -mt-96 lg:-mt-72'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-40 gap-y-10">
                    <div className=''>
                        <div className='block'>
                            <img src="food.png" alt="" className='h-60 mx-auto'/>
                        </div>
                        <h1 className='text-center text-3xl font-bold pb-4'>Quality Meals</h1>
                        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, at?</p>
                    </div>
                    <div className=''>
                        <div className="block">
                            <img src="payment.png" alt="" className='h-60 mx-auto'/>
                        </div>
                        <h1 className='text-center text-3xl font-bold pb-4'>Flexible Payment</h1>
                        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, at?</p>
                    </div>
                    <div className=''>
                        <div className="block">
                            <img src="delivery.png" alt="" className='h-60 mx-auto'/>
                        </div>
                        <h1 className='text-center text-3xl font-bold pb-4'>Quick Delivery</h1>
                        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, at?</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Potservices
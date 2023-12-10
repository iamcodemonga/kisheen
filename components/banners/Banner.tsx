import Link from 'next/link'
import { TMeal } from '@/types'
import { SpecialMeals } from '@/lib/graphcms';

const Banner = async() => {

    const getRandomNumber = (min:number, max:number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomNumber = getRandomNumber(4, -1);

    const meals: TMeal[] = await SpecialMeals();

    return (
        <header className='relative w-full overflow-hidden' style={{ height: '100vh'}}>
            <img src={meals[randomNumber].photo.url} alt="" className='w-full h-full object-cover' />
            <div className='w-full h-full bg-black opacity-60 absolute top-0 left-0'></div>
            <div className='absolute bottom-0 left-0 max-w-2xl px-4 mb-24 md:mb-24 lg:mb-32 lg:ml-20' >
                <small className='text-accent font-bold uppercase'>special meal</small>
                <h2 className='font-black text-primary text-3xl md:text-5xl mb-10 mt-2 leading-normal'>{meals[randomNumber].title}</h2>
                {/* <p className='font-bold text-xl mb-10 space-x-3'><span className='text-green-700'>&#8358;25,000</span><span className='text-red-500 line-through'>&#8358;40,000</span></p> */}
                <Link href={"meal/"+meals[randomNumber].slug} className='px-10 py-4 rounded-3xl bg-primary hover:bg-accent hover:text-white transition-all text-accent font-bold'>Order now</Link>
            </div>
        </header>
    )
}

export default Banner
import Link from 'next/link'
import { TMeal } from '@/types'
import { SpecialMeals } from '@/lib/graphcms';
import SwiperList from '../datalist/SwiperList';

const Banner = async() => {

    const getRandomNumber = (min:number, max:number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const meals: TMeal[] = await SpecialMeals();

    return <SwiperList meals={meals} />
    
}

export default Banner
import Banner from '@/components/banners/Banner'
import FeaturedMenu from '@/components/datalist/Slidermenu'
import Potservices from '@/components/datalist/Potservices'
import AppLaunch from '@/components/Appsoon'
import Contact from '@/components/Contactsection'
import WhatsApp from '@/components/WhatsApp'
import Modal from '@/components/Modal'
import { TMeal } from '@/types'
import { SpecialMeals, FeaturedMeals, PotMeals } from '@/actions'
import MockBanner from '@/components/loaders/MockBanner'
import MockSliderPosts from '@/components/loaders/MockSliderPosts'
import MockPots from '@/components/loaders/MockPots'

export const revalidate = 10;

export default async function Home() {

    const getRandomNumber = (min:number, max:number) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const specialMeals: TMeal[] = await SpecialMeals();
    const featuredMeals: TMeal[]  = await FeaturedMeals();
    const potMeals: TMeal[]  = await PotMeals();
    const number = getRandomNumber(4, -1);

    return (
      <>
        <Banner meals = {specialMeals} random={number} />
        <FeaturedMenu meals={featuredMeals} />
        <Potservices meals={potMeals} />
        <AppLaunch />
        <Contact />
        <WhatsApp />
        {/* <Modal type='seasonal' discount={80} /> */}
        {/* <MockBanner />
        <MockSliderPosts />
        <MockPots />
        <AppLaunch />
        <Contact /> */}
      </>
    )
}

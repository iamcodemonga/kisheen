import Footer from '@/components/Footer'
import Navbar from '@/components/bars/Navbar'
import Banner from '@/components/banners/Banner'
import Slidermenu from '@/components/datalist/Slidermenu'
import Potservices from '@/components/datalist/Potservices'
import Appsoon from '@/components/Appsoon'
import Contactsection from '@/components/Contactsection'
import Services from '@/components/Services'
import WhatsApp from '@/components/WhatsApp'
import Modal from '@/components/Modal'
import { SpecialMeals, FeaturedMeals, PotMeals } from '@/lib/fetch'

export const revalidate = 10;

export default async function Home() {

    const special: any = await SpecialMeals()
    const featured: any = await FeaturedMeals();
    const pot: any = await PotMeals()
    
    const getRandomNumber = (min:number, max:number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
      <>
        <Navbar type="transparent" />
        <Banner meals = {special} random={getRandomNumber(4, -1)} />
        <Slidermenu meals={featured} />
        {/* <Menu /> */}
        <Potservices meals={pot} />
        <Services />
        <Appsoon />
        <Contactsection />
        <Footer />
        <WhatsApp />
        <Modal type='seasonal' discount={80} />
      </>
    )
}

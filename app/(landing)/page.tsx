import Banner from '@/components/banners/Banner'
import FeaturedMenu from '@/components/datalist/Slidermenu'
import Potservices from '@/components/datalist/Potservices'
import AppLaunch from '@/components/Appsoon'
import Contact from '@/components/Contactsection'
import WhatsApp from '@/components/WhatsApp'
import Modal from '@/components/Modal'
import Navbar from '@/components/bars/Navbar'
import { FeaturedMeals } from '@/actions'
import { TMeal } from '@/types'

export const revalidate = 10;

export default async function Home() {

  const meals: TMeal[]  = await FeaturedMeals();

    return (
      <>
        <Navbar />
        <Banner />
        <FeaturedMenu meals={meals} />
        <Potservices />
        <AppLaunch />
        <Contact />
        <WhatsApp />
        {/* <Modal type='seasonal' discount={80} /> */}
      </>
    )
}

import Banner from '@/components/banners/Banner'
import FeaturedMenu from '@/components/datalist/Slidermenu'
import Potservices from '@/components/datalist/Potservices'
import AppLaunch from '@/components/Appsoon'
import Contact from '@/components/Contactsection'
import WhatsApp from '@/components/WhatsApp'
import Modal from '@/components/Modal'
import Navbar from '@/components/bars/Navbar'
import { FeaturedMeals } from '@/lib/graphcms'
import { TMeal } from '@/types'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { EmailExists } from '@/lib/graphcms'
import Footer from '@/components/Footer'

// export const revalidate = 10;
export const dynamic = "force-dynamic";

export default async function Home() {
  const meals: TMeal[]  = await FeaturedMeals();
  const session = await getServerSession(authOptions)
  const user = await EmailExists(session?.user?.email as string)

    return (
      <>
        <Navbar user={user[0]} />
        <Banner />
        <FeaturedMenu meals={meals} />
        <Potservices />
        <AppLaunch />
        <Contact />
        <WhatsApp />
        <Footer />
        {/* <Modal type='seasonal' discount={80} /> */}
      </>
    )
}

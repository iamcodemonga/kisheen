import Banner from '@/components/banners/Banner'
import FeaturedMenu from '@/components/datalist/Slidermenu'
import Potservices from '@/components/datalist/Potservices'
import Bigbites from '@/components/datalist/Bigbites'
import AppLaunch from '@/components/Appsoon'
import Contact from '@/components/Contactsection'
import Modal from '@/components/Modal'
import Navbar from '@/components/bars/Navbar'
import { Choppables, FeaturedMeals } from '@/lib/graphcms'
import { TMeal } from '@/types'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { getUser } from '@/lib/datacalls'
import axios from 'axios'
import RegisterBonusPop from '@/components/popups/RegisterBonusPop'
import Discount from '@/components/popups/Discount'
import PopularMeals from '@/components/datalist/potcustom/PopularMeals'
import HomePotList from '@/components/datalist/potcustom/HomePotList'

export const dynamic = "force-dynamic";

export default async function Home() {
  const meals: TMeal[]  = await FeaturedMeals();
  const chopps: TMeal[]  = await Choppables();
  const session = await getServerSession(authOptions)
  const user = await getUser(session?.user?.email as string)

  const [ discount, settings ] = await Promise.all([
    axios(`${process.env.API_ROOT}/settings/discount`),
    axios(`${process.env.API_ROOT}/settings`)
  ])

  const loggedin = user.profile?.bonuslevel ? true : false;
  
  let bonus: number = (user.profile?.bonuslevel == 0 ? process.env.REGBONUS : discount.data.type == "none" ? 0 : discount.data.type == "regular" ? discount.data.rate : discount.data.type == "seasonal" ? discount.data.rate : 0);

  console.log(user.profile?.bonuslevel)
  
    return (
      <>
        <Navbar user={user.profile} allowcart={settings.data.cart} />
        <Banner />
        <PopularMeals />
        <HomePotList />
        {/* <FeaturedMenu meals={meals} discount={bonus} allowcart={settings.data.cart} /> */}
        {/* <Bigbites meals={chopps} allowcart={settings.data.cart} discount={bonus} /> */}
        {/* <Potservices /> */}
        <AppLaunch />
        <Contact />
        {loggedin ? null : <RegisterBonusPop loggedin={loggedin} />}
        {loggedin ? discount.data.type == "seasonal" ? <Discount loggedin={loggedin} rate={discount.data.rate} season={discount.data.season} level={user.profile?.bonuslevel} /> : null : null}
        {/* <Modal type='seasonal' discount={80} /> */}
      </>
    )
}

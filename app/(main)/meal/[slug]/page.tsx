import FoodInfo from '@/components/FoodInfo'
import WhatsApp from '@/components/WhatsApp'
import RecommendedMeals from '@/components/datalist/RecommendedMeals'
import { Meal, SimilarMeals, SimilarPotMeals } from '@/lib/graphcms'
import { redirect } from 'next/navigation'
import Navbar from '@/components/bars/Navbar'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { EmailExists } from '@/lib/graphcms'
import Footer from '@/components/Footer'
import { getUser } from '@/lib/datacalls'
import axios from 'axios'
import MockDetails from '@/components/loaders/MockDetails'

type Pageprops  = {
    params: {
        slug: string;
    }
}

const page = async({ params } : Pageprops) => {
    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)

    const meal = await Meal(params.slug);

    const [ discount, settings ] = await Promise.all([
        axios(`${process.env.API_ROOT}/settings/discount`),
        axios(`${process.env.API_ROOT}/settings`)
      ])
    
      let bonus: number = (user.profile?.bonuslevel == 0 ? process.env.REGBONUS : discount.data.type == "none" ? 0 : discount.data.type == "regular" ? discount.data.rate : discount.data.type == "seasonal" ? discount.data.type : 0);

    if(!meal) {
        redirect('/');
    }

    let similarMeals;

    if (meal.type != "pot") {
        similarMeals = await SimilarMeals(params.slug, meal.category);
    } else {
        similarMeals = await SimilarPotMeals(meal.id);
    }
   
    return (
        <>
            <Navbar user={user.profile} allowcart={settings.data.cart} />
            <FoodInfo meal={meal} allowcart={settings.data.cart} discount={bonus} />
            <RecommendedMeals meals={similarMeals} type={meal.type == "pot" ? meal.type : meal.type} allowcart={settings.data.cart} discount={bonus} />
        </>
    )
}

export default page
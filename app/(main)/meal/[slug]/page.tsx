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

type Pageprops  = {
    params: {
        slug: string;
    }
}

const page = async({ params } : Pageprops) => {
    const session = await getServerSession(authOptions)
    const user = await EmailExists(session?.user?.email as string)

    const meal = await Meal(params.slug);

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
            <Navbar user={user[0]} />
            <FoodInfo meal={meal} />
            <RecommendedMeals meals={similarMeals} type={meal.type == "pot" ? meal.type : meal.type} />
            <Footer />
            <WhatsApp />
        </>
    )
}

export default page
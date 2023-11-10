import FoodInfo from '@/components/FoodInfo'
import WhatsApp from '@/components/WhatsApp'
import RecommendedMeals from '@/components/datalist/RecommendedMeals'
import { Meal, SimilarMeals, SimilarPotMeals } from '@/actions'
import { redirect } from 'next/navigation'
import Navbar from '@/components/bars/Navbar'

type Pageprops  = {
    params: {
        slug: string;
    }
}

const page = async({ params } : Pageprops) => {
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
            <Navbar />
            <FoodInfo meal={meal} />
            <RecommendedMeals meals={similarMeals} type={meal.type == "pot" ? meal.type : meal.type} />
            <WhatsApp />
        </>
    )
}

export default page
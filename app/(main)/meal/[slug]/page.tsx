import FoodInfo from '@/components/FoodInfo'
import WhatsApp from '@/components/WhatsApp'
import RecommendedMeals from '@/components/datalist/RecommendedMeals'
import React, { FC } from 'react'
import { Meal, SimilarMeals } from '@/actions'
import { redirect } from 'next/navigation'
import MockDetails from '@/components/loaders/MockDetails'

// interface Pageprops  = {
//     params: {
//         slug: string
//     }
// }

const page = async({ params } : any) => {

    const meal:any = await Meal(params.slug);

    if(!meal) {
        redirect('/');
    }

    const similar:any = await SimilarMeals(params.slug, meal.category)
   
    return (
        <>
            <FoodInfo meal={meal} />
            <RecommendedMeals meals={similar} />
            <WhatsApp />
            {/* <MockDetails /> */}
        </>
    )
}

export default page
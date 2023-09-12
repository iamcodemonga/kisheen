import FoodInfo from '@/components/FoodInfo'
import Footer from '@/components/Footer'
import Navbar from '@/components/bars/Navbar'
import WhatsApp from '@/components/WhatsApp'
import RecommendedMeals from '@/components/datalist/RecommendedMeals'
import React, { FC } from 'react'
import { Meal, SimilarMeals } from '@/lib/fetch'
import { redirect } from 'next/navigation'

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
            <Navbar />
            <FoodInfo meal={meal} />
            <RecommendedMeals meals={similar} />
            <Footer />
            <WhatsApp />
        </>
    )
}

export default page
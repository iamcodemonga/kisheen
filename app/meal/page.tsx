import FoodInfo from '@/components/FoodInfo'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import RecommendedMeals from '@/components/datalist/RecommendedMeals'
import React, { FC } from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <FoodInfo />
            <RecommendedMeals />
            <Footer />
        </>
    )
}

export default page
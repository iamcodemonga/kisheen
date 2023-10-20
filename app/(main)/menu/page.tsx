import Menusection from '@/components/Menusection'
import WhatsApp from '@/components/WhatsApp'
import React from 'react'
import { redirect } from 'next/navigation'
import { AllMeals, CategorisedMeals, FilterdedMeals } from '@/actions'
import MockMenu from '@/components/loaders/MockMenu'

const Menu = async({ searchParams }: any) => {

    let categories: string[] = [ 'soup', 'sauce', 'rice' ]
    let category :string= searchParams.category;
    let min:number = Number(searchParams.min);
    let max:number = Number(searchParams.max);
    let meals = await AllMeals();

    if (min == undefined || min < 0 || Number.isNaN(min)) {
        min = 0;
    }

    if (max == undefined || max < 0 || Number.isNaN(max)) {
        max = 100000;
    } 

    if (min > max) {
        max = 100000;
    }

    if (category == undefined || category == '') {
        const filteredMeals = await FilterdedMeals(min, max)
        return (
            <>
                <Menusection meals={filteredMeals} active={null} />
                <WhatsApp />
            </>
        )
        
    } else if (categories.includes(category)) {

        const index = categories.indexOf(category)
        const mealcategory = categories[index]
        meals = await FilterdedMeals(min, max, category)

        return (
            <>
                <Menusection meals={meals} active={mealcategory}  />
                <WhatsApp />
            </>
        )
    } else {
        redirect('/')
    }

    // console.log(searchParams.category)

    // if (searchParams) {
    //     console.log('no params')
    // }

    // if (searchParams = {}) {
    //     console.log('no params')
    // }
    // console.log(searchParams)

    
}

export default Menu
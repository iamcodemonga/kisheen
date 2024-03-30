import Menusection from '@/components/Menusection'
import WhatsApp from '@/components/WhatsApp'
import { redirect } from 'next/navigation'
import { AllMeals, FilterdedMeals } from '@/lib/graphcms'
import Navbar from '@/components/bars/Navbar'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import Footer from '@/components/Footer'
import { getUser } from '@/lib/datacalls'
import axios from 'axios'
import MockMenu from '../../../components/loaders/MockMenu'

const Menu = async({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)

    const [ discount, settings ] = await Promise.all([
        axios(`${process.env.API_ROOT}/settings/discount`),
        axios(`${process.env.API_ROOT}/settings`)
      ])
    
      let bonus: number = (user.profile?.bonuslevel == 0 ? process.env.REGBONUS : discount.data.type == "none" ? 0 : discount.data.type == "regular" ? discount.data.rate : discount.data.type == "seasonal" ? discount.data.rate : 0);

    let categories: string[] = [ 'soup', 'sauce', 'rice', 'meats' ]
    let category :string = searchParams.category as string;
    let min:number = Number(searchParams.min);
    let max:number = Number(searchParams.max);
    let meals = await AllMeals();

    console.log(``)

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
        const filteredMeals = await FilterdedMeals(6, 0, min, max)
        return (
            <>
                <Navbar user={user.profile} allowcart={settings.data.cart} />
                <Menusection meals={filteredMeals} active={null} initialMinimumPrice={min} initialMaximumPrice={max} discount={bonus} allowcart={settings.data.cart} />
            </>
        )
        
    } else if (categories.includes(category)) {

        const index = categories.indexOf(category)
        const mealcategory = categories[index]
        meals = await FilterdedMeals(6, 0, min, max, category)

        return (
            <>
                <Navbar user={user.profile} />
                <Menusection meals={meals} active={mealcategory} initialMinimumPrice={min} initialMaximumPrice={max} discount={bonus} allowcart={settings.data.cart} />
            </>
        )
    } else {
        redirect('/')
    }

    
}

export default Menu
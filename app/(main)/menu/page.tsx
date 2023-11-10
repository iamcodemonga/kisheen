import Menusection from '@/components/Menusection'
import WhatsApp from '@/components/WhatsApp'
import { redirect } from 'next/navigation'
import { AllMeals, FilterdedMeals } from '@/actions'
import Navbar from '@/components/bars/Navbar'

const Menu = async({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {

    let categories: string[] = [ 'soup', 'sauce', 'rice' ]
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
                <Navbar />
                <Menusection meals={filteredMeals} active={null} initialMinimumPrice={min} initialMaximumPrice={max} />
                <WhatsApp />
            </>
        )
        
    } else if (categories.includes(category)) {

        const index = categories.indexOf(category)
        const mealcategory = categories[index]
        meals = await FilterdedMeals(6, 0, min, max, category)

        return (
            <>
                <Navbar />
                <Menusection meals={meals} active={mealcategory} initialMinimumPrice={min} initialMaximumPrice={max} />
                <WhatsApp />
            </>
        )
    } else {
        redirect('/')
    }

    
}

export default Menu
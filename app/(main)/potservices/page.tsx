import React from 'react'
import PotList from '@/components/datalist/Potservices'
import WhatsApp from '@/components/WhatsApp'
import { PotMeals } from '@/actions'

const Potservices = async() => {

    const pot: any = await PotMeals()

    return (
        <>
            <PotList meals={pot} />
            <WhatsApp />
        </>
    )
}

export default Potservices
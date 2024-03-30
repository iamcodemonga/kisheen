import React from 'react'
import { useFormStatus } from 'react-dom'
import FormLoader from '../loaders/FormLoader'

const DiscountBtn = () => {

    const { pending } = useFormStatus()
    
    return (
        <>
            <button type="submit" className=' bg-accent py-4 lg:py-3 w-full md:w-60 rounded-lg text-base font-medium mb-3 mx-auto text-primary'>submit</button>
            {pending ? <FormLoader /> : null}
        </>
    )
}

export default DiscountBtn
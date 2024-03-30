import React from 'react'
import { useFormStatus } from 'react-dom'

const HireUserBtn = () => {

    const { pending } = useFormStatus()

    return (
        <button type="submit" className='w-full py-3 md:py-4 rounded-md bg-gray-900 text-primary text-sm'>{pending ? "Employing.." : "submit"}</button>
    )
}

export default HireUserBtn
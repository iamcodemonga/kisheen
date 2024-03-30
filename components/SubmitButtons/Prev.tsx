import React from 'react'
import { useFormStatus } from 'react-dom'
import FormLoader from '../loaders/FormLoader'

type Props = {}

const PrevBtn = (props: Props) => {

    const { pending } = useFormStatus()

    return (
        <>
            <button type="submit" className='flex items-center mb-5 rounded-full py-2 px-7 hover:border-primary bg-gray-800 font-normal text-sm text-primary hover:bg-gray-800/90'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>Previous
            </button>
            {pending ? <FormLoader /> : null}
        </>
    )
}

export default PrevBtn
import React from 'react'
import { useFormStatus } from 'react-dom'
import FormLoader from '../loaders/FormLoader'

type Props = {}

const NextBtn = (props: Props) => {

    const { pending } = useFormStatus()

    return (
        <>
            <button type="submit" className='ml-3 flex items-center mb-5 rounded-full py-2 px-7 text-primary font-normal text-sm bg-accent hover:bg-accent/90'>Next
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </button>
            {pending ? <FormLoader /> : null}
        </>
    )
}

export default NextBtn
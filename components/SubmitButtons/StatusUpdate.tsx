import React from 'react'
import { useFormStatus } from 'react-dom'
import FormLoader from '../loaders/FormLoader'

type Props = {}

const StatusUpdateBtn = (props: Props) => {

    const { pending } = useFormStatus()

    return (
        <>
            <button type="submit" className='px-5 py-2 rounded-md bg-gray-900 text-primary mt-5 mr-auto block text-sm'>{pending ? "Loading.." : "submit"}</button>
        </>
    )
}

export default StatusUpdateBtn
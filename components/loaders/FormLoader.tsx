import React from 'react'
import { ClockLoader } from 'react-spinners'

type Props = {}

const FormLoader = (props: Props) => {
    return (
        <div className='bg-black/90 w-full h-screen fixed top-0 left-0 flex items-center justify-center'>
            <ClockLoader
            color="#f75c04"
            size={50}
            />
        </div>
    )
}

export default FormLoader
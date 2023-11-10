import MockDetails from '@/components/loaders/MockDetails'
import MockNavbar from '@/components/loaders/MockNavbar'
import React from 'react'

const loading = () => {
    return (
        <>
            <MockNavbar />
            <MockDetails />
        </>
    )
}

export default loading
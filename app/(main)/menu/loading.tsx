import MockMenu from '@/components/loaders/MockMenu'
import MockNavbar from '@/components/loaders/MockNavbar'
import React from 'react'

const loading = () => {
    return (
        <>
            <MockNavbar />
            <MockMenu />
        </>
    )
}

export default loading
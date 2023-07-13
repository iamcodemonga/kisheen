import React from 'react'
import Filterform from '../forms/Filter'

const Filterbars = () => {
    return (
      <aside className='w-64 px-10 fixed lg:hidden top-0 left-0 bg-primary h-full pt-28 space-y-10'>
        <Filterform />
      </aside>
    )
}

export default Filterbars
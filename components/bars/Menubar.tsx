import React from 'react'
import Filterform from '../forms/Filter'

const Menubar = () => {
    return (
      <aside className='pt-6 lg:pt-20 hidden lg:block lg:col-span-1 lg:pl-20 space-y-10'>
          <Filterform />
      </aside>
    )
}

export default Menubar
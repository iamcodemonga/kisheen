import React from 'react'
import Fullmenu from './datalist/Fullmenu'
import Menubar from './bars/Menubar'

const Menusection = () => {
    return (
      <section className='grid grid-cols-6'>
        <Menubar />
        <Fullmenu />
      </section>
    )
}

export default Menusection
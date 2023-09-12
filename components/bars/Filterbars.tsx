"use client"

import React, { FC } from 'react'
import Filterform from '../forms/Filter'

interface Status {
  open: boolean,
  close: () => void
}

const Filterbars: FC<Status> = ({ open, close}) => {

  const handleClose = (e:any) => {
    if (e.target.id == "filterbar") close()
  }

    return (
      <aside className={open ? 'fixed w-full top-0 left-0 bg-primary/30 h-screen z-50' : 'hidden'} id='filterbar' onClick={handleClose}>
        <div className='absolute w-64 px-10 top-0 left-0 bg-primary h-full pt-28 space-y-10'>
          <button type='button' className='absolute top-0 right-0 mr-3' onClick={close}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </aside>
    )
}

export default Filterbars
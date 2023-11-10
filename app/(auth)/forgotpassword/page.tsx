import React from 'react'
import ForgotpasswordForm from '@/components/forms/ForgotpasswordForm'
import Authbar from '@/components/bars/Authbar'

const ForgotPassword = () => {
    return (
        <section className='w-full h-screen relative overflow-hidden flex items-center justify-center'>
            <img className='w-full h-full object-cover scale-150' src="https://guardian.ng/wp-content/uploads/2018/08/Seafood-okra.-Photo-FoodAce-e1534093097400.jpg" alt="meal" />
            <div className='w-full h-full backdrop-blur-md md:backdrop-blur-none bg-black/80 absolute top-0 left-0'></div>
            <Authbar />
            <ForgotpasswordForm />
        </section>
    )
}

export default ForgotPassword
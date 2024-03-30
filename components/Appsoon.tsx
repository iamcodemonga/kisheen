import React from 'react'

const Appsoon = () => {
    return (
        <section className='px-4 lg:px-20 bg-accent py-28 w-full flex justify-center'>
            <div className='lg:flex justify-between items-center space-y-8 gap-x-32'>
                <div className='block'>
                    <h3 className='font-black text-3xl lg:text-6xl text-center lg:text-start'>APP COMING SOON</h3>
                    <div className="block"><p className='max-w-xl my-8 text-center lg:text-start mx-auto text-slate-800 font-normal'>We are currently working on our mobile app which will contain a lot more features that will benefit and satisfy your needs and enhance our services.</p></div>
                    <div className='flex items-center justify-center lg:justify-start gap-x-3'>
                        <a href="http://"><img className='w-40' src="https://www.google.com/intl/en/cast/about/static/images/download-badges/android-download.png" alt="download" /></a>
                        <a href="http://"><img className='w-40' src="https://www.steamyconcepts.com/wp-content/uploads/Steamy-Concepts-Mobile-App-Store-Apple-iOS.png" alt="download" /></a>
                    </div>
                </div>
                <div className='block'>
                    <img src="app.png" alt="" className='w-full lg:max-w-lg mx-auto' />
                </div>
            </div>
        </section>
    )
}

export default Appsoon
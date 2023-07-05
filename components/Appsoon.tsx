import React from 'react'

const Appsoon = () => {
    return (
        <section className='px-4 lg:px-20 bg-accent py-40 mt-10 lg:mt-16 w-full flex justify-center'>
            <div className='lg:flex justify-between items-center space-y-16'>
                <div>
                    <h3 className='font-black'>APP COMMING SOON</h3>
                    <p className='max-w-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut impedit tenetur incidunt hic fuga, quasi reprehenderit eligendi quisquam consectetur ipsa?</p>
                    <div className='flex items-center gap-x-3'>
                        <a href="http://"><img className='w-40' src="https://www.google.com/intl/en/cast/about/static/images/download-badges/android-download.png" alt="download" /></a>
                        <a href="http://"><img className='w-40' src="https://www.steamyconcepts.com/wp-content/uploads/Steamy-Concepts-Mobile-App-Store-Apple-iOS.png" alt="download" /></a>
                    </div>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-psd/premium-mobile-phone-screen-mockup-template_53876-65749.jpg?size=626&ext=jpg" alt="" className='w-full lg:max-w-lg' />
                </div>
            </div>
        </section>
    )
}

export default Appsoon
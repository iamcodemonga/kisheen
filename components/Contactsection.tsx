import Contact from './forms/Contactform'
import Faqs from './Faqs'

const Contactsection = () => {
    return (
        <section className='grid px-4 lg:px-20 lg:grid-cols-2 pt-40 pb-28 lg:pb-40 gap-y-10 gap-x-32'>
            <Contact />
            <Faqs />
        </section>
    )
}

export default Contactsection
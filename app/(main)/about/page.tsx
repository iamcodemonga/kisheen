import Aboutheader from '@/components/Aboutheader'
import AppLaunch from '@/components/Appsoon'
import Contact from '@/components/Contactsection'
import WhatsApp from '@/components/WhatsApp'
import Navbar from '@/components/bars/Navbar'

const About = () => {
    return (
        <>
            <Navbar />
            <Aboutheader />
            <AppLaunch />
            <Contact />
            <WhatsApp />
        </>
    )
}

export default About
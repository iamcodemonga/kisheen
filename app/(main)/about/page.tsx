import Aboutheader from '@/components/Aboutheader'
import AppLaunch from '@/components/Appsoon'
import Contact from '@/components/Contactsection'
import WhatsApp from '@/components/WhatsApp'
import Navbar from '@/components/bars/Navbar'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { EmailExists } from '@/lib/graphcms'
import Footer from '@/components/Footer'

const About = async() => {
    const session = await getServerSession(authOptions)
    const user = await EmailExists(session?.user?.email as string)

    return (
        <>
            <Navbar user={user[0]} />
            <Aboutheader />
            <AppLaunch />
            <Contact />
            <WhatsApp />
            <Footer />
        </>
    )
}

export default About
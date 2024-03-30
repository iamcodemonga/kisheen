import Aboutheader from '@/components/Aboutheader'
import AppLaunch from '@/components/Appsoon'
import Contact from '@/components/Contactsection'
import WhatsApp from '@/components/WhatsApp'
import Navbar from '@/components/bars/Navbar'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { EmailExists } from '@/lib/graphcms'
import Footer from '@/components/Footer'
import { getUser } from '@/lib/datacalls'

const About = async() => {
    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)

    return (
        <>
            <Navbar user={user.profile} />
            <Aboutheader />
            <AppLaunch />
            <Contact />
        </>
    )
}

export default About
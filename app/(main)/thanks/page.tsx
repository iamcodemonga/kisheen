import Navbar from '@/components/bars/Navbar'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { EmailExists } from '@/lib/graphcms'
import ThanksSection from '@/components/Gratitude'

const thanks = async() => {
    const session = await getServerSession(authOptions)
    const user = await EmailExists(session?.user?.email as string)

    return (
        <>
            <Navbar user={user[0]} />
            <ThanksSection />
        </>
    )
}

export default thanks
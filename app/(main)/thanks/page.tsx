import Navbar from '@/components/bars/Navbar'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { EmailExists } from '@/lib/graphcms'
import ThanksSection from '@/components/Gratitude'

const thanks = async({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const session = await getServerSession(authOptions)
    const user = await EmailExists(session?.user?.email as string)

    const refno: string = searchParams.refno as string;

    return (
        <>
            <Navbar user={user[0]} />
            <ThanksSection refno={refno} />
        </>
    )
}

export default thanks
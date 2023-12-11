import Navbar from '@/components/bars/Navbar'
import Bio from '@/components/profile/Userheading'
import Tab from '@/components/profile/Usersection'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { EmailExists } from '@/lib/graphcms'

const Dashboard = async() => {
    const session = await getServerSession(authOptions)
    const user = await EmailExists(session?.user?.email as string)

    return (
        <>
            <Navbar user={user[0]}  />
            <Bio page='index' user={user[0]} />
            <Tab page='index' user={user[0]}/>
        </>
    )
}

export default Dashboard
import Bio from '@/components/profile/Userheading'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import Mealorders from '@/components/datalist/Mealorders'
import { getUser, getUserOrders } from '@/lib/datacalls'
import { redirect } from 'next/navigation'
import ProfileNav from '@/components/bars/ProfileNav'

type TUserProps = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    password?: string;
}

export const dynamic = "force-dynamic";

const Dashboard = async() => {
    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)

    if (user.profile.role == "board") {
        redirect('/admin')
    }

    if (user.profile.role == "manager") {
        redirect('/admin/orders')
    }

    if (user.profile.role == "agent") {
        redirect('/admin/orders')
    }
    // const orders =  await MyOrders(userparams.profile.email, 6, 0)
    const orders =  await getUserOrders(user.profile.email, 0, 6)

    return (
        <section className='gap-7'>
            <ProfileNav />
            <Bio page='index' user={user.profile} />
            <Mealorders orders={orders} email={user.profile.email} />
        </section>
    )
}

export default Dashboard
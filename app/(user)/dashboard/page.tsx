import Navbar from '@/components/bars/Navbar'
import Bio from '@/components/profile/Userheading'
import Tab from '@/components/profile/Usersection'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { EmailExists, MyOrders } from '@/lib/graphcms'
import Footer from '@/components/Footer'
import Mealorders from '@/components/datalist/Mealorders'
import Link from 'next/link'
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

type Active = {
    page: string;
    user: TUserProps;
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
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import EditUserForm from '@/components/forms/EditUserForm'
import Changepassword from '@/components/forms/Changepassword';
import { getUser } from '@/lib/datacalls';
import { redirect } from 'next/navigation';
import ProfileNav from '@/components/bars/ProfileNav';

export const dynamic = "force-dynamic";

const Settings = async() => {
    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)

    if (user.profile.role == "board" || user.profile.role == "manager" || user.profile.role == "agent") {
        redirect('/admin/settings')
    }

    console.log(user);
    
    
    return (
        <section className='px-5 gap-7 w-full'>
            <ProfileNav />
            {/* <Bio page='index' user={userparams[0]} /> */}
            <div className="grid grid-cols-12 mt-10 gap-y-16 lg:gap-y-0 lg:gap-x-8 pb-28">
                <EditUserForm id={user.profile.id} first={user.profile.firstname} last={user.profile.lastname} gend={user.profile.gender} />
                <Changepassword id={user.profile.id} />
            </div>
        </section>
    )
}

export default Settings
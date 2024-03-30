import Footer from "@/components/Footer"
import AdminLeftbar from "@/components/admin/AdminLeftbar"
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getUser } from '@/lib/datacalls'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)

    if (user.profile.role == "customer") {
        redirect('/dashboard')
    }
  
    return (
        <section className='flex w-full h-screen'>
            <AdminLeftbar previledge={user.profile.role} music={'/livechat.mp3'} />
            <main className='w-full lg:ml-72 px-5 overflow-x-hidden'>
                {children}
                <footer className='pt-10 pb-5'>
                    <p className='text-gray-700 text-sm text-center space-x-5 font-normal'>
                        <a href="/admin/enugu" className='text-accent underline'>Enugu</a>
                        <a href="/admin/enugu" className='text-accent underline'>Akwa Ibom</a>
                        <a href="/admin/enugu" className='text-accent underline'>Asaba</a>
                        <a href="/admin/enugu" className='text-accent underline'>Port Harcourt</a>
                        <a href="/admin/enugu" className='text-accent underline'>Lagos</a>
                        <a href="/admin/enugu" className='text-accent underline'>Abuja</a>
                    </p>
                    <p className='text-gray-400 text-sm text-center'>copyright&copy; kisheen 2024</p>
                </footer>
            </main>
        </section>
    )
  }
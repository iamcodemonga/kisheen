// import "../globals.css"

import Navbar from '@/components/bars/Navbar'
import Userbar from '@/components/bars/Userbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getUser } from '@/lib/datacalls'
import { redirect } from 'next/navigation'
import WhatsApp from '@/components/WhatsApp'

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)
  const user = await getUser(session?.user?.email as string)

  if (user.profile.role == "board") {
      redirect('/admin')
  }

  if (user.profile.role == "manager" || user.profile.role == "agent") {
    redirect('/admin/order')
}

  return (
        <section className='flex w-full h-screen'>
            <Userbar />
            <main className='w-full lg:ml-72 overflow-x-hidden'>
                {children}
                <WhatsApp />
                <Footer />
            </main>
        </section>
  )
}

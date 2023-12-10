import './globals.css'
import Navbar from '@/components/bars/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ProgressBar from '@/components/ProgressBar'
import ReduxProvider from '@/features/ReduxProvider'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]/options'
import AuthProvider from './context/Providers'

export const metadata = {
  title: 'Eat healthy, Live longer - Qitcheen',
  description: 'Get the best Nigerian delicacies at your door step in no time ',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions);
  // console.log(session?.user)

  return (
      <html lang="en">
        <body className='bg-primary'>
          <AuthProvider session={session}>
            <ReduxProvider>
              <ProgressBar>
                  <ScrollToTop /> 
                    {children}
                  <Footer />
              </ProgressBar>
            </ReduxProvider>
          </AuthProvider>
        </body>
      </html>
  )
}

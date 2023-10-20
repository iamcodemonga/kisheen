import './globals.css'
import Navbar from '@/components/bars/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ProgressBar from '@/components/ProgressBar'

export const metadata = {
  title: 'Eat healthy, Live longer - Qitcheen',
  description: 'Get the best Nigerian delicacies at your door step in no time ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className='bg-primary'>
          <ProgressBar>
              <ScrollToTop /> 
              <Navbar />
              {children}
              <Footer />
          </ProgressBar>
        </body>
      </html>
  )
}

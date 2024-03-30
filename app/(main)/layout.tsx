import Navbar from '@/components/bars/Navbar'
import Footer from '@/components/Footer'
import WhatsApp from '@/components/WhatsApp'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
        <section className=''>
            {children}
            <WhatsApp />
            <Footer />
        </section>
  )
}

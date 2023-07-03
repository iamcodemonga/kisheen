import Image from 'next/image'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Sidebar from '@/components/Sidebar'
import Menu from '@/components/datalist/Menu'
import Slidermenu from '@/components/datalist/Slidermenu'
import Potservices from '@/components/datalist/Potservices'
import Appsoon from '@/components/Appsoon'
import Contactsection from '@/components/Contactsection'
import Faqs from '@/components/Faqs'

export default function Home() {
    return (
      <>
        <Sidebar  /> 
        <Navbar /> 
        <Banner />
        {/* <Menu /> */}
        <Slidermenu />
        <Potservices />
        <Appsoon />
        <Contactsection />
        <Footer />
      </>
    )
}

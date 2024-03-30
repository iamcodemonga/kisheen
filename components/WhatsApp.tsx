import Link from 'next/link'
import Image from 'next/image'

const WhatsApp = () => {
    return (
        <div className='fixed bottom-0 right-0 p-3 md:p-5 mb-3 z-50'>
            {/* <a href={`https://wa.link/ach1qz`}><img src="whatsapp.png" alt="whatsapp_logo" className='h-20' /></a> */}
            <Link href={`https://wa.me/2347066340180?text=Hi there! I'll like to order a meal`} target='__blank'>
                <Image src="/whatsapp.png" className='object-contain' alt="whatsapp_logo" height={75} width={75} priority/>
            </Link>
        </div>
    )
}

export default WhatsApp
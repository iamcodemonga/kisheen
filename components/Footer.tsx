import Link from 'next/link'

const Footer = () => {

    return (
        <footer className='bg-gray-950 overflow-x-hidden'>
            <div className='grid lg:grid-cols-4 justify-items-center content-center gap-y-10 gap-x-5 py-24 md:py-52 px-10 lg:px-16 overflow-x-hidden'>
                <div className=''>
                    <h2 className='mt-0 mb-5 text-center font-extrabold text-accent text-4xl md:text-7xl lg:text-6xl'>Kisheen</h2>
                    <p className='text-center px-3 max-w-md text-gray-400'>Nigeria's best delicacies all in one place, prepared and delivered to your doorstep in no time.</p>
                </div>
                <div className='hidde'>
                    <ul className='space-y-2 hidden'>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/menu">Menu</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </ul>
                </div>
                <div className='mt-6'>
                    <ul className='space-y-2 text-gray-400'>
                        <li><a href="https://twitter.com" className='block text-center transition-all duration-300 hover:text-accent' target='__blank'>Twitter</a></li>
                        <li><a href="https://linkedin.com" className='block text-center transition-all duration-300 hover:text-accent' target='__blank'>LinkedIn</a></li>
                        <li><a href="https://instagram.com" className='block text-center transition-all duration-300 hover:text-accent' target='__blank'>Instagram</a></li>
                        <li><a href="https://youtube.com" className='block text-center transition-all duration-300 hover:text-accent' target='__blank'>Youtube</a></li>
                    </ul>
                </div>
                <div className='mt-6'>
                    <ul className='space-y-2 text-gray-400'>
                        <li><Link href="/about" className='block text-center transition-all duration-300 hover:text-accent'>Terms of service</Link></li>
                        <li><Link href="/about" className='block text-center transition-all duration-300 hover:text-accent'>Privacy policy</Link></li>
                        <li><Link href="/about" className='block text-center transition-all duration-300 hover:text-accent'>Company</Link></li>
                        <li><Link href="/about" className='block text-center transition-all duration-300 hover:text-accent'>Meets the chefs</Link></li>
                    </ul>
                </div>
            </div>
            <p className='text-gray-700 text-sm mb-10 text-center'>copyright&copy; kisheen 2024</p>
        </footer>
    )
}

export default Footer
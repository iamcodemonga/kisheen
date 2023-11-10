import React from 'react'

type Props = {
    heading: string;
    cta: string;
}

const EmptyPosts = ({ heading, cta }: Props) => {
    return (
        <section className='w-full h-96 border border-solid border-slate-300 flex justify-center items-center mb-7 lg:mb-0'>
            <div>
                <h2 className='text-2xl mb-5 text-center'>{heading}</h2>
                <p className='text-center'><a href="/menu" className='py-3 px-5 bg-accent hover:bg-accent/90 text-black font-bold'>{cta}</a></p>
                {/* <h2 className='text-2xl mb-5 text-center'>No orders yet!</h2>
                <h2 className='text-2xl mb-5 text-center'>Search not found!</h2> */}
                {/* <p className='text-center'><Link href="/menu" className='py-3 px-5 bg-accent hover:bg-accent/90 text-black font-bold'>Order now</Link></p>
                <p className='text-center'><Link href="/menu" className='py-3 px-5 bg-accent hover:bg-accent/90 text-black font-bold'>Back to Menu</Link></p> */}
            </div>
        </section>
    )
}

export default EmptyPosts
import React from 'react'

const Aboutheader = () => {
    return (
        <section>
            <div className='lg:grid grid-cols-2 items-center gap-7 px-4 lg:px-20 lg:pt-20'>
                <div>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rerum sit sunt quos architecto illum. Repellat ex perspiciatis debitis architecto.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rerum sit sunt quos architecto illum. Repellat ex perspiciatis debitis architecto.</p>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 gap-14 items-center mt-20 mb-28'>
                <div className='mt-0'>
                    <img className='w-full object-cover h-96' src="https://www.allrecipes.com/thmb/L3JWwNTNQjkioY3kzu1ukd3bCw8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/12978-Egusi-Soup-ddmfs-024-2x1-1-db86e652329940219b3d2bcd4001d489.jpg" alt="" />
                </div>
                <div className='space-y-16'>
                    <h2>How we work</h2>
                    <div className='space-y-7'>
                        <div className='flex max-w-lg items-center gap-5'>
                            <h1 className='mb-1'>01</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit at hic? Perferendis, omnis accusamus.</p>
                        </div>
                        <div className='flex max-w-lg items-center gap-5'>
                            <h1 className='mb-1'>02</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit at hic? Perferendis, omnis accusamus.</p>
                        </div>
                        <div className='flex max-w-lg items-center gap-5'>
                            <h1 className='mb-1'>03</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit at hic? Perferendis, omnis accusamus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutheader
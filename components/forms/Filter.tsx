import React from 'react'

const Filter = () => {
    return (
        <>
            <div>
                <small className='text-accent font-bold'>CATEGORIES</small>
                <ul className='space-y-4 mt-3'>
                    <li><button className='w-full bg-accent pb-2 pt-3 rounded-full text-lg font-bold' type="button">All meals</button></li>
                    <li><button className='w-full pb-2 pt-3 rounded-full text-lg font-bold' type="button">Soup</button></li>
                    <li><button className='w-full pb-2 pt-3 rounded-full text-lg font-bold' type="button">Rice</button></li>
                    <li><button className='w-full pb-2 pt-3 rounded-full text-lg font-bold' type="button">Sauce</button></li>
                </ul>
            </div>
            <div>
                <small className='text-accent font-bold'>PRICE FILTER</small>
                <form action="" method="post" className='space-y-5 mt-4'>
                    <input type="number" name="" id="minimum" className='bg-gray-200 px-3 py-2 rounded-lg outline-none max-w-full' placeholder='minimum price' />
                    <input type="number" name="" id="maximum" className='bg-gray-200 px-3 py-2 rounded-lg outline-none max-w-full' placeholder='maximum price' />
                    <button type="submit" className='w-full pt-3 pb-2 rounded-lg bg-accent font-bold'>Filter</button>
                </form>
            </div>
        </>
    )
}

export default Filter
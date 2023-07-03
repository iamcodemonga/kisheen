import React from 'react'

const contact = () => {
    return (
        <div className=''>
            <h3 className='font-black mb-10'>Contact Us</h3>
            <form action="" method="post" className='space-y-8 lg:max-w-md w-full '>
                <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                    <label htmlFor="name" className='text-accent'>Name</label>
                    <input className='bg-transparent outline-none' type="text" name="" id="name" placeholder='Input your fullname' />
                </div>
                <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                    <label htmlFor="email" className='text-accent'>Email</label>
                    <input type="email" name="" id="email" className='bg-transparent outline-none' placeholder='Input your email address' />
                </div>
                <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                    <label htmlFor="subject" className='text-accent'>Subject</label>
                    <select name="" id="subject" className='bg-transparent outline-none'>
                        <option value="complaint">Report</option>
                        <option value="testimony">Testimony</option>
                        <option value="event" disabled>Event booking(comming soon)</option>
                    </select>
                </div>
                <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                    <label htmlFor="message" className='text-accent'>Message</label>
                    <textarea name="" id="message" cols="30" rows="3" className='bg-transparent outline-none' placeholder='write us a message'></textarea>
                </div>
                <div>
                    <button type="submit" className='bg-accent w-full pt-5 pb-4 font-bold rounded-xl text-xl'>Send message</button>
                </div>
            </form>
        </div>
    )
}

export default contact
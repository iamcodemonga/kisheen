const Contactform = () => {
    return (
        <div className='w-full justify-self-stretch'>
            <h3 className='font-black mb-10 text-5xl lg:text-6xl'>Contact <span className="text-accent">Us</span></h3>
            <form action="" method="post" className='space-y-8 lg:max-w-full w-full '>
                <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                    <label htmlFor="name" className='text-accent text-sm'>Name</label>
                    <input className='bg-transparent outline-none placeholder:font-light' type="text" name="" id="name" placeholder='Input your fullname' />
                </div>
                <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                    <label htmlFor="email" className='text-accent text-sm'>Email</label>
                    <input type="email" name="" id="email" className='bg-transparent outline-none placeholder:font-light' placeholder='Input your email address' />
                </div>
                <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                    <label htmlFor="subject" className='text-accent text-sm ml-1 mb-1'>Subject</label>
                    <select name="" id="subject" className='bg-transparent outline-none font-normal'>
                        <option value="complaint">Report</option>
                        <option value="testimony">Testimony</option>
                        <option value="event" disabled>Event booking(coming soon)</option>
                    </select>
                </div>
                <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                    <label htmlFor="message" className='text-accent text-sm'>Message</label>
                    <textarea name="" id="message" className='bg-transparent outline-none placeholder:font-light' placeholder='write us a message'></textarea>
                </div>
                <div>
                    <button type="submit" className='bg-accent w-full pt-5 pb-4 font-normal rounded-lg text-base'>Send message</button>
                </div>
            </form>
        </div>
    )
}

export default Contactform
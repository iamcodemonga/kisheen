"use client"

const SwipeControllers = () => {

    const handleSlideRight = (): void => {
        const container = document.querySelector('.slider-container') as HTMLElement;
        const containerWidth = container.getBoundingClientRect().width;
        container.scrollLeft += containerWidth;
        // container.scrollLeft += 300;
    };
    
    const handleSlideLeft = (): void => {
        const container = document.querySelector('.slider-container') as HTMLElement;
        const containerWidth = container.getBoundingClientRect().width;
        container.scrollLeft -= containerWidth;
        // container.scrollLeft -= 300;
    };

    return (
        <p className='space-x-5 text-end lg:mb-0 mt-2 lg:mt-12 lg:mr-10 pr-10'>
            <button type="button" className='p-3 bg-accent hover:bg-gray-800 transition-all rounded-full' onClick={handleSlideLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
            </button>
            <button type="button" className='p-3 bg-accent hover:bg-gray-800 transition-all rounded-full' onClick={handleSlideRight}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </p>
    )
}

export default SwipeControllers
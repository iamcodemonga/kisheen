"use client"
import { useState } from 'react'

const Faqs = () => {

    const [ QA, setQA ] = useState([
        {
            question: "Question number one Question number one",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, commodi assumenda! Facilis laboriosam animi sunt dolorem, exercitationem aliquid nisi, quasi dicta, neque mollitia placeat iure odio. Corporis doloremque molestiae quisquam."
        },
        {
            question: "Question number one Question number two",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, commodi assumenda! Facilis laboriosam animi sunt dolorem, exercitationem aliquid nisi, quasi dicta, neque mollitia placeat iure odio. Corporis doloremque molestiae quisquam."
        },
        {
            question: "Question number one Question number three",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, commodi assumenda! Facilis laboriosam animi sunt dolorem, exercitationem aliquid nisi, quasi dicta, neque mollitia placeat iure odio. Corporis doloremque molestiae quisquam."
        },
        {
            question: "Question number one Question number four",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, commodi assumenda! Facilis laboriosam animi sunt dolorem, exercitationem aliquid nisi, quasi dicta, neque mollitia placeat iure odio. Corporis doloremque molestiae quisquam."
        },
        {
            question: "Question number one Question number five",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, commodi assumenda! Facilis laboriosam animi sunt dolorem, exercitationem aliquid nisi, quasi dicta, neque mollitia placeat iure odio. Corporis doloremque molestiae quisquam."
        }
    ])

    const [ active, setActive ] = useState<number>(0);

    return (
        <div className='w-full lg:max-w-full pt-16 lg:pt-0 space-y-9 '>
            <h3 className="font-black lg:mb-16 text-4xl">Frequently Asked Questions!</h3>
            {QA && QA.map((q, index) => <div key={index}>
                <button className='flex items-center justify-between w-full mb-5' onClick={() => setActive(index)}>
                    <h5 className='my-0 text-start font-bold text-accent'>{q.question}</h5>
                    {index == active ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>}
                </button>
                <p>{index == active && q.answer}</p>
            </div>)}
        </div>
    )
}

export default Faqs
"use client"
import { useState } from 'react'

const Faqs = () => {

    const [ QA, setQA ] = useState([
        {
            question: "Is kisheen a registered business?",
            answer: "We are a registered business under the corporate affairs commission(CAC) with a CAC number CN44637171 and are currently operating in enugu state, Nigeria."
        },
        {
            question: "Where can I locate your shop?",
            answer: "Our shop is located at No. 104 new heavens road, Enugu state. you can come and buy with us or order and get you package from the comfort of your home."
        },
        {
            question: "How long does it take to receive my orders?",
            answer: "Our regular meals take somewhere from 15 - 30 minutes(considering busy roads and other factors) for your order to be delivered to your doorstep, but our pot services take within 5 - 24 hours."
        },
        {
            question: "Are deliveries available 24 hours everyday?",
            answer: "Our shops open from 7am - 8pm but we only deliver orders from 8am - 7pm everyday. Nevertheless, we accept orders 24 hours everyday"
        },
        {
            question: "Do you deliver everywhere or you have limited regions?",
            answer: "Yes, We are currently based in enugu state and we deliver everywhere in enugu state. You can also order and pickup your deliveries in our shop if you wish."
        },
        {
            question: "Do I have to register before placing an order?",
            answer: "No, you don't need to register before placing your order(s) but it is adviceable to register so you can easily track and record your order(s) for accountability and issue resolution purposes."
        }
    ])

    const [ active, setActive ] = useState<number>(0);

    return (
        <div className='w-full lg:max-w-full pt-16 lg:pt-0 space-y-9 '>
            <h3 className="font-black lg:mb-16 text-4xl">Frequently Asked <span className="text-accent">Questions!</span></h3>
            {QA && QA.map((q, index) => <div key={index}>
                <button className='flex items-center justify-between w-full mb-5' onClick={() => setActive(index)}>
                    <h5 className='my-0 text-start font-medium text-accent text-base'>{q.question}</h5>
                    {index == active ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>}
                </button>
                <p className='text-gray-500 font-normal text-sm'>{index == active && q.answer}</p>
            </div>)}
        </div>
    )
}

export default Faqs
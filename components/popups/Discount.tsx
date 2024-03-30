"use client"

import React, { useEffect, useState } from 'react'

type Props = {
    loggedin: boolean;
    season: string;
    rate: string;
    level: number
}

const Discount = ({ loggedin, season, rate, level }: Props) => {

    const [ show, setShow ] = useState(false);
    const value = { season, rate }


    const handleModal = () => {
        const item = localStorage.getItem("discount");
        if (level == 1 || level == 2) {
            if (!item) {
                setTimeout(() => {
                    setShow(true)
                    localStorage.setItem("discount", JSON.stringify(value))
                }, 7000);
            } else {
                if (JSON.parse(item).season != season || JSON.parse(item).rate != rate) {
                    setTimeout(() => {
                        setShow(true);
                        localStorage.setItem("discount", JSON.stringify(value))
                    }, 7000);
                }
            }
        }
    }

    useEffect(() => {
        handleModal();
    }, [])

    return (
        <section className={show ? 'w-full h-full fixed bg-black/90 top-0 left-0 px-5 z-20 flex justify-center items-center' : 'hidden'}>
            <div className='bg-white min-w-full lg:min-w-0 lg:w-96 py-10 px-3 rounded-xl shadow-lg'>
                <div className='block mx-auto'>
                    <div className='block mx-auto bg-green-700 w-48 py-4 rounded-full'>
                        <h5 className='text-4xl font-black text-center text-primary'>{rate}% off</h5>
                    </div>
                </div>
                <h1 className='text-center font-black text-xl text-green-700 mt-10 mb-5 uppercase'>{season == "newyear" ? "Happy new year! 🎁" : season == "val" ? "Valentine's week! 🌹" : season == "easter" ? "easter celebration! 🎁" : season == "sala" ? "Happy sala! 🎁" : season == "chrismas" ? "Merry chrismas! 🎁" : null}</h1>
                {season == "newyear" ? <h3 className='text-center text-lg mt-5 mb-3 leading-relaxed'>As we welcome the New Year with open arms, we invite you to embrace fresh beginnings with a generous <strong className='font-bold text-green-700'>{rate}%</strong> discount, our gesture of celebration and optimism. 🎉🥂 Let's embark on this journey together, filled with hope, joy, and incredible savings! 🌟✨.</h3> : 
                season == "val" ? <h3 className='text-center text-lg mt-5 mb-3 leading-relaxed'>As we immerse ourselves in the spirit of Valentine's Week, we offer you a heartwarming <strong className='font-bold text-green-700'>{rate}%</strong> discount, a token of our affection and appreciation. 💖🌹 Join us in spreading love and joy throughout this special week, where every moment is cherished and savings abound! 💝✨.</h3> : 
                season == "easter" ? <h3 className='text-center text-lg mt-5 mb-3 leading-relaxed'>Embracing the joy of Easter and the warmth of friendship, we extend to you a delightful <strong className='font-bold text-green-700'>{rate}%</strong> discount as a token of our affection. 🐰🌸 Let's celebrate the season of renewal together with love and savings! 🥚💝 </h3> : 
                season == "sala" ? <h3 className='text-center text-lg mt-5 mb-3 leading-relaxed'>In the spirit of Sala and with gratitude in our hearts, we present to you a generous <strong className='font-bold text-green-700'>{rate}%</strong> discount as a symbol of our appreciation. 🕌✨ Let's commemorate this special occasion together, sharing joy and savings! 🌙🎉 </h3> : 
                season == "chrismas" ? <h3 className='text-center text-lg mt-5 mb-3 leading-relaxed'>In the festive ambiance of Christmas, we extend to you a joyful <strong className='font-bold text-green-700'>{rate}%</strong> discount as our gift of holiday cheer. 🎄🎁 Join us in celebrating this season of giving, where happiness and savings abound! 🌟🎉.</h3> : null}
                <div className='flex justify-end mt-10'>
                    <button className='mr-5 px-5 pt-2 pb-2 rounded-full font-normal bg-gray-800 hover:bg-gray-950 text-primary' onClick={() => setShow(false)}>Got it! &#128077;</button>
                </div>
            </div>
        </section>
    )
}

export default Discount
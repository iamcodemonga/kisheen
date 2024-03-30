"use client"

import { setDiscount } from '@/actions'
import { playAudio } from '@/lib/graphcms'
import React, { FormEvent, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import DiscountBtn from '../SubmitButtons/DiscountBtn'

type Props = {
    discount: {
        type: string,
        season: string,
        rate: string
    }
}

const DiscountForm = ({ discount }: Props) => {

    const [ loading, setLoading ] = useState<boolean>(false)
    const [ type, setType ] = useState<string>(discount.type)
    const [ season, setSeason ] = useState<string>(discount.season)
    const [ rate, setRate ] = useState<string>(discount.rate)

    const handleChangeType = (value: string) => {
        if (value == "none") {
            setType(value);
            setSeason("none")
            setRate("0");
            return;
        }
        
        if (value == "regular") {
            setType(value);
            setSeason("none")
            return;
        }

        setType(value);
        return;
    }

    const handleChangeSeason = (value: string) => {
        if (value == "none") {
            setSeason(value)
            setRate("0");
            return;
        } else {
            setSeason(value);
            return;
        }
    }

    const handleChangeRate = (value: string) => {
        setRate(value);
        return;
    }

    const handleBlurRate = (value: string) => {
        if (!Number(value)) {
            setRate("0");
            return;
        }

        if (value == "") {
            setRate("0");
            return;
        } 

        if (value.charAt(0) == "0") {
            setRate("0");
            return;
        }
    }

    const handleSubmit = async() => {
        await setDiscount({ type, season, rate })
        return;
    }

    return (
        <div className='border border-accent rounded-xl mb-10 py-10 px-4 lg:px-10' >
            <h1 className="text-2xl font-normal mb-8 text-center">Discount settings</h1>
            <form action={async() => await handleSubmit()} method='post' className='space-y-5'>
                <div className='flex flex-col bg-slate-200 p-3 rounded-xl'>
                    <label htmlFor="type" className='text-accent text-sm mb-1 ml-1'>Type</label>
                    <select name="type" id="type" className='bg-transparent outline-none text-sm' value={type} onChange={(e) => handleChangeType(e.target.value)}>
                        <option value="none">None</option>
                        <option value="regular">Regular</option>
                        <option value="seasonal">Seasonal</option>
                    </select>
                </div>
                <div className='flex flex-col bg-slate-200 p-3 rounded-xl'>
                    <label htmlFor="season" className='text-accent text-sm mb-1 ml-1'>Season</label>
                    <select name="season" id="season" className='bg-transparent outline-none text-sm' value={season} onChange={(e) => handleChangeSeason(e.target.value)} disabled={type == "none" ? true : type == "regular" ? true : false}>
                        <option value="none">None</option>
                        <option value="newyear">New Year</option>
                        <option value="val">Valentine's Day</option>
                        <option value="easter">Easter</option>
                        <option value="sala">Sala</option>
                        <option value="chrismas">Chrismas</option>
                    </select>
                </div>
                <div className='flex flex-col bg-slate-200 p-3 rounded-xl'>
                    <label htmlFor="bonus" className='text-accent text-sm mb-1 ml-1'>Bonus</label>
                    <input className='bg-transparent outline-none text-sm font-normal ml-1' type="number" name="bonus" id="bonus" placeholder='Add bonus' value={rate} onChange={(e) => handleChangeRate(e.target.value)} disabled={type == "none" ? true : false} onBlur={(e) => handleBlurRate(e.target.value)} />
                </div>
                <div>
                <DiscountBtn />
                </div>
            </form>
        </div>
    )
}

export default DiscountForm
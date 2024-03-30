"use client"

import { useState } from 'react'
import BarChart from '../charts/BarChart'
import PieChart from '../charts/PieChart'
import axios from 'axios'

type TBarmetricsProps = {
    month: string,
    year: string,
    orders: number
}

type TPiemetricsProps = {
    type: string,
    year: string,
    orders: number
}

const AdminMetrics = ({ barmetrics, piemetrics, byear, pyear }: { barmetrics: Array<TBarmetricsProps>, piemetrics: Array<TPiemetricsProps>, byear: string, pyear: string }) => {

    const [ data, setData ] = useState({
        labels: barmetrics.map((bardata: any) => bardata.month),
        datasets: [{
            label: "Orders Per Month",
            data: barmetrics.map((bardata: any) => bardata.orders),
            backgroundColor: [ 'hsl(22, 98%, 49%, 0.5)' ],
            borderColor: 'hsl(22, 98%, 49%)',
            borderWidth: 2,
        }]
    })
    const [ baryear, setBaryear ] = useState(byear)
    const [ pieyear, setPieyear ] = useState(pyear)

    const [ servicedata, setServiceData ] = useState({
        labels: piemetrics.map((service: any) => service.type),
        datasets: [{
            label: "Orders Per Service",
            data: piemetrics.map((service: any) => service.orders),
            backgroundColor: [ 'hsl(212, 62%, 40%, 0.9)', 'hsl(332, 97%, 43%, 0.9)', 'hsl(158, 82%, 47%, 0.9)','hsl(195, 73%, 16%, 0.9)', 'hsl(36, 99%, 47%, 0.9)' ],
            // borderColor: 'hsl(22, 98%, 49%)',
            // borderWidth: 2,
        }]
    })

    const handleChangeBarYear = async(value: string) => {
        setBaryear(value);
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_ROOT}/analytics/barchart?yr=${value}`);
            console.log(data)
            setData({
                labels: data.map((bardata: any) => bardata.month),
                datasets: [{
                    label: "Orders Per Month",
                    data: data.map((bardata: any) => bardata.orders),
                    backgroundColor: [ 'hsl(22, 98%, 49%, 0.5)' ],
                    borderColor: 'hsl(22, 98%, 49%)',
                    borderWidth: 2,
                }]
            });
            return;
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangePieYear = async(value: string) => {
        setPieyear(value);
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_ROOT}/analytics/piechart?yr=${value}`);
            console.log(data)
            setServiceData({
                labels: data.map((service: any) => service.type),
                datasets: [{
                    label: "Orders Per Service",
                    data: data.map((service: any) => service.orders),
                    backgroundColor: [ 'hsl(212, 62%, 40%, 0.9)', 'hsl(332, 97%, 43%, 0.9)', 'hsl(158, 82%, 47%, 0.9)','hsl(195, 73%, 16%, 0.9)', 'hsl(36, 99%, 47%, 0.9)' ],
                    // borderColor: 'hsl(22, 98%, 49%)',
                    // borderWidth: 2,
                }]
            });
            return;
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className='my-10 lg:my-16'>
            <div className='grid grid-cols-12 gap-y-10 lg:gap-x-7'>
                <div className='lg:col-span-8 col-span-12 bg-white rounded-xl p-2 md:p-10'>
                    <div>
                        {/* <label htmlFor="" className='text-xs'>Year</label> */}
                        <select name="" id="" className='outline-none border-2 ml-2 mb-5 px-2 text-xs rounded-sm' value={baryear} onChange={(e) => handleChangeBarYear(e.target.value)}>
                            <option value="2024" className=''>2024</option>
                            <option value="2025" className=''>2025</option>
                            <option value="2026" className=''>2026</option>
                            <option value="2027" className=''>2027</option>
                            <option value="2028" className=''>2028</option>
                            <option value="2029" className=''>2029</option>
                            <option value="2030" className=''>2030</option>
                        </select>
                    </div>
                    <div className='h-60 md:h-96 w-full'>
                        <BarChart chartData={data} />
                    </div>
                </div>
                <div className='lg:col-span-4 col-span-12 bg-white rounded-xl p-2 md:p-10'>
                    <div>
                        {/* <label htmlFor="" className='text-xs'>Year</label> */}
                        <select name="" id="" className='outline-none border-2 ml-2 mb-5 px-2 text-xs rounded-sm' value={pieyear} onChange={(e) => handleChangePieYear(e.target.value)}>
                            <option value="2024" className=''>2024</option>
                            <option value="2025" className=''>2025</option>
                            <option value="2026" className=''>2026</option>
                            <option value="2027" className=''>2027</option>
                            <option value="2028" className=''>2028</option>
                            <option value="2029" className=''>2029</option>
                            <option value="2030" className=''>2030</option>
                        </select>
                    </div>
                    <div className='h-60 md:h-96 w-full flex items-center'>
                        <PieChart chartData={servicedata} />
                    </div>
                </div>
            </div>
        </section>
    )
    
}

export default AdminMetrics
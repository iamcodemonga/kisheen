import React from 'react'

type Props = {
    orderstoprint: Array<{
        id: number,
        receipt: string,
        customerid: number,
        mealid: string,
        photo: string,
        title: string,
        meat: string,
        combo: string,
        type: string,
        method: string,
        itemcount: number,
        quantity: number,
        size: string | null,
        amount: number,
        country: string,
        city: string | null,
        district: string,
        address: string,
        tel: string,
        prepaid: boolean,
        stage: number,
        firstname: string,
        lastname: string,
        email: string,
        date_ordered: string | null
    }>;
    // ref: any;
}

const Printable = ({ orderstoprint }: Props) => {
    return (
        <section className='px-10 py-32'>
            <h1 className='text-3xl text-center'>Customer orders</h1>
            <div className='my-7 border border-accent rounded-2xl pt-10 pb-5 px-5'>
                <div className='overflow-x-auto admin-table'>
                    <table className='table-auto w-full'>
                        <thead className=''>
                            <tr className="">
                                <th className='p-3 whitespace-nowrap text-sm'>S/N</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Receipt</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Customer</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Order</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Service</th>
                                <th className='p-3 whitespace-nowrap text-sm'>Address</th>
                                {/* <th className='p-3 whitespace-nowrap text-sm'>Home delivery</th> */}
                                <th className='p-3 whitespace-nowrap text-sm'>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderstoprint.length > 0 ? orderstoprint.map((ordertoprint, index) => <tr className='border-t border-accent' key={ordertoprint.id}>
                                <td className='whitespace-nowrap p-3 text-center'>{index+1}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{ordertoprint.receipt}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{`${ordertoprint.firstname} ${ordertoprint.lastname}`}, {`${ordertoprint.tel}`}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{`${ordertoprint.title} with ${ordertoprint.meat} and ${ordertoprint.combo}`} ({ordertoprint.type == "pot" ? "Potsize - " + ordertoprint.size : "Qty - " + ordertoprint.quantity})</td>
                                <td className='whitespace-nowrap p-3 text-center'>{ordertoprint.type == "casual/special" ? <span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700'>Regular</span> : ordertoprint.type == "pot" ? <span className='bg-purple-200/80 text-xs rounded-md font-bold py-1 px-3 text-purple-700'>Full Pot</span> : ordertoprint.type == "casual" ? <span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700'>Casual</span> : ordertoprint.type == "special" ? <span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700'>Special</span> : ordertoprint.type == "chops" ? <span className='bg-cyan-200/80 text-xs rounded-md font-bold py-1 px-3 text-cyan-700'>Chops</span> : null}</td>
                                <td className='whitespace-nowrap p-3 text-center'>{ordertoprint.address}, {ordertoprint.city}</td>
                                <td className='whitespace-nowrap p-3 text-center'>&#8358;{ordertoprint.amount.toLocaleString()} ({ordertoprint.prepaid ? "paid" : "on delivery"})</td>
                            </tr>) : null}
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    )
}

export default Printable
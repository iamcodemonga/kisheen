import Printable from '@/components/admin/Printable'
import axios from 'axios';
import React from 'react'

type Props = {}

const page = async(props: Props) => {

    const { data } = await axios(`${process.env.API_ROOT}/orders/all?start=${0}&limit=10`);

    const orderstoprint = (data.table.orders.length > 0 ?  data.table.orders.filter((item: any, index:number) => {
        return item.stage == 1;
    }) : null)

    return (
        <Printable orderstoprint={orderstoprint} />
    )
}

export default page
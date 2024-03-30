import Metrics from '@/components/admin/Metrics'
import Navbar from '@/components/bars/AdminNavbar'
import OrdersTable from '@/components/tables/Orders'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { getUser } from '@/lib/datacalls'
import { redirect } from 'next/navigation'
import axios from 'axios'

export const dynamic = "force-dynamic";

const AdminDashboard = async() => {
    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)
    
    if (user.profile.role == "customer") {
        redirect('/dashboard')
    }

    if (user.profile.role == "agent") {
        redirect('/admin/orders')
    }

    const [ barmetrics, piemetrics, ordersList ] = await Promise.all([
        axios(`${process.env.API_ROOT}/analytics/barchart`),
        axios(`${process.env.API_ROOT}/analytics/piechart`),
        axios(`${process.env.API_ROOT}/orders/all?start=0&limit=10`)
    ])

    const { data } = ordersList;

    const orderstoprint = (data.table.orders.length > 0 ?  data.table.orders.filter((item: any, index:number) => {
        return item.stage == 1 && item.printed == false;
    }) : null)

    return (
        <>
            <Navbar />
            <section className='mt-7 lg:mt-3'>
                <h1 className='lg:hidden md:text-4xl font-normal text-xl'>Analytics</h1>
                <div className='grid grid-cols-12 gap-6 mt-7 lg:mt-0'>
                    <div className='col-span-12 md:col-span-4 py-10 px-5 md:px-10 rounded-2xl bg-accent/5 flex justify-between items-center border border-accent'>
                        <div>
                            <p className='mb-1 text-sm text-accent'>Total Revenue</p>
                            <h3 className='text-2xl'>&#8358;{user.metrics.revenue.toLocaleString()}</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-accent/40">
                                <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                                <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                            </svg>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-4 py-10 px-5 md:px-10 rounded-2xl bg-accent/5 flex justify-between items-center border border-accent'>
                        <div>
                            <p className='mb-1 text-sm text-accent'>Total Customers</p>
                            <h3 className='text-2xl'>{user.metrics.customers}</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-accent/40">
                                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                            </svg>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-4 py-10 px-5 md:px-10 rounded-2xl bg-accent/5 flex justify-between items-center border border-accent'>
                        <div>
                            <p className='mb-1 text-sm text-accent'>Total Orders</p>
                            <h3 className='text-2xl'>{user.metrics.orders}</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12  text-accent/40">
                                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <Metrics barmetrics={barmetrics.data} piemetrics={piemetrics.data} byear={barmetrics.data[0].year} pyear={piemetrics.data[0].year} />
            <OrdersTable recent={true} orders={data.table.orders} page={1} tableCount={data.table.total} orderstoprint={orderstoprint} />
        </>
    )
}

export default AdminDashboard
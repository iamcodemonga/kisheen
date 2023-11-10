"use client"

import { TCartItem, TMeal } from '@/types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CartCheckoutForm = () => {

    // const dispatch = useDispatch();
    const items = useSelector((state: { cart: { items: TCartItem[] }}) => state.cart.items)
    const amount = useSelector((state: { cart: { amount: number }}) => state.cart.amount);
    const pending = useSelector((state: { cart: { loading: boolean }}) => state.cart.loading);

    const vat: number = 800;
    const districtList = [ 'Enugu central', 'Enugu north', 'Enugu east', 'Nkanu east', 'Nkanu west', 'Nsukka' ]

    const tier1 = [ 'Enugu central' ];
    const tier2 = [ 'Enugu north', 'Enugu east' ]
    const tier3 = [ 'Nkanu east' ]
    const tier4 = [ 'Nkanu west' ]
    const tier5 = [ 'Nsukka' ]

    // react states
    const [ fee, setFee ] = useState<number>(1000);
    const [ district, setDistrict ] = useState<string>('Enugu central')

    // handle Fuctions
    const handleDistrict = (value: string) => {
        setDistrict(value);
        if(tier1.includes(value)) {
            setFee(1000)
        }
        else if(tier2.includes(value)) {
            setFee(2000)
        }
        else if(tier3.includes(value)) {
            setFee(3500)
        }
        else if(tier4.includes(value)) {
            setFee(3000)
        }
        else if(tier5.includes(value)) {
            setFee(6000)
        }
        else {
            setFee(7000)
        }
        return;
    }

    return (
        <section className='container mt-20'>
            <form action="" method="post" className='lg:grid grid-cols-10 mb-36 gap-x-12 space-y-10 lg:space-y-0'>
                <div className='col-span-6'>
                    <div className='space-y-5'>
                        <h5 className='font-bold text-xl'>Personal details</h5>
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="name" className='text-accent'>Name</label>
                            <input className='bg-transparent outline-none' type="text" name="" id="name" placeholder='Input your fullname' />
                        </div>
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="email" className='text-accent'>Email</label>
                            <input type="email" name="" id="email" className='bg-transparent outline-none' placeholder='Input your email address' />
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <h5 className='font-bold mt-10 text-xl'>Address Informations</h5>
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="state" className='text-accent'>State</label>
                            <select name="state" id="state" className='bg-transparent outline-none'>
                                <option value="enugu">Enugu</option>
                                <option value="anambra" disabled>Anambra</option>
                                <option value="portharcourt" disabled>Port Harcourt</option>
                                <option value="delta" disabled>Delta</option>
                                <option value="akwa ibom" disabled>Akwa Ibom</option>
                                <option value="lagos" disabled>Lagos</option>
                                <option value="abuja" disabled>Abuja</option>
                            </select>
                        </div>
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="subject" className='text-accent'>District</label>
                            <select name="" id="subject" className='bg-transparent outline-none' value={district} onChange={(e) => handleDistrict(e.target.value)}>
                                {districtList.length > 0 ? districtList.map((area) => <option value={area}>{area}</option>) : null}
                            </select>
                        </div>
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="address" className='text-accent'>Address line</label>
                            <input className='bg-transparent outline-none' type="text" name="" id="address" placeholder='Add your address line' />
                        </div>
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="phone" className='text-accent'>Phone number</label>
                            <input className='bg-transparent outline-none' type="text" name="" id="phone" placeholder='Add your phone number' />
                        </div>
                    </div>
                </div>
                <div className='col-span-4'>
                    <h5 className='mb-8 font-bold text-xl'>Ordered Meal</h5>
                    <div className='space-y-5'>
                        {!pending ? items.length > 0 ? items.map((item: TCartItem) => <div className='space-y-2'>
                            <div className='flex items-center mb-0'>
                                <img className='object-cover w-12 h-12 md:w-12 md:h-12 rounded-lg'  src={item.photo} alt="cart-image" />
                                <div className='ml-5'>
                                    <h6 className='my-0 font-bold'>{item.title}</h6>
                                    <div className='space-x-6 hidden md:block'>
                                        <small><strong className='text-accent'>Qty:</strong> {item.cartQty}</small>
                                        <small><strong className='text-accent'>Combo:</strong> {item.combo}</small>
                                        <small><strong className='text-accent'>Meat:</strong> {item.meat}</small>
                                        <small><strong className='text-accent'>Amount:</strong> &#8358;{Number(item.price)*Number(item.cartQty)}</small>
                                    </div>
                                </div>
                            </div>
                            <div className='space-x-6 md:hidden mt-0'>
                                <small><strong className='text-accent'>Qty:</strong> {item.cartQty}</small>
                                <small><strong className='text-accent'>Combo:</strong> {item.combo}</small>
                                <small><strong className='text-accent'>Meat:</strong> {item.meat}</small>
                                <small><strong className='text-accent'>Amount:</strong> &#8358;{Number(item.price)*Number(item.cartQty)}</small>
                            </div>
                        </div>) : null : null }
                    </div>
                    <div className='mt-10'>
                        <h5 className='font-bold mb-5 text-xl'>Summary</h5>
                        <div className='space-y-0'>
                            <div className='flex items-center justify-between'>
                                <p className=''>Subtotal <strong className='text-green-600'>(37% off)</strong></p>
                                {<p>&#8358;{(amount*0.63)}</p>}
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className=''>Delivery fee</p>
                                <p>&#8358;{fee}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className=''>V.A.T</p>
                                <p>&#8358;{vat}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='font-bold'>Total</p>
                                <p>&#8358;{(amount*0.63)+fee+vat}</p>
                            </div>
                            <div className='space-y-4'>
                                <button type="button" className='w-full py-3 bg-blue-950 font-bold text-white'>Pay with card</button>
                                <button type="button" className='w-full py-3 bg-accent font-bold'>Pay on delivery</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default CartCheckoutForm
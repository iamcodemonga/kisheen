"use client"

import { CreateOrder, VerifyOrder } from '@/actions';
import { TMeal, TOrder } from '@/types'
import axios from 'axios';
import { useState } from 'react'
import { toast } from "react-toastify";
import { usePaystackPayment } from 'react-paystack';
import { PaystackProps } from 'react-paystack/dist/types';

type Props = {
    item: TMeal;
    meat: string | string[] | undefined;
    combo?: string | string[] | undefined;
    qty?: string | string[] | undefined;
    size?: string | string[] | undefined;
    potPrices?: number | undefined;
}

// const pay = PaystackPop()

const CheckoutForm = ({ item, meat, combo, qty, size, potPrices }: Props) => {

    const vat: number = 800;
    const districtList = [ 'Enugu central', 'Enugu north', 'Enugu east', 'Nkanu east', 'Nkanu west', 'Nsukka' ]

    const tier1 = [ 'Enugu central' ];
    const tier2 = [ 'Enugu north', 'Enugu east' ]
    const tier3 = [ 'Nkanu east' ]
    const tier4 = [ 'Nkanu west' ]
    const tier5 = [ 'Nsukka' ]

    // react states
    const [ fee, setFee ] = useState<number>(1000);
    const [ loading, setLoading ] = useState<boolean>(false);

    // controlled inputs
    const [ customerName, setCustomerName ] = useState<string>('')
    const [ email, setEmail ] = useState<string>('')
    const [ country, setCountry ] = useState<string>('nigeria')
    const [ state, setState ] = useState<string>('enugu')
    const [ district, setDistrict ] = useState<string>('Enugu central')
    const [ address, setAddress ] = useState<string>('')
    const [ tel, setTel ] = useState<string>('')

    type PaystackMetadata = {
        customerName: string;
        country: string
        state: string;
        district: string;
        address: string;
        tel: string;
    }

    const config = {
        name: customerName,
        email,
        country,
        state,
        district,
        address,
        tel,
        amount: item.type != "pot" ? ((item.price*Number(qty)*0.63)+fee+vat)*100 : (Number(potPrices)+fee+vat)*100,
        publicKey: `${process.env.NEXT_PUBLIC_PAYSTACK_PK}`,
    }

    const initializePayment = usePaystackPayment(config);

    const onSuccess = (reference?: any) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
      };

    const onClose = () => {
        console.log("payment was cancelled")
    }

    //   const paymentProps =  {
    //     // reference: (new Date()).getTime().toString(),
    //     email,
    //     amount: item.type != "pot" ? ((item.price*Number(qty)*0.63)+fee+vat)*100 : (Number(potPrices)+fee+vat)*100,
    //     name: customerName,
    //     country,
    //     state,
    //     district,
    //     address,
    //     tel,
    //     publicKey: 'pk_test_8abfe4c759803140c25a6cc4186db85fab290775',
    //     text: 'Pay with card',
    //     onSuccess: (reference: any) => console.log(reference.reference),
    //     onClose: () => console.log('payment was cancelled'),
    //   }

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

    const handlePayment= async( properties: TOrder[] ) => {

        let nameRegex = /^([a-zA-Z ]+)$/;
        let emailRegex = /^([a-zA-Z0-9\.\-_]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/;
        let telRegex = /^([0-9]{5,18})$/;

        // check for empty input forms
        if(customerName.trim() == "" || email.trim() == "" || state.trim() == "" || district.trim() == "" || address.trim() == "" || tel.trim() == "") {
            toast.error(`Please fill in all fields!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        // check for invalid customer name format
        if(!nameRegex.test(customerName)) {
            toast.error(`Name must only contain alphabets!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        // check for invalid email format
        if(!emailRegex.test(email)) {
            toast.error(`Email format is invalid!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        if(!telRegex.test(tel)) {
            toast.error(`Phone number must only contain numbers!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        initializePayment(onSuccess, onClose)
        return;
    }

    const handlefreeCheckout = async(properties: TOrder[]) => {

        let nameRegex = /^([a-zA-Z ]+)$/;
        let emailRegex = /^([a-zA-Z0-9\.\-_]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/;
        let telRegex = /^([0-9]{5,18})$/;

        // check for empty input forms
        if(customerName.trim() == "" || email.trim() == "" || state.trim() == "" || district.trim() == "" || address.trim() == "" || tel.trim() == "") {
            toast.error(`Please fill in all fields!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        // check for invalid customer name format
        if(!nameRegex.test(customerName)) {
            toast.error(`Name must only contain alphabets!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        // check for invalid email format
        if(!emailRegex.test(email)) {
            toast.error(`Email format is invalid!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        if(!telRegex.test(tel)) {
            toast.error(`Phone number must only contain numbers!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        setLoading(true)
        try {
            const { data } = await axios.post('/api/user/orders?method=cash', properties);
            if(data.status = "ok") {
                toast.success(`${data.message}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setLoading(false)
                return;
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
        return;
    }

    return (
        <section className='container mt-20'>
            <form  className='lg:grid grid-cols-10 mb-36 gap-x-12 space-y-10 lg:space-y-0' onSubmit={(e) => e.preventDefault()}>
                <div className='col-span-6'>
                    <div className='space-y-5'>
                        <h5 className='font-bold text-xl'>Personal details</h5>
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="name" className='text-accent'>Name</label>
                            <input className='bg-transparent outline-none' type="text" name="" id="name" placeholder='Input your fullname' value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                        </div>
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="email" className='text-accent'>Email</label>
                            <input type="email" name="" id="email" className='bg-transparent outline-none' placeholder='Input your email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <h5 className='font-bold mt-10 text-xl'>Address Informations</h5>
                        <div className='hidden flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="country" className='text-accent'>Country</label>
                            <select name="country" id="country" className='bg-transparent outline-none' value={country} onChange={(e) => setCountry(e.target.value)}>
                                <option value="nigeria">Nigeria</option>
                                <option value="ghana" disabled>Ghana</option>
                                <option value="UAE" disabled>United Arab Emirates</option>
                                <option value="canada" disabled>Canada</option>
                                <option value="USA" disabled>United states of America</option>
                                <option value="UK" disabled>United kingdom</option>
                                <option value="SA" disabled>South Africa</option>
                            </select>
                        </div>
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="state" className='text-accent'>State</label>
                            <select name="state" id="state" className='bg-transparent outline-none' value={state} onChange={(e) => setState(e.target.value)}>
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
                                {districtList.length > 0 ? districtList.map((area, index) => <option value={area} key={index}>{area}</option>) : null}
                            </select>
                        </div>
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="address" className='text-accent'>Address line</label>
                            <input className='bg-transparent outline-none' type="text" name="" id="address" placeholder='Add your address line' value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="phone" className='text-accent'>Phone number</label>
                            <input className='bg-transparent outline-none' type="tel" name="" id="phone" placeholder='Add your phone number' value={tel} onChange={(e) => setTel(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='col-span-4'>
                    <h5 className='mb-8 font-bold text-xl'>Ordered Meal</h5>
                    <div className='space-y-5'>
                        {item.type == "pot" ? <div className='space-y-2'>
                            <div className='flex items-center'>
                                <img className='object-cover w-10 h-10 md:w-12 md:h-12 rounded-lg'  src={item.photo.url} alt="cart-image" />
                                <div className='ml-5'>
                                    <h6 className='my-0 font-bold'>{item.title}</h6>
                                    <div className='space-x-6 hidden md:block'>
                                        <small><strong className='text-accent'>Size:</strong> {size}</small>
                                        <small><strong className='text-accent'>Meat:</strong> {meat}</small>
                                        {size == "small(sm)" && <small><strong className='text-accent'>Amount:</strong> &#8358;{item.priceSm}</small>}
                                        {size == "medium(md)" && <small><strong className='text-accent'>Amount:</strong> &#8358;{item.price}</small>}
                                        {size == "large(lg)" && <small><strong className='text-accent'>Amount:</strong> &#8358;{item.priceLg}</small>}
                                        {size == "extra-large(xl)" && <small><strong className='text-accent'>Amount:</strong> &#8358;{item.priceXl}</small>}
                                    </div>
                                </div>
                            </div>
                            <div className='space-x-6 md:hidden'>
                                <small><strong className='text-accent'>Size:</strong> {size}</small>
                                <small><strong className='text-accent'>Meat:</strong> {meat}</small>
                                {size == "small(sm)" && <small><strong className='text-accent'>Amount:</strong> &#8358;{item.priceSm}</small>}
                                {size == "medium(md)" && <small><strong className='text-accent'>Amount:</strong> &#8358;{item.price}</small>}
                                {size == "large(lg)" && <small><strong className='text-accent'>Amount:</strong> &#8358;{item.priceLg}</small>}
                                {size == "extra-large(xl)" && <small><strong className='text-accent'>Amount:</strong> &#8358;{item.priceXl}</small>}
                            </div>
                        </div> : 
                        <div className='space-y-2'>
                            <div className='flex items-center mb-0'>
                                <img className='object-cover w-12 h-12 md:w-12 md:h-12 rounded-lg'  src={item.photo.url} alt="cart-image" />
                                <div className='ml-5'>
                                    <h6 className='my-0 font-bold'>{item.title}</h6>
                                    <div className='space-x-6 hidden md:block'>
                                        <small><strong className='text-accent'>Qty:</strong> {qty}</small>
                                        <small><strong className='text-accent'>Combo:</strong> {combo}</small>
                                        <small><strong className='text-accent'>Meat:</strong> {meat}</small>
                                        <small><strong className='text-accent'>Price:</strong> &#8358;{item.price}</small>
                                    </div>
                                </div>
                            </div>
                            <div className='space-x-6 md:hidden mt-0'>
                                <small><strong className='text-accent'>Qty:</strong> {qty}</small>
                                <small><strong className='text-accent'>Combo:</strong> {combo}</small>
                                <small><strong className='text-accent'>Meat:</strong> {meat}</small>
                                <small><strong className='text-accent'>Price:</strong> &#8358;{item.price}</small>
                            </div>
                        </div>}
                    </div>
                    <div className='mt-10'>
                        <h5 className='font-bold mb-5 text-xl'>Summary</h5>
                        <div className='space-y-0'>
                            <div className='flex items-center justify-between'>
                                <p className=''>Subtotal</p>
                                {item.type != "pot" ? <p>&#8358;{(item.price*Number(qty)*0.63)}</p> : <p>&#8358;{potPrices}</p>}
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
                                <p>&#8358;{item.type != "pot" ? (item.price*Number(qty)*0.63)+fee+vat : Number(potPrices)+fee+vat}</p>
                            </div>
                            <div className='space-y-4'>
                                <button type="button" className='w-full py-3 bg-blue-950 font-bold text-white' onClick={() => handlePayment([{ mealId: item.id, customerId: null, name: item.name, combo: combo as string, meat: meat as string, type: item.type as string, customerName, email, tel, country, state, district, address, quantity: Number(qty), amount: item.type != "pot" ? (item.price*Number(qty)*0.63)+fee+vat : Number(potPrices)+fee+vat}])}>Pay with card</button>
                                {/* <button type="button" className='w-full py-3 bg-accent font-bold' onClick={() => handleCheckout({ mealId: item.id, customerId: null, name: item.name, combo: combo as string, meat: meat as string, type: item.type as string, customerName: "Emmanuel ufot", email: "eufot30@gmail.com", tel: "", country: "Nigeria", state: "enugu", district: "enugu north", address: "presidential rd", quantity: Number(qty), amount: item.type != "pot" ? (item.price*Number(qty)*0.63)+fee+vat : Number(potPrices)+fee+vat})}>Pay on delivery</button> */}
                                {/* <PaystackButton className='w-full py-3 bg-blue-950 font-bold text-white' {...paymentProps} /> */}
                                <button type="button" className='w-full py-3 bg-accent font-bold' onClick={(e) => {
                                        e.preventDefault(); 
                                        handlefreeCheckout([{ mealId: item.id, customerId: null, name: item.name, combo: combo as string, meat: meat as string, type: item.type as string, customerName, email, tel, country, state, district, address, quantity: Number(qty), amount: item.type != "pot" ? (item.price*Number(qty)*0.63)+fee+vat : Number(potPrices)+fee+vat}])
                                    }
                                }>Pay on delivery</button>
                                {loading ? <p className='py-3 font-bold'>Loading...</p> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default CheckoutForm
"use client"

import { TCartItem, TOrder, TPaystackTransactionProps } from '@/types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from '../EmptyCart'
import { useRouter } from 'next/navigation'
import { usePaystackPayment } from 'react-paystack'
import axios from 'axios'
import { toast } from 'react-toastify'
import OrderLoader from '../loaders/OrderLoader'
import { playAudio } from '@/lib/graphcms'
import MockOrderList from '../loaders/MockOrderList'
import { clearCart } from '@/features/cartSlice'

type TUserProps = {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    role: string;
    password?: string;
}

const CartCheckoutForm = ({ user, discount, rate, mobile, manualpay, cardpay, eligible }: { user: TUserProps, discount: number, mobile: boolean, rate: number, manualpay: boolean, cardpay: boolean, eligible: boolean }) => {

    const dispatch = useDispatch();
    const items = useSelector((state: { cart: { items: TCartItem[] }}) => state.cart.items)
    const amount = useSelector((state: { cart: { amount: number }}) => state.cart.amount);
    const pending = useSelector((state: { cart: { loading: boolean }}) => state.cart.loading);

    const router = useRouter();
    const api = process.env.NEXT_PUBLIC_API_ROOT;
    const vat: number = 800;
    const districtList = [ 'Enugu central', 'Enugu north', 'Enugu east', 'Nkanu east', 'Nkanu west', 'Nsukka' ]

    const tier1 = [ 'Enugu central' ];
    const tier2 = [ 'Enugu north', 'Enugu east' ]
    const tier3 = [ 'Nkanu east' ]
    const tier4 = [ 'Nkanu west' ]
    const tier5 = [ 'Nsukka' ]

    // react states
    const [ fee, setFee ] = useState<number>(1000);
    const [ loading, setLoading ] = useState<boolean>(false)

    // controlled inputs
    const [ firstname, setFirstName ] = useState<string>(user ? user.firstname : '')
    const [ lastname, setLastName ] = useState<string>(user ? user.lastname : '')
    const [ email, setEmail ] = useState<string>(user ? user.email : '')
    const [ orderType, setOrderType ] = useState<string>('home')
    const [ country, setCountry ] = useState<string>('nigeria')
    const [ state, setState ] = useState<string>('enugu')
    const [ district, setDistrict ] = useState<string>('Enugu central')
    const [ address, setAddress ] = useState<string>('')
    const [ tel, setTel ] = useState<string>('')

    // handle Fuctions
    const config = {
        name: `${firstname} ${lastname}`,
        email,
        country,
        state,
        district,
        address,
        tel,
        amount: ((amount*discount)+fee+vat)*100,
        publicKey: `${process.env.NEXT_PUBLIC_PAYSTACK_PK}`,
    }

    const initializePayment = usePaystackPayment(config);

    const generateReceipt = () => {
        const timeStamp = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 1000000000)
        const uniqueId = timeStamp.toString() + randomNum.toString();
        return uniqueId.slice(0, 10)
    }

    const receipt = generateReceipt();

    const handleOrder = async(method: string, materials: Array<TOrder>, receipt?: string) => {
        setLoading(true)
        try {
            const { data } = await axios.post(`${api}/orders?method=${method}&eligible=${eligible}`, materials);
            if (data.error) {
                toast.error(`Could not place order!`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setLoading(false);
                return;
            }
            const response = await axios.post(`/api/send?type=order&method=${method}`, { name: firstname, email: email, receipt, delivery: orderType, address, amount:(amount*discount)+fee+vat });
            if(response.data.status == "ok") {
                toast.success(`Order was successful!`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                playAudio('/livechat.mp3')
                dispatch(clearCart())
                setLoading(false);
                router.push(`/thanks?refno=${receipt}`);
                return;
            } else {
                toast.error(`${response.data.message}`, {
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
                playAudio('/error.mp3')
                return;
            }
            // if(data.status == "ok") {
            //     const { data: response } = await axios.post(`/api/send?type=order&method=${method}`, { name: firstname, email: email, receipt, delivery: orderType });
            //     if (response.status == "ok") {
            //         toast.success(`${response?.message}`, {
            //             position: "bottom-right",
            //             autoClose: 5000,
            //             hideProgressBar: false,
            //             closeOnClick: true,
            //             pauseOnHover: true,
            //             draggable: true,
            //             progress: undefined,
            //             theme: "colored",
            //         });
            //         playAudio('/livechat.mp3')
            //         setLoading(false);
            //         router.push(`/thanks?refno=${receipt}`);
            //         return;
            //     }
            //     setLoading(false);
            //     return;
            // }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
        return;
    }

    const onSuccess = (transaction?: TPaystackTransactionProps) => {
        if (transaction?.message == "Approved" && transaction?.status == "success") {
            const properties = items.map((item: TCartItem) => { return { 
                mobile,
                receipt: receipt, 
                mealId: item.id as string, 
                photo: item.photo, 
                customerId: (user ? user.id : null), 
                name: item.name as string, 
                combo: item.combo as string, 
                meat: item.meat as string, 
                type: item.type as string, 
                firstname: firstname.toLowerCase(), 
                lastname: lastname.toLowerCase(), 
                email: email.toLowerCase(), 
                method: orderType, 
                tel, country, city: state, district, address, 
                itemsCount: items.length, 
                quantity: Number(item.cartQty), 
                size: null,
                prepaid: true, 
                price: (Number(item.price)*discount)+fee+vat,
                amount: (amount*discount)+fee+vat
            }});
            handleOrder('card', properties, receipt)
            return;
        }
        console.log("payment went wrong")
        return;
    };

    const onClose = () => {
        toast.error(`Payment process has closed!`, {
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
    };

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

    const handleCardCheckout= async() => {
        let nameRegex = /^([a-zA-Z ]+)$/;
        let emailRegex = /^([a-zA-Z0-9\.\-_]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/;
        let telRegex = /^([0-9]{5,18})$/;

        // check for empty input forms
        if(firstname.trim() == "" || lastname.trim() == "" || email.trim() == "" || state.trim() == "" || district.trim() == "" || tel.trim() == "") {
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
            playAudio('/error.mp3')
            return;
        }

        if(orderType == "home" && address.trim() == "") {
            toast.error(`Fill in your address information!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            playAudio('/error.mp3')
            return;
        }

        // check for invalid customer name format
        if(!nameRegex.test(firstname) || !nameRegex.test(lastname)) {
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
            playAudio('/error.mp3')
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
            playAudio('/error.mp3')
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
            playAudio('/error.mp3')
            return;
        }

        initializePayment(onSuccess, onClose)
        return;
    }

    const handleFreeCheckout = async(refno: string) => {

        let nameRegex = /^([a-zA-Z ]+)$/;
        let emailRegex = /^([a-zA-Z0-9\.\-_]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/;
        let telRegex = /^([0-9]{5,18})$/;

        // check for empty input forms
        if(firstname.trim() == "" || lastname.trim() == "" || email.trim() == "" || state.trim() == "" || district.trim() == "" || tel.trim() == "") {
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
            playAudio('/error.mp3')
            return;
        }

        if(orderType == "home" && address.trim() == "") {
            toast.error(`Fill in your address information!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            playAudio('/error.mp3')
            return;
        }

        // check for invalid customer name format
        if(!nameRegex.test(firstname) || !nameRegex.test(lastname)) {
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
            playAudio('/error.mp3')
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
            playAudio('/error.mp3')
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
            playAudio('/error.mp3')
            return;
        }

        // console.log(properties);
        const properties = items.map((item: TCartItem) => { return { 
            mobile,
            receipt: receipt, 
            mealId: item.id as string, 
            photo: item.photo, 
            customerId: (user ? user.id : null), 
            name: item.name as string, 
            combo: item.combo as string, 
            meat: item.meat as string, 
            type: item.type as string, 
            firstname: firstname.toLowerCase(), 
            lastname: lastname.toLowerCase(), 
            email: email.toLowerCase(), 
            method: orderType, 
            tel, country, city: state, district, address, 
            itemsCount: items.length, 
            quantity: Number(item.cartQty), 
            size: null,
            prepaid: false, 
            price: (Number(item.price)*discount)+fee+vat,
            amount: (amount*discount)+fee+vat
        }});
        handleOrder('cash', properties, refno);
        return;
    }

    const handleMethod = async(value: string) => {
        if (value == "home") {
            setOrderType(value);
            setFee(1000);
            return;
        }
        setOrderType(value);
        setFee(0);
        return;
    }

    return (
        <section className='px-4 lg:px-20 mt-20'>
            {loading ? <OrderLoader pending={loading} /> : null}
            <form action="" method="post" className='lg:grid grid-cols-10 mb-36 gap-x-12 space-y-10 lg:space-y-0' onSubmit={(e) => e.preventDefault()}>
                <div className='col-span-6'>
                    {!user ? <div className='space-y-5'>
                        <h5 className='font-medium text-xl'>Personal details</h5>
                        <div className='flex flex-col bg-slate-200 p-3 rounded-xl'>
                            <label htmlFor="firstname" className='text-accent text-sm'>First name</label>
                            <input className='bg-transparent outline-none placeholder:font-light' type="text" name="firstname" id="firstname" placeholder='Input your first name' value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className='flex flex-col bg-slate-200 p-3 rounded-xl'>
                            <label htmlFor="lastname" className='text-accent text-sm'>Surname</label>
                            <input className='bg-transparent outline-none placeholder:font-light' type="text" name="lastname" id="lastname" placeholder='Input your surname' value={lastname} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className='flex flex-col bg-slate-200 p-3 rounded-xl'>
                            <label htmlFor="email" className='text-accent text-sm'>Email</label>
                            <input type="email" name="" id="email" className='bg-transparent outline-none placeholder:font-light' placeholder='Input your email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div> : null}
                    <div className='space-y-5'>
                        <h5 className='font-medium mt-10 text-xl'>Address Informations</h5>
                        <div className='hidden flex-col bg-slate-200 p-3 rounded-xl'>
                            <label htmlFor="country" className='text-accent text-sm'>Country</label>
                            <select name="country" id="country" className='bg-transparent outline-none placeholder:font-light' value={country} onChange={(e) => setCountry(e.target.value)}>
                                <option value="nigeria">Nigeria</option>
                                <option value="ghana" disabled>Ghana</option>
                                <option value="UAE" disabled>United Arab Emirates</option>
                                <option value="canada" disabled>Canada</option>
                                <option value="USA" disabled>United states of America</option>
                                <option value="UK" disabled>United kingdom</option>
                                <option value="SA" disabled>South Africa</option>
                            </select>
                        </div>
                        <div className='hidden flex-col bg-slate-200 p-3 rounded-xl'>
                            <label htmlFor="ordertype" className='text-accent text-sm mb-1 ml-1'>Order type</label>
                            <select name="ordertype" id="ordertype" className='bg-transparent outline-none placeholder:font-light' value={orderType} onChange={(e) => handleMethod(e.target.value)}>
                                <option value="home" style={{ padding: '200px'}}>Home delivery</option>
                                <option value="pickup">Shop pickup</option>
                            </select>
                        </div>
                        <div className='hidden flex-col bg-slate-200 p-3 rounded-xl'>
                            <label htmlFor="state" className='text-accent text-sm mb-1 ml-1'>State</label>
                            <select name="state" id="state" className='bg-transparent outline-none placeholder:font-light' value={state} onChange={(e) => setState(e.target.value)}>
                                <option value="enugu">Enugu</option>
                                <option value="anambra" disabled>Anambra</option>
                                <option value="portharcourt" disabled>Port Harcourt</option>
                                <option value="delta" disabled>Delta</option>
                                <option value="akwa ibom" disabled>Akwa Ibom</option>
                                <option value="lagos" disabled>Lagos</option>
                                <option value="abuja" disabled>Abuja</option>
                            </select>
                        </div>
                        {orderType == "home" ? <div className='flex flex-col bg-slate-200 p-3 rounded-xl'>
                            <label htmlFor="subject" className='text-accent text-sm mb-1 ml-1'>Area / District</label>
                            <select name="" id="subject" className='bg-transparent outline-none' value={district} onChange={(e) => handleDistrict(e.target.value)}>
                                {districtList.length > 0 ? districtList.map((area, index) => <option value={area} key={index}>{area}</option>) : null}
                            </select>
                        </div>: null}
                        {orderType == "home" ? <div className='flex flex-col bg-slate-200 p-3 rounded-xl'>
                            <label htmlFor="address" className='text-accent text-sm'>Address line</label>
                            <input className='bg-transparent outline-none placeholder:font-light' type="text" name="" id="address" placeholder='Add your address line' value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div> : null}
                        <div className='flex flex-col bg-slate-200 p-3 rounded-xl'>
                            <label htmlFor="phone" className='text-accent text-sm'>Phone number</label>
                            <input className='bg-transparent outline-none placeholder:font-light' type="tel" name="" id="phone" placeholder='Add your phone number' value={tel} onChange={(e) => setTel(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='col-span-4'>
                    <h5 className={user ? 'mb-8 font-medium text-xl lg:mt-10' : 'mb-8 font-medium text-xl'}>Ordered Meal</h5>
                    <div className='space-y-5'>
                        {!pending ? items.length > 0 ? items.map((item: TCartItem, index: number) => <div className='space-y-2' key={index}>
                            <div className='flex items-center mb-0'>
                                <img className='object-cover w-12 h-12 md:w-12 md:h-12 rounded-lg'  src={item.photo} alt="cart-image" />
                                <div className='ml-5'>
                                    <h6 className='my-0 font-normal'>{item.title}</h6>
                                    <div className='space-x-6 hidden md:block'>
                                        <small><strong className='text-accent'>Qty:</strong> {item.cartQty}</small>
                                        <small><strong className='text-accent'>Combo:</strong> {item.combo}</small>
                                        <small><strong className='text-accent'>Meat:</strong> {item.meat}</small>
                                        <small><strong className='text-accent'>Amount:</strong> &#8358;{(Number(item.price)*Number(item.cartQty)).toLocaleString()}</small>
                                    </div>
                                </div>
                            </div>
                            <div className='space-x-6 md:hidden mt-0'>
                                <small><strong className='text-accent'>Qty:</strong> {item.cartQty}</small>
                                <small><strong className='text-accent'>Combo:</strong> {item.combo}</small>
                                <small><strong className='text-accent'>Meat:</strong> {item.meat}</small>
                                <small><strong className='text-accent'>Amount:</strong> &#8358;{(Number(item.price)*Number(item.cartQty)).toLocaleString()}</small>
                            </div>
                        </div>) : <EmptyCart /> : <MockOrderList /> }
                    </div>
                    {!pending ? items.length >= 1 ? <div className='mt-10'>
                        <h5 className='font-medium mb-5 text-xl'>Summary</h5>
                        <div className='space-y-0'>
                            <div className='flex items-center justify-between'>
                                <p className='text-gray-700 text-sm'>Sub-total {rate > 0 ? <strong className='text-green-600'>({rate}% off)</strong> : null}</p>
                                <p className='space-x-3'>
                                    {rate > 0 ? <span className='line-through text-red-600'>&#8358;{amount.toLocaleString()}</span> : null}
                                    <span className='text-green-600'>&#8358;{(amount*discount).toLocaleString()}</span></p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-gray-700 text-sm'>Delivery fee</p>
                                <p>&#8358;{fee.toLocaleString()}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-gray-700 text-sm'>V.A.T</p>
                                <p>&#8358;{vat.toLocaleString()}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='font-medium'>Total</p>
                                <p>&#8358;{((amount*discount)+fee+vat).toLocaleString()}</p>
                            </div>
                            <div className='space-y-4'>
                                <button type="button" className={`w-full py-3 font-medium text-primary rounded-lg ${cardpay ? manualpay ? "bg-blue-950 hover:bg-blue-900":  "bg-gray-900 hover:bg-gray-800" : "hidden"}`} onClick={handleCardCheckout}>{cardpay ? manualpay ? "Pay with card" : "Place order" : "Pay with card"}</button>
                                {orderType == "home" ? <button type="button" className={`w-full py-3 bg-accent hover:bg-accent/90 text-primary font-medium rounded-lg ${!manualpay ? "hidden" : null}`} onClick={() => handleFreeCheckout(receipt)}>Pay on delivery</button> : null}
                                {orderType == "home" ? manualpay ? <p className='text-red-500 text-sm'><strong>ATTENTION:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis distinctio corporis unde, et eligendi sed!!!</p> : null : null}
                            </div>
                        </div>
                    </div> : null : null }
                </div>
            </form>
        </section>
    )
}

export default CartCheckoutForm
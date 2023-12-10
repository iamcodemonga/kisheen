"use client"

// import { CreateOrder, VerifyOrder } from '@/actions';
import { TMeal, TOrder, TPaystackTransactionProps } from '@/types'
import axios from 'axios';
import { useState } from 'react'
import { toast } from "react-toastify";
import { usePaystackPayment } from 'react-paystack';
import OrderLoader from '../loaders/OrderLoader';
import { useRouter } from 'next/navigation';
import { playAudio } from '@/lib/graphcms';

type TUserProps = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    password: string;
}

type TProps = {
    item: TMeal;
    meat: string | string[] | undefined;
    combo?: string | string[] | undefined;
    qty?: string | string[] | undefined;
    size?: string | string[] | undefined;
    potPrices?: number | undefined;
    user: TUserProps | null;
}

const CheckoutForm = ({ item, meat, combo, qty, size, potPrices, user }: TProps) => {

    const router = useRouter();
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
    const [ firstName, setFirstName ] = useState<string>(user ? user.firstName : '')
    const [ lastName, setLastName ] = useState<string>(user ? user.lastName : '')
    const [ email, setEmail ] = useState<string>(user ? user.email : '')
    const [ orderType, setOrderType ] = useState<string>('home')
    const [ country, setCountry ] = useState<string>('nigeria')
    const [ state, setState ] = useState<string>('enugu')
    const [ district, setDistrict ] = useState<string>('Enugu central')
    const [ address, setAddress ] = useState<string>('')
    const [ tel, setTel ] = useState<string>('')

    const config = {
        name: `${firstName} ${lastName}`,
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

    const generateReceipt = () => {
        const timeStamp = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 1000000000)
        const uniqueId = timeStamp.toString() + randomNum.toString();
        return uniqueId.slice(0, 10)
    }

    const receipt = generateReceipt();

    const handleOrder = async(method: string, materials: TOrder[], receipt?: string) => {
        setLoading(true)
        try {
            const { data } = await axios.post(`/api/user/orders?method=${method}`, materials);
            if(data.status == "ok") {
                const { data: response } = await axios.post(`/api/send?type=order&method=${method}`, { name: firstName, email: email, receipt, delivery: orderType });
                if (response.status == "ok") {
                    toast.success(`${response?.message}`, {
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
                    setLoading(false);
                    router.push('/thanks');
                    return;
                }
                setLoading(false);
                return;
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    const onSuccess = (transaction?: TPaystackTransactionProps) => {
        if (transaction?.message == "Approved" && transaction?.status == "success") {
            handleOrder('card', [{ receipt: receipt, mealId: item.id, photo: item.photo.url, customerId: (user ? user.id : null), name: item.name, combo: combo as string, meat: meat as string, type: item.type as string, firstName: firstName.toLowerCase(), surname: lastName.toLowerCase(), email: email.toLowerCase(), method: orderType,tel, country, state, district, address, itemsCount: 1, quantity: Number(qty), prepaid: true, amount: item.type != "pot" ? (item.price*Number(qty)*0.63)+fee+vat : Number(potPrices)+fee+vat}], receipt)
            return;
        }
        console.log("payment went wrong")
        return;
    };

    const onClose = () => {
        console.log("payment was cancelled");
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

    const handleCardCheckout= async(properties: TOrder[]) => {

        let nameRegex = /^([a-zA-Z ]+)$/;
        let emailRegex = /^([a-zA-Z0-9\.\-_]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/;
        let telRegex = /^([0-9]{5,18})$/;

        // check for empty input forms
        if(firstName.trim() == "" || lastName.trim() == "" || email.trim() == "" || state.trim() == "" || district.trim() == "" || tel.trim() == "") {
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
        if(!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
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

    const handleFreeCheckout = async(properties: TOrder[], refno: string) => {

        let nameRegex = /^([a-zA-Z ]+)$/;
        let emailRegex = /^([a-zA-Z0-9\.\-_]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/;
        let telRegex = /^([0-9]{5,18})$/;

        // check for empty input forms
        if(firstName.trim() == "" || lastName.trim() == "" ||  email.trim() == "" || state.trim() == "" || district.trim() == "" || tel.trim() == "") {
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
        if(!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
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
        <section className='container mt-20'>
            {loading ? <OrderLoader pending={loading} /> : null}
            <form  className='lg:grid grid-cols-10 mb-36 gap-x-12 space-y-10 lg:space-y-0' onSubmit={(e) => e.preventDefault()}>
                <div className='col-span-6'>
                    {!user ? <div className='space-y-5'>
                        <h5 className='font-bold text-xl'>Personal details</h5>
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="firstname" className='text-accent'>First name</label>
                            <input className='bg-transparent outline-none' type="text" name="firstname" id="firstname" placeholder='Input your first name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="lastname" className='text-accent'>Surname</label>
                            <input className='bg-transparent outline-none' type="text" name="lastname" id="lastname" placeholder='Input your surname' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="email" className='text-accent'>Email</label>
                            <input type="email" name="" id="email" className='bg-transparent outline-none' placeholder='Input your email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div> : null}
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
                            <label htmlFor="ordertype" className='text-accent'>Order type</label>
                            <select name="ordertype" id="ordertype" className='bg-transparent outline-none' value={orderType} onChange={(e) => handleMethod(e.target.value)}>
                                <option value="home" style={{ padding: '200px'}}>Home delivery</option>
                                <option value="pickup">Shop pickup</option>
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
                        {orderType == "home" ? <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="subject" className='text-accent'>District</label>
                            <select name="" id="subject" className='bg-transparent outline-none' value={district} onChange={(e) => handleDistrict(e.target.value)}>
                                {districtList.length > 0 ? districtList.map((area, index) => <option value={area} key={index}>{area}</option>) : null}
                            </select>
                        </div>: null}
                        {orderType == "home" ? <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="address" className='text-accent'>Address line</label>
                            <input className='bg-transparent outline-none' type="text" name="" id="address" placeholder='Add your address line' value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div> : null}
                        <div className='flex flex-col bg-gray-200 p-3 rounded-xl'>
                            <label htmlFor="phone" className='text-accent'>Phone number</label>
                            <input className='bg-transparent outline-none' type="tel" name="" id="phone" placeholder='Add your phone number' value={tel} onChange={(e) => setTel(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='col-span-4'>
                    <h5 className={user ? 'mb-8 font-bold text-xl lg:mt-10' : 'mb-8 font-bold text-xl'}>Ordered Meal</h5>
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
                                <p className=''>Sub-total <strong className='text-green-600'>(37% off)</strong></p>
                                {item.type != "pot" ? <p className='space-x-3'><span className='line-through text-red-600'>&#8358;{item.price*Number(qty)}</span><span className='text-green-600'>&#8358;{(item.price*Number(qty)*0.63)}</span></p> : <p>&#8358;{potPrices}</p>}
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
                                <button type="button" className='w-full py-3 bg-blue-950 font-bold text-white' onClick={() => handleCardCheckout([{ receipt: receipt, mealId: item.id, photo: item.photo.url, customerId: (user ? user.id : null), name: item.name, combo: combo as string, meat: meat as string, type: item.type as string, firstName: firstName.toLowerCase(), surname: lastName.toLowerCase(), email: email.toLowerCase(), method: orderType, tel, country, state, district, address, itemsCount: 1, quantity: Number(qty), prepaid: true, amount: item.type != "pot" ? (item.price*Number(qty)*0.63)+fee+vat : Number(potPrices)+fee+vat}])}>Pay with card</button>
                                {/* <button type="button" className='w-full py-3 bg-accent font-bold' onClick={() => handleCheckout({ mealId: item.id, customerId: null, name: item.name, combo: combo as string, meat: meat as string, type: item.type as string, customerName: "Emmanuel ufot", email: "eufot30@gmail.com", tel: "", country: "Nigeria", state: "enugu", district: "enugu north", address: "presidential rd", quantity: Number(qty), amount: item.type != "pot" ? (item.price*Number(qty)*0.63)+fee+vat : Number(potPrices)+fee+vat})}>Pay on delivery</button> */}
                                {/* <PaystackButton className='w-full py-3 bg-blue-950 font-bold text-white' {...paymentProps} /> */}
                                {orderType == "home" ? <button type="button" className='w-full py-3 bg-accent font-bold' onClick={(e) => {
                                        e.preventDefault(); 
                                        handleFreeCheckout([{ receipt: receipt, mealId: item.id, photo: item.photo.url, customerId: (user ? user.id : null), name: item.name, combo: combo as string, meat: meat as string, type: item.type as string, firstName: firstName.toLowerCase(), surname: lastName.toLowerCase(), email: email.toLowerCase(), method: orderType,tel, country, state, district, address, itemsCount: 1, quantity: Number(qty), prepaid: false, amount: item.type != "pot" ? (item.price*Number(qty)*0.63)+fee+vat : Number(potPrices)+fee+vat}], receipt)
                                    }
                                }>Pay on delivery</button> : null}
                                {orderType == "home" ? <p className='text-red-500 text-sm'><strong>ATTENTION:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis distinctio corporis unde, et eligendi sed!!!</p> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default CheckoutForm
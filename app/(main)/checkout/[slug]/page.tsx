import { Meal } from '@/lib/graphcms';
import CheckoutBanner from '@/components/banners/CheckoutBanner'
import Navbar from '@/components/bars/Navbar';
import CheckoutForm from '@/components/forms/SingleCheckoutForm';
import { TMeal } from '@/types';
import { redirect } from 'next/navigation';
import React from 'react'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import Footer from '@/components/Footer';
import { getUser } from '@/lib/datacalls';
import axios from 'axios';

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined }
}

const SingleCheckout = async({ params, searchParams}: Props) => {
    const session = await getServerSession(authOptions)
    const user = await getUser(session?.user?.email as string)

    const item: TMeal = await Meal(params.slug);
    const mobile = false;

    const [ discount, settings ] = await Promise.all([
        axios(`${process.env.API_ROOT}/settings/discount`),
        axios(`${process.env.API_ROOT}/settings`)
      ])

      if (!settings.data.cardpay && !settings.data.manualpay) {
        redirect("/")
      }

      const eligible: boolean = user.profile?.bonuslevel == 0 ? true : false;
      console.log(eligible)
    
      let bonus: number = (user.profile?.bonuslevel == 0 ? process.env.REGBONUS : discount.data.type == "none" ? 0 : discount.data.type == "regular" ? discount.data.rate : discount.data.type == "seasonal" ? discount.data.rate : 0);
    
    let meat: string | string[] | undefined = searchParams.meat;
    let combo: string | string[] | undefined = searchParams.combo;
    let qty: string | string[] | undefined = searchParams.qty;
    let size: string | string[] | undefined = searchParams.size;
    let potPrices;

    const meatList = [ 'goat meat', 'beef', 'chicken', 'turkey', 'pork', 'catfish', 'fresh fish', 'catfish and fresh fish', 'catfish with fresh fish', 'snails' ];
    const comboList: string[] = [ 'garri', 'fufu', 'semovita', 'pounded yam', 'amala', 'white rice', 'rice', 'yam', 'plantain', 'yam and plantain', 'salad', 'ofada sauce', 'salad and ofada sauce', 'none' ];
    const sizeList: string[] = [ 'small(sm)', 'medium(md)', 'large(lg)', 'extra-large(xl)' ]

    if(!item) {
        redirect('/');
    }

    if (item.type == 'pot') {
        if (meat == undefined || size == undefined) {
            redirect(`/meal/${item.slug}`)
        }
        if (meat == "" || size == "") {
            redirect(`/meal/${item.slug}`)
        }
        if (!meatList.includes(meat as string) || !sizeList.includes(size as string)) {
            redirect(`/meal/${item.slug}`)
        }
        potPrices = (size == 'small(sm)' ? item.priceSm 
            : size == 'medium(md)' ? item.price 
            : size == 'large(lg)' ? item.priceLg 
            : size == 'extra-large(xl)' ? item.priceXl : NaN
        )
    } else {
        if (qty == undefined || meat == undefined || combo == undefined) {
            redirect(`/meal/${item.slug}`)
        }
        if (qty == "" || meat == "" || combo == "") {
            redirect(`/meal/${item.slug}`)
        }
        if (!comboList.includes(combo as string) || !meatList.includes(meat as string) || !Number(qty)) {
            console.log('something isn\'t right')
            redirect(`/meal/${item.slug}`)
        }
    }

    return (
        <>
            <Navbar user={user.profile} allowcart={settings.data.cart} />
            <CheckoutBanner meal={`${item.slug}`} />
            <CheckoutForm item={item} meat={meat} combo={combo} qty={qty} size={size} potPrices={potPrices} user={user.profile} discount={1-(bonus/100)} rate={bonus} mobile={mobile} manualpay={settings.data.manualpay} cardpay={settings.data.cardpay} eligible={eligible} />
            <Footer />
        </>
    )
}

export default SingleCheckout
import { Meal } from '@/actions';
import CheckoutBanner from '@/components/banners/CheckoutBanner'
import Navbar from '@/components/bars/Navbar';
import CheckoutForm from '@/components/forms/SingleCheckoutForm';
import { TMeal } from '@/types';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined }
}

const SingleCheckout = async({ params, searchParams}: Props) => {

    const item: TMeal = await Meal(params.slug);
    
    let meat: string | string[] | undefined = searchParams.meat;
    let combo: string | string[] | undefined = searchParams.combo;
    let qty: string | string[] | undefined = searchParams.qty;
    let size: string | string[] | undefined = searchParams.size;
    let potPrices;

    const meatList = [ 'goat meat', 'beef', 'chicken', 'turkey', 'pork', 'catfish', 'fresh fish', 'catfish and fresh fish', 'catfish with fresh fish' ];
    const comboList: string[] = [ 'garri', 'fufu', 'semovita', 'pounded yam', 'amala', 'white rice', 'rice', 'yam', 'plantain', 'yam and plantain' ];
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
            <Navbar />
            <CheckoutBanner meal={`${item.slug}`} />
            <CheckoutForm item={item} meat={meat} combo={combo} qty={qty} size={size} potPrices={potPrices} />
        </>
    )
}

export default SingleCheckout
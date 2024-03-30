export type TPhoto = {
    url: string
}

export type TMeal = {
    id: string;
    photo: TPhoto;
    name: string;
    title: string;
    slug: string;
    price: number;
    quantity: number;
    video?: string | null;
    priceSm?: number;
    priceLg?: number;
    priceXl?: number;
    type?: string;
    category?: string;
    combo?: string;
    meat?: string;
    description?: string;
}

export type TCartItem = {
    id?: string;
    photo?: string;
    name?: string;
    title?: string;
    slug?: string;
    price?: number;
    quantity?: number;
    cartQty?: number;
    type?: string;
    category?: string;
    combo?: string;
    comboList?: string[];
    meat?: string;
    meatList?: string[];
}

export type TOrder = {
    id?: string;
    mobile: boolean;
    receipt: string;
    mealId: string;
    customerId?: string | null;
    photo?: string;
    name: string;
    combo?: string;
    meat: string;
    type: string;
    method: string;
    firstname: string;
    lastname: string
    email: string;
    tel?: string;
    country?: string;
    city: string;
    district: string;
    address: string;
    postalCode?: string;
    itemsCount: number;
    quantity: number;
    size?: string | null;
    prepaid: boolean;
    price: number;
    amount: number;
}

export type TUser = {
    id?: string;
    image?: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    country?: string;
    state?: string;
    password?: string;
}

export type TPaystackTransactionProps = {
    message: string;
    redirecturl: string;
    reference: string;
    status: string;
    trans: string;
    transaction: string;
    trxref: string;
}

export type OrdersEmailTemplateProps = {
    firstname: string;
    delivery?: string;
    receipt: string;
    address: string;
    amount: number;
    items?: {
        title: string;
        price: number;
    }[]
}

export type WelcomeEmailProps = {
    name: string;
    discount?: number;
}
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
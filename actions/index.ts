"use server"

import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const api = process.env.API_ROOT;
const client = process.env.CLIENT_ROOT;

export const getErrorMessage = (error: unknown): string => {
    let message: string;

    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message)
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "something went wrong";
    }

    return message;
}

export async function navigateOrders({ page, direction }: { page: number, direction: string }) {
    if (direction == "front") {
        redirect(`/admin/orders/?page=${page+1}`)
    } else {
        redirect(`/admin/orders/?page=${page-1}`)
    }
}

export async function refreshOrders() {
    // revalidatePath(`/admin/orders`)
    redirect(`/admin/orders`)
}

export async function navigateCustomers({ page, direction }: { page: number, direction: string }) {
    if (direction == "front") {
        redirect(`/admin/customers/?page=${page+1}`)
    } else {
        redirect(`/admin/customers/?page=${page-1}`)
    }
}

export async function navigateStaffs({ page, direction }: { page: number, direction: string }) {
    if (direction == "front") {
        redirect(`/admin/staffs/?page=${page+1}`)
    } else {
        redirect(`/admin/staffs/?page=${page-1}`)
    }
}

export async function hire({ position, country, city, userid, page }: { position: string, country: string, city: string, userid: number, page: number }) {
    try {
        const response = await fetch(`${api}/user/employ/${userid}`, {
            method: "PUT",
            body: JSON.stringify({ position, country, city }),
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        const data = await response.json();
        console.log(data)

        if (data.error) {
            throw new Error("An error occurred");
        }

    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    revalidatePath(`/admin/customers?page=${page}`);
}

export async function promote({ position, country, city, userid, page }: { position: string, country: string, city: string, userid: number, page: number }) {
    try {
        const response = await fetch(`${api}/user/promote/${userid}`, {
            method: "PUT",
            body: JSON.stringify({ position, country, city }),
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        const data = await response.json();
        console.log(data)

        if (data.error) {
            throw new Error("An error occurred");
        }

    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    revalidatePath(`/admin/staffs?page=${page}`);
}

export async function sack({ userid, page }: { userid: number, page: number }) {
    try {
        const response = await fetch(`${api}/user/sack/${userid}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        const data = await response.json();
        console.log(data)

        if (data.error) {
            throw new Error("An error occurred");
        }

    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    revalidatePath(`/admin/staffs?page=${page}`);
}

export async function updateStatus({ stage, receipt, page }: { stage: number, receipt: string, page: number }){
    try {
        const response = await fetch(`${api}/orders/status/${receipt}?stage=${stage}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        const data = await response.json();
        console.log(data)

        if (data.error) {
            throw new Error("An error occurred");
        }

    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    revalidatePath(`/admin/orders?page=${page}`);
    // if (direction == "front") {
    //     redirect(`/admin/orders/?page=${page+1}`)
    // } else {
    //     redirect(`/admin/orders/?page=${page-1}`)
    // }
    
}

export async function print({ items }: any) {
    try {
        const response = await fetch(`${api}/orders/print`, {
            method: "PUT",
            body: JSON.stringify({ items }),
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        const data = await response.json();
        console.log(data)

        if (data.error) {
            throw new Error("An error occurred");
        }

    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    revalidatePath(`/admin/orders`);
}

export async function setDiscount({ type, season, rate }: { type: string, season: string, rate: string }) {
    try {
        const response = await fetch(`${api}/settings/discount`, {
            method: "PUT",
            body: JSON.stringify({ type, season, rate }),
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        const data = await response.json();
        console.log(data)

        if (data.error) {
            throw new Error(data.message);
        }

    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    // revalidatePath(`/admin/staffs?page=${page}`);
}

export async function setRules({ cart, maintenance, cardpayment, manualpayment }: { cart: boolean, maintenance: boolean, cardpayment: boolean, manualpayment: boolean }) {
    try {
        const response = await fetch(`${api}/settings`, {
            method: "PUT",
            body: JSON.stringify({ cart, maintenance, cardpayment, manualpayment }),
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        const data = await response.json();
        console.log(data)

        if (data.error) {
            throw new Error(data.message);
        }

    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    // revalidatePath(`/admin/staffs?page=${page}`);
}
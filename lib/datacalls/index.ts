import axios from "axios"

const api = process.env.API_ROOT;

export const getUser = async(email: string) => {
    const { data } = await axios(`${api}/user?email=${email}`)
    return data;
}

export const getUserOrders = async(email: string, start: number, limit: number, ) => {
    const { data } = await axios(`${api}/orders?email=${email}&start=${start}&limit=${limit}`)
    return data.orders;
}
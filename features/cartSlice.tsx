"use client"

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { TCartItem } from "@/types";

type TInitState = {
    items: TCartItem[];
    quantity: number;
    amount: number;
    loading?: boolean;
}

const initialState: TInitState = {
    items: [],
    quantity: 0,
    amount: 0,
    loading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        initializeCart(state){
            state.loading = true;
            if(localStorage.getItem('items')){
                state.items = JSON.parse(localStorage.getItem('items') as string)
                state.quantity = JSON.parse(localStorage.getItem('quantity') as string)
                state.amount = JSON.parse(localStorage.getItem('total') as string)
                state.loading = false;
                return;
            }
            state.loading = false;
            return;
        },
        addProduct(state, action: { payload: TCartItem, type: string }) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
            if (itemIndex >= 0) {
                let newCount = Math.floor(state.items[itemIndex].cartQty as number)+Math.floor(action.payload.cartQty as number)
                if (state.items[itemIndex].cartQty == action.payload.quantity) {
                    toast.error(`Meal is out of stock`, {
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
                if(newCount > (action.payload.quantity as number)) {
                    toast.error(`Out of stock, ${Number(action.payload.quantity)-(state.items[itemIndex].cartQty as number)}  available`, {
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
                state.items[itemIndex].cartQty = Math.floor(state.items[itemIndex].cartQty as number)+Math.floor(action.payload.cartQty as number);
                state.items[itemIndex].combo = action.payload.combo;
                state.items[itemIndex].meat = action.payload.meat;
                toast.success(`Added more meals to cart`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                const tempItem = { ...action.payload }
                state.items.push(tempItem)
                toast.success(`Meal added To cart`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            state.quantity += Math.floor(action.payload.cartQty as number);
            let newPrice = Number(action.payload.price)*Number(action.payload.cartQty);
            state.amount += newPrice;
            localStorage.setItem("items", JSON.stringify(state.items))
            localStorage.setItem("total", JSON.stringify(state.amount))
            localStorage.setItem("quantity", JSON.stringify(state.quantity))
        },
        addToCart(state, action: { payload: TCartItem, type: string }) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
            
            if (itemIndex >= 0) {
                if (state.items[itemIndex].cartQty == action.payload.quantity) {
                    return;
                }
                (state.items[itemIndex].cartQty as number) += 1;
                toast.success(`Added more meals to cart`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                const tempItem = { ...action.payload, cartQty: 1}
                state.items.push(tempItem)
                toast.success(`Meal added to cart`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            state.quantity += 1;
            state.amount += Number(action.payload.price);
            localStorage.setItem("items", JSON.stringify(state.items))
            localStorage.setItem("total", JSON.stringify(state.amount))
            localStorage.setItem("quantity", JSON.stringify(state.quantity))
        },
        changeCombo(state, action: { payload: TCartItem, type: string }) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
            
            if (itemIndex >= 0) {
                state.items[itemIndex].combo = action.payload.combo;
                toast.success(`combo changed to ${action.payload.combo}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                return;
            }
            localStorage.setItem("items", JSON.stringify(state.items));
        },
        changeMeat(state, action: { payload: TCartItem, type: string }) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
            
            if (itemIndex >= 0) {
                state.items[itemIndex].meat = action.payload.meat;
                toast.success(`meat changed to ${action.payload.meat}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                return;
            }
            localStorage.setItem("items", JSON.stringify(state.items));
        },
        removeFromCart(state, action: { payload: TCartItem, type: string }) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
            let cartItems;
            if (state.items[itemIndex].cartQty == 1) {
                cartItems = state.items.filter((item, index) => item.id !== action.payload.id)
                toast.error(`Meal removed from cart`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                (state.items[itemIndex].cartQty as number) -= 1;
                cartItems = [...state.items ]
            }
            state.items = cartItems;
            state.quantity -= 1;
            state.amount -= Number(action.payload.price);
            localStorage.setItem("items", JSON.stringify(state.items))
            localStorage.setItem("total", JSON.stringify(state.amount))
            localStorage.setItem("quantity", JSON.stringify(state.quantity))
        },
        deleteMeal(state, action: { payload: TCartItem, type: string }){
                const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
                let cartItems = state.items.filter((item, index) => item.id !== action.payload.id)
                state.quantity -= state.items[itemIndex].cartQty as number;
                let totalAmt = Number(state.items[itemIndex].price)*Number(state.items[itemIndex].cartQty)
                state.amount -= totalAmt;
                state.items = cartItems;
                localStorage.setItem("items", JSON.stringify(state.items))
                localStorage.setItem("total", JSON.stringify(state.amount))
                localStorage.setItem("quantity", JSON.stringify(state.quantity))
                toast.error(`Meal removed from cart`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
        },
        clearCart(state, action) {
            state.items = [];
            state.quantity = 0;
            state.amount = 0;
            toast.info(`Cart items cleared!!!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            localStorage.setItem("items", JSON.stringify(state.items))
            localStorage.setItem("total", JSON.stringify(state.amount))
            localStorage.setItem("quantity", JSON.stringify(state.quantity))
        }
    }
})

export const { initializeCart, addToCart, removeFromCart, addProduct, changeCombo, changeMeat, deleteMeal, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
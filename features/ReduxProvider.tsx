"use client"

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import cartReducer from "./cartSlice"

const store = configureStore({
    reducer: {
      cart: cartReducer
    }
})

const ReduxProvider = ({ children }: { children: React.ReactNode}) => {
    return (
        <Provider store={store}>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {children}
        </Provider>
    )
}

export default ReduxProvider
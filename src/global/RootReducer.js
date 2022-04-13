import { configureStore } from "@reduxjs/toolkit";
import { ModalReducer } from "./ModalSlice";
import { CartReducer } from "./CartSlice";

export const RootReducer = configureStore({
    reducer: {
        modal: ModalReducer,
        cart: CartReducer,
    },
});




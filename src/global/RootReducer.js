import { configureStore } from "@reduxjs/toolkit";
import { ModalReducer } from "./ModalSlice";

export const RootReducer = configureStore({
    reducer: {
        modal: ModalReducer
    },
});




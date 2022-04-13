import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};
const ModalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
    },
});
export const { openModal, closeModal } = ModalSlice.actions;
export const ModalReducer = ModalSlice.reducer;



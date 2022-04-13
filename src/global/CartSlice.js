import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = 
createAsyncThunk("cart/getCartItems", async () => {
    const res = await fetch(URL);
    if (!res.ok) throw new Error(res.statusText);
    const cart = await res.json();
    return [...cart];
});

const initialState = {
    cartItems: [],
    amount: 1,
    total: 0,
    isLoading: true
};

const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== itemId);
        },
        decrease: (state, action) => {
            cartItem.amount = cartItem.amount - 1;
            const cartItem = state.cartItems.find(
                (item) => item.id === action.payload.id);
        },
        increase: (state, action) => {
            cartItem.amount = cartItem.amount + 1;
            const cartItem = state.cartItems.find(
                (item) => item.id === action.payload.id);
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += total.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
    extraReducers: {
        [getCartItems.rejected]: (state, action) => {
            console.log(action),
            state.isLoading = false
        },
        [getCartItems.pending]: (state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.cartItems = action.payload
        },
    },
});

export const { clearCart, removeItem, increase, 
    decrease, calculateTotals } = CartSlice.actions;
export const CartReducer = CartSlice.reducer;





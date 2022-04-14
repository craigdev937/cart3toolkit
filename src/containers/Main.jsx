import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "../global/CartSlice";
import { Modal } from "../misc/Modal";
import { Navbar } from "../components/Navbar";
import { CartContainer } from "../cart/CartContainer";

export const Main = () => {
    const dispatch = useDispatch();
    const { isLoading, cartItems } = 
        useSelector((state) => state.cart);
    const { isOpen } = useSelector((state) => state.modal);

    React.useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);

    React.useEffect(() => {
        dispatch(getCartItems("random"));
    }, []);

    if (isLoading) {
        return (
            <aside className="loading">
                <h1>Loading...</h1>
            </aside>
        );
    };

    return (
        <React.Fragment>
            {isOpen && <Modal />}
            <Navbar />
            <CartContainer />
        </React.Fragment>
    );
};




import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../global/ModalSlice";
import { CartItem } from "./CartItem";

export const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, total, amount } = 
    useSelector((state) => state.cart);

    if (amount < 1) {
        return (
            <section className="cart">
                <header><h2>your bag</h2></header>
                <h4 className="empty-cart"
                    >is currently empty
                </h4>
            </section>
        );
    };

    return (
        <section className="cart">
            <header><h2>your bag</h2></header>
            <main>
                {cartItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </main>
            <footer>
                <hr />
                <aside className="cart-total">
                    <h4>total 
                        <span>${total.toFixed(2)}</span>
                    </h4>
                </aside>
                <button className="btn clear-btn"
                    onClick={() => dispatch(openModal())}
                    >clear cart
                </button>
            </footer>
        </section>
    );
};





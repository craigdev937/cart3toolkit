import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../global/CartSlice";
import { closeModal } from "../global/ModalSlice";

export const Modal = () => {
    const dispatch = useDispatch();

    return (
        <main className="modal-container">
            <div className="modal">
                <h4>Remove items from cart</h4>
                <div className="btn-container">
                    <button 
                        type="button"
                        className="btn confirm-btn"
                        onClick={() => {
                            dispatch(clearCart());
                            dispatch(closeModal());
                        }}>
                        confirm
                    </button>
                    <button 
                        type="button"
                        className="btn clear-btn"
                        onClick={() => {
                            dispatch(closeModal());
                        }}
                        >
                            cancel
                    </button>
                </div>
            </div>
        </main>
    );
};



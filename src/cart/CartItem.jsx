import React from "react";
import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../misc/icons";
import { removeItem, increase, 
    decrease } from "../global/CartSlice";

export const CartItem = 
({ id, img, title, price, amount }) => {    
    const dispatch = useDispatch();

    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <section>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button 
                    className="remove-btn"
                    onClick={() => {
                        dispatch(remove(id));
                    }}
                    >remove
                </button>
            </section>
            <section>
                <button className="amount-btn"
                    onClick={() => {
                        dispatch(increase({ id }));
                    }}
                ><ChevronUp />
                </button>
                <p className="amount">{amount}</p>
                <button 
                    className="amount-btn"
                    onClick={() => {
                        if (amount === 1) {
                            dispatch(removeItem(id));
                            return;
                        }
                        dispatch(decrease({ id }));
                    }}
                    ><ChevronDown />
                    </button>
            </section>
        </article>
    );
};




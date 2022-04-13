import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../misc/icons";

export const Navbar = () => {
    const { amount } = useSelector((store) => store.cart);

    return (
        <React.Fragment>
            <nav>
                <main className="nav-center">
                    <h3>Redux Toolkit</h3>
                    <div className="nav-container">
                        <CartIcon />
                        <div className="amount-container">
                            <p 
                                className="total-amount"
                                >{amount}
                            </p>
                        </div>
                    </div>
                </main>
            </nav>
        </React.Fragment>
    );
};




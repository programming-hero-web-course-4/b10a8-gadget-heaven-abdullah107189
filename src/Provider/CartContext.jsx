import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [wishlistItems, setWishlistItems] = useState([])
    const addToCart = (product) => {
        const newCart = [...cartItems, product]
        setCartItems(newCart)
    }
    const addToWishlist = (product) => {
        const newCart = [...wishlistItems, product]
        setWishlistItems(newCart)
    }

    return (
        <CartContext.Provider value={{ cartItems, wishlistItems, addToCart, addToWishlist }}>
            {children}
        </CartContext.Provider>
    );
};
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
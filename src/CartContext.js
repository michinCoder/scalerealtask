import React, { createContext, useState } from 'react'

const CartContext = createContext();

export function CartProvider({children}){
    const [item, setItem] = useState([]);

    const addToCart = (product) => {
        setItem(prevState => [...prevState, {product}]);
    }
    return (
        <CartContext.Provider value={{item, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
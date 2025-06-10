// src/pages/context/CartProvider.jsx
import React, { createContext, useReducer, useEffect } from 'react';
import CartReducer from './CartReducer';

export const CartContext = createContext();

const getInitialCart = () => {
  const localData = localStorage.getItem('cart');
  return localData ? JSON.parse(localData) : [];
};

const CartProvider = ({ children }) => {
   const [cart, dispatch] = useReducer(CartReducer, [], getInitialCart);
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  //console.log("Cart context value:", cart);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import React, { createContext, useReducer, useEffect } from 'react';
import wishlistReducer from './WishlistReducer';


export const WishlistContext = createContext();

const getInitialWishlist = () => {
  const localData = localStorage.getItem('wishlist');
  return localData ? JSON.parse(localData) : [];
};



const WishlistProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishlistReducer, [], getInitialWishlist);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;

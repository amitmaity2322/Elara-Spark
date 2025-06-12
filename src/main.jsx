
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './fonts.css';
import App from './App.jsx';
import CartProvider from './pages/context/CartProvider.jsx';
import WishlistProvider from './pages/context/WishlistProvider.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </WishlistProvider>
  </React.StrictMode>
);
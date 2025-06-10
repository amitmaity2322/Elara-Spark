import React, {useContext} from 'react'
import productImg from '../assets/ring-1.svg';
import remove from '../assets/remove.svg';
import { CartContext } from './context/CartProvider';

function CartProduct({product}) {
  const { dispatch } = useContext(CartContext);
  return (
    <>
      
            <div className='cart_detail  font-size14 font-weight500 text-center mt-3'>
                <div className='d-flex align-items-center'>
                  <div className='cart-img me-3'><img src={product.image_url} alt="productImg" /></div>
                  <div>
                    <p>{product.product_name}</p>
                    <p className='font-size12 font-weight500 pt-2'>Carat: <span className='font-weight300'>18KT</span></p>
                  </div>
                </div>
                <div>${product.mrp_price}</div>
               <div className="quantity-selector cart-quantity d-flex align-items-center">
                       <button className="qty-btn" onClick={()=> dispatch({ type: 'Decrease', payload: product.id })}>-</button>
                       <input type="text" className="qty-input" value={product.quantity} readOnly/>
                       <button className="qty-btn" onClick={()=> dispatch({ type: 'Increase', payload: product.id })}>+</button>
                       </div>
                <div>${(product.mrp_price * product.quantity).toFixed(2)}</div>
                <div className='remove'><img src={remove} alt="Remove" onClick={()=> dispatch({ type: 'Remove', payload: product.id })}/></div>
            </div>
            
    </>
  )
}

export default CartProduct

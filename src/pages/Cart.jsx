import React, {useContext} from 'react'
import { CartContext } from './context/CartProvider';
import CartProduct from './CartProduct';
import { useNavigate } from 'react-router-dom';



function Cart() {
  const { cart } = useContext(CartContext);
  //console.log("Cart data:", cart);
  //console.log("Cart on Cart Page:", cart);

  const subtotal = cart.reduce(
     (sum, item) => sum + item.mrp_price * item.quantity, 0
  )

  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
   if(cart.length > 0){
      navigate('/Checkout')
   }else{
      alert('Your cart is empty')
   }
 };
  return (
    <>
    <div className='shop-banner'>
        <div className='container text-center'>
            <h3 className='font-family1 font-weight500 font-size28'>Your Shopping Cart</h3>
            <h5 className='font-size16 font-weight400 pt-3'><a href='/'>Home</a></h5>
        </div>
     </div>
      <div className='cart_box'> 
         <div className='container'>
            {cart.length === 0 ? (
            <div className="text-center py-5">
              <h4 className="font-family1 font-size26 font-weight500 color-main">Your cart is empty</h4>
            </div>
            ):(
            <div className='row'>
           <div className='col-lg-8 overflow-x-scroll1'>
            <div className='overflow-width'>
           <div className='cart_detail cart_detail1 text-uppercase font-size16 font-weight500 text-center font-family1'>
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
                <div>Remove</div>
            </div>
           {cart.map((p, index) => (
  <CartProduct key={index} product={p} />
))}
</div>
           </div>
           <div className='col-lg-4'>
             <div className='cartPrice_box color-pur-light mt-4 mt-lg-0'>
              <div className='font-size18 font-family1 text-uppercase font-weight500 pb-3'>Cart Totals</div>
              <div className='d-flex justify-content-between cartPrice pt-2 font-size14'>
                 <span>Subtotal:</span>
                 <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className='d-flex justify-content-between cartPrice pt-2 font-size14'>
                 <span>Shipping:</span>
                 <span>FREE</span>
              </div>
              <div className='d-flex justify-content-between pt-2 font-weight600'>
                 <span>Total:</span>
                 <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className='btn cart-btn w-100 rounded-0' onClick={handleProceedToCheckout}>Proceed To Checkout</button>
             </div>
           </div>
           </div>
           )}
         </div>
      </div>
    </>
  )
}

export default Cart

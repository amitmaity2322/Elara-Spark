import React, { createContext, useContext } from 'react'
import logo from '/images/logo.svg';
import cartCheckout from '/images/checkout-cart.svg';
import { CartContext } from './context/CartProvider';
import FormSection from './FormSection';



function Checkout() {
const { cart } = useContext(CartContext);
const subtotal = cart.reduce(
  (sum, item) => sum + item.mrp_price * item.quantity, 0
)
  return (
   <>
    <section className='checkout'>

    <div className='checkout_top '>
      <div className='container d-flex justify-content-between align-items-center'>
        
        <div> <a class="navbar-brand" href="/"><img src={logo} alt="logo" /></a></div>
        <div><img src={cartCheckout} alt="logo" /></div>
        
      </div>
    </div>

    <div className='section_checkout'>
        <div className='container'>
          <div className='checkout_wrap'>
            <div className='checkout_left pe-md-4 pe-lg-5 padd-top-40 order-2 order-md-1'>
              <FormSection/>
           <div className='checkout-copyright font-size14 font-weight300 py-4'>
              <p>© 2025 Elara Spark. All rights reserved.</p>
           </div>
            </div>
            <div className='checkout_right position-relative ps-md-4 ps-lg-5 padd-top-40 order-1 order-md-2'>
            <h4 className='font-size20 font-family1 pb-2'>Order Summary</h4>

            {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
          <div key={index} className='checkout-grid mt-4'>
                <div class="d-flex align-items-center">
                  <div class="check-img me-3">
                    <img alt={item.product_name} src={item.image_url}/>
                    </div>
                    <div>
                      <p className='font-weight300 font-size12'>{item.product_name} <span className='font-weight500'>(x{item.quantity})</span></p>
                      <p class="font-size12 font-weight500 pt-2">{item.mrp_price}</p>
                    </div>
                </div>
                <div className='text-end '>${(item.mrp_price * item.quantity).toFixed(2)}</div>
                </div>
                ))}

        </div>
      )}
             
                
             
            
            
           <div className='checkout-grid font-size14 border-check mt-4'>
            <div className='text-start'>Subtotal</div>
            <div className='text-end'>${subtotal.toFixed(2)}</div>
           </div>
           <div className='checkout-grid font-size14 pt-3'>
            <div className='text-start'>Shipping</div>
            <div className='text-end'>FREE</div>
           </div>

           <div className='checkout-grid font-size16 pt-3 border-check font-weight500'>
            <div className='text-start'>Total</div>
            <div className='text-end'>${subtotal.toFixed(2)}</div>
           </div>


            </div>
          </div>
        </div>
    </div>



    </section>

  </>
  )
}

export default Checkout

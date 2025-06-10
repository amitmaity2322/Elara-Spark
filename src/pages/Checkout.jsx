import React, { useContext } from 'react'
import logo from '../assets/logo.svg';
import cartCheckout from '../assets/checkout-cart.svg';

function Checkout() {


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
              <form className='form_container'>
            <h4 className='font-size20 font-family1 pb-2'>Contact</h4>
            <div class="form-group shop-item">
              <input type="email" class="form-control" id="" placeholder="Email Address"/>
              <label class="shop-check mt-3">Email me with news and offers<input type="checkbox" value="in-stock"/><span class="checkmark"></span></label>
            </div>
           <div className='padd-top-40 delivery'>
           <h4 className='font-size20 font-family1 pb-2'>Delivery</h4>
           <div className='grid grid-columns-2 columns-gap'>
           <div class="form-group">
              <input type="text" class="form-control" id="" placeholder="First Name"/>
            </div>
            <div class="form-group ">
              <input type="text" class="form-control" id="" placeholder="Last Name"/>
            </div>
            </div>
            
            <div class="form-group">
            <select class="form-control required" name="shippingState" readonly="" id="">
                    <option>Country</option>
            </select>
            </div>

            <div class="form-group">
            <input type="text" class="form-control" id="" placeholder="Address"/>
            </div>
            <div class="form-group">
            <input type="tel" class="form-control" id="" placeholder="Phone Number"/>
            </div>
            <div className='grid grid-columns-3 columns-gap'>
            <div class="form-group">
            <input type="text" class="form-control" id="" placeholder="City"/>
            </div>
            <div class="form-group">
            <select class="form-control required" name="shippingState" readonly="" id="">
                    <option>State</option>
            </select>
            </div>
            <div class="form-group">
            <input type="tel" class="form-control" id="" placeholder="Zip Code"/>
            </div>
            </div>
            <div class="form-group shop-item">
            <label class="shop-check">Save this information for next time<input type="checkbox" value="in-stock"/><span class="checkmark"></span></label>
            </div>
           </div>
          <div className='payment padd-top-40'>
          <h4 className='font-size20 font-family1 pb-2'>Payment</h4>
            <div className='payment-cod'>
            <label class="radio font-family1">Cash on delivery
              <input type="radio" checked="checked" name="radio"/>
              <span class="checkmark-radio"></span>
            </label>
               <p className=' font-size12 font-weight300 pt-3'>Pay with cash upon delivery.</p>
            </div>
          </div>

<button className='btn checkout-btn w-100 mt-5 py-3'>Pay Now</button>
           </form>
           <div className='checkout-copyright font-size14 font-weight300 py-4'>
              <p>© 2025 Elara Spark. All rights reserved.</p>
           </div>
            </div>
            <div className='checkout_right position-relative ps-md-4 ps-lg-5 padd-top-40 order-1 order-md-2'>
            <h4 className='font-size20 font-family1 pb-2'>Order Summary</h4>

            
             
                <div className='checkout-grid mt-4'>
                <div class="d-flex align-items-center">
                  <div class="check-img me-3">
                    <img alt="productImg" src="/src/assets/ring-1.svg"/>
                    </div>
                    <div>
                      <p className='font-weight300 font-size14'>The Kezia Band Ring <span className='font-weight500'>(x1)</span></p>
                      <p class="font-size14 font-weight500 pt-2">$75.00</p>
                    </div>
                </div>
                <div className='text-end'>$75.00</div>
                </div>
             
            
            
           <div className='checkout-grid font-size14 border-check mt-4'>
            <div className='text-start'>Subtotal</div>
            <div className='text-end'>$164.00</div>
           </div>
           <div className='checkout-grid font-size14 pt-3'>
            <div className='text-start'>Shipping</div>
            <div className='text-end'>FREE</div>
           </div>

           <div className='checkout-grid font-size16 pt-3 border-check font-weight500'>
            <div className='text-start'>Total</div>
            <div className='text-end'>$123.90</div>
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

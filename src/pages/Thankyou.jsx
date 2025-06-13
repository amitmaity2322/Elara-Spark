import React from 'react';
import right1x from '../assets/tick-icon1x.png';
import right2x from '../assets/tick-icon2x.png';
import right3x from '../assets/tick-icon3x.png';
import { useLocation } from 'react-router-dom';


function Thankyou() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get('orderId');
  return (
    <>
     <div className='shop-banner'>
        <div className='container text-center'>
            <h3 className='font-family1 font-weight500 font-size28'>Thank You</h3>
        </div>
     </div>

     <section className='thankyou'>
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-9'>
                    <div className='thankyou-mid text-center'>
                      <div className='font-size34 font-weight500 font-family1'>Thank You for Your Purchase!</div>
                      <p className='py-3'>Your order has been successfully placed.</p>
                      <p><span className='font-weight500'>Order ID</span>: {orderId}</p>
                       <img src={right1x} srcSet={`${right2x} 2x, ${right3x} 3x`}  alt="Right" className='py-5'/>
                       <p>A confirmation email with your order details has been sent to <br/> your inbox. We appreciate your trust in ElaraSpark!</p>
                       <p className='pt-3'>If you didn't any mail contact <a href="mailto:support@elaraspark.com">support@elaraspark.com</a></p>
                    </div>
                    
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Thankyou

import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import star from '/images/star.svg';
import wishlist1 from '/images/wishlist.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {  WishlistContext } from '../pages/context/WishlistProvider';
import { CartContext } from './context/CartProvider';


function Wishlist() {
  const { wishlist, dispatch } = useContext(WishlistContext);
 
  const removeFromWishlist = (id) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: { id } });
  };

  const navigate = useNavigate();

  const { dispatch: cartDispatch } = useContext(CartContext);


  const handleAddToCart = (product) => {
    cartDispatch({ type: 'Add', payload: product });
    navigate('/cart');
  };
  
  // const { dispatch } = useContext(CartContext);
  return (
    <>
    <div className='shop-banner'>
        <div className='container text-center'>
            <h3 className='font-family1 font-weight500 font-size28'>Wishlist</h3>
            <h5 className='font-size16 font-weight400 pt-3'>Home</h5>
        </div>
     </div>
      <section className='wishlist my-5'>
         <div className='container'>
             <div className='row'>
             {wishlist.length === 0 ? (
              <div className='text-center py-5'>
                <img src={wishlist1} alt='Wishlist' className='empty_wishlist pb-4'/>
                <p className='font-size34 font-weight400 color-Blackgray'>Your Wishlist is Empty.</p>
              </div>
            
          ) : (
            wishlist.map((item, index) => (
<div className='col-6 col-md-3  text-center main-product' key={index}>
                  <div className='product-box position-relative'>
                    <div className='position-absolute rounded-circle product_wishlist cursor-pointer' onClick={() => removeFromWishlist(item.id)}>
                    <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className='bgcolor-gray'>
                       <img src={item.image_url} alt="" />
                    </div>
                    <h4 className='color-grayBlack font-size14 font-weight400 pt-3'>{item.product_name}</h4>
                         <div className=''>
                             <span><img src={star} alt="star" /></span>
                             <span><img src={star} alt="star" /></span>
                             <span><img src={star} alt="star" /></span>
                             <span><img src={star} alt="star" /></span>
                             <span><img src={star} alt="star" /></span>
                          </div>
                          <p className='color-main color-green font-weight600 font-size14'>${item.mrp_price}</p>
                          <div className='px-3 my-2 '>
                          <button className="add-to-cart-btn w-100 wishlist-btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                          </div>
                          
                  </div>
                </div>
           ))
          )}


                
                
                
                
             </div>
         </div>
      </section>
    </>
  )
}

export default Wishlist

import React, { useContext } from 'react'
import star from '../../assets/star.svg';
import wishlist1 from '../../assets/wishlist.svg';
import viewicon from '../../assets/view-icon.svg';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';
import { WishlistContext } from '../context/WishlistProvider';



function MainProduct({product, columnClass = 'col-md-3'}) {
  const productNavigate = useNavigate ();
  
  const handleClickView = () =>{
    productNavigate(`/product/${product.handle}`);
  }

  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({
      type: 'Add',
      payload: product,
    });
  };


 const { wishlist, dispatch: wishlistDispatch } = useContext(WishlistContext);
 //const { wishlist, dispatch } = useContext(WishlistContext);

 const isInWishlist = wishlist.some(item => item.id === product.id);

 const handleToWishlist = () =>{
  if(isInWishlist){
    wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: { id: product.id } });
    
  }else{
    wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  }
  
  //console.log(product)
 };
//console.log(handleToWishlist)
const currency = import.meta.env.VITE_CURRENCY_SYMBOL;
//const currencyCode = import.meta.env.VITE_CURRENCY_CODE;
 
  return (
  
      <div className={`${columnClass} col-6 text-center main-product`} key={product.id}>
                <div className='product-box position-relative'>
                {[2, 3, 5, 12].includes(product.id) && (
  <div className='position-absolute rounded-circle mark_discount'>
    {product.mark_discount}
  </div>
)}
                <div
          className={`position-absolute rounded-circle product_wishlist cursor-pointer ${
            isInWishlist ? 'wishlist-active' : ''
          }`}
          onClick={handleToWishlist}
        >
                    <img src={wishlist1} alt="wishlist" /></div>
                  
                <div className='bgcolor-gray'>
                <img src={product.image_url} alt={product.name} />
                <div className='d-flex button-hover align-items-center'>
                  <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
                  <button className="view-cart" onClick={handleClickView}><img src={viewicon} alt="View" /></button>
                </div>
                
                </div>
                <h4 className='color-grayBlack font-size14 font-weight400 pt-3'>{product.product_name}</h4>
                <div className=''>
                  <span><img src={star} alt="star" /></span>
                  <span><img src={star} alt="star" /></span>
                  <span><img src={star} alt="star" /></span>
                  <span><img src={star} alt="star" /></span>
                  <span><img src={star} alt="star" /></span>
                 
                </div>
               <div className='d-flex justify-content-center'>
                
               {[2, 3, 5, 12].includes(product.id) && (
    <div className='text-decoration-line-through text-muted font-weight400 font-size14 me-2'>
      {currency}{product.marked_price}
    </div>
  )}
                 <p className='color-main color-green font-weight600 font-size14'>{currency}{product.mrp_price}</p>
                 </div>
                
              </div>
              </div>

  )
}

export default MainProduct



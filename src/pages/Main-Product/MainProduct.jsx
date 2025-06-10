import React, { useContext } from 'react'
import star from '../../assets/star.svg';
import wishlist from '../../assets/wishlist.svg';
import viewicon from '../../assets/view-icon.svg';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';

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

 //console.log('Adding to cart:', product);
 
  return (
  
      <div className={`${columnClass} col-6 text-center main-product`} key={product.id}>
                <div className='product-box position-relative'>
                  <div className='position-absolute rounded-circle product_wishlist'>
                    <img src={wishlist} alt="wishlist" /></div>
                  
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
                 <p className='color-main color-green font-weight600 font-size14'>${product.mrp_price}</p>
                
              </div>
              </div>

  )
}

export default MainProduct

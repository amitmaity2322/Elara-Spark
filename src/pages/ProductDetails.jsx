import React, { useState, useContext, useEffect } from 'react'
import star from '/images/star.svg';
import { parsePath, useNavigate, useParams } from 'react-router-dom';
import productData from '../../db.json';
import { CartContext } from './context/CartProvider';

function ProductDetails({product}) {
  const {handle} =useParams();

  const products1 = productData.products;
  const products2 = productData.featured_products;


  const singleproduct = [...products1, ...products2].find((p) => p.handle === handle);
  //console.log("singleproduct", singleproduct);
 //console.log(products2) 

 const allProducts = [...products1, ...products2];
const similarProducts = allProducts.filter(
  (p) => p.product_type === singleproduct?.product_type && p.handle !== singleproduct?.handle
);


 //const[mainImg, setmainImg]=useState(singleproduct?.image_url);
 const [mainImg, setmainImg] = useState(singleproduct.imageArray[0].url);

 const { dispatch } = useContext(CartContext);

 const [quantity, setQuantity] = useState(1);
 const [selectedCarat, setselectedCarat] =useState('18KT');

 const caratprice = {
  '18KT' : singleproduct.mrp_price,
  '22KT' : (parseFloat(singleproduct.mrp_price) + 10).toFixed(2),
 }
 
 const handleAddToCart = () => {
  dispatch({
    type: 'Add',
    payload: { ...singleproduct, quantity, mrp_price: caratprice[selectedCarat], selectedCarat: selectedCarat  },
  });
};

const navigate = useNavigate();

const handleBuyitNow = () => {
  dispatch({
    type: 'Add',
    payload: { ...singleproduct, quantity, mrp_price: caratprice[selectedCarat], selectedCarat: selectedCarat },
  });

  setTimeout(()=>{
    navigate('/Checkout')
  }, 100);
};

useEffect(() => {
  if (singleproduct?.imageArray?.length > 0) {
    setmainImg(singleproduct.imageArray[0].url);
  }
}, [singleproduct]);

const currency = import.meta.env.VITE_CURRENCY_SYMBOL;

  return (
    <>
    <div className='shop-banner'>
        <div className='container text-center'>
            <h5 className='font-size16 font-weight400 pt-3'><a href='/'>Home</a> / {handle}</h5>
        </div>
     </div>
      <div className='prodetails-section'>
        <div className='container'>
           <div className='row'>
              <div className='col-md-5'>
                <div className='producdetail-box'>
                   <div className='producdetail_Bimg text-center'>
                   <img src={mainImg} alt={singleproduct.product_name} />
                   </div>
                   <div className='producdetail_Simg mt-3'>
                    <ul>
                      {singleproduct.imageArray.map((imgArray, index)=>(
                        <li key={index} onClick={()=>setmainImg(imgArray.url)}><img src={imgArray.url} alt={`productImg-${index}`} /></li>
                       
                      ))}
                        
                    </ul>
                      
                   </div>
                </div>
              </div>
              <div className='col-md-7'>
                <div className='d-lg-flex justify-content-between mt-4 mt-md-0'>
                    <h3 className='font-size26 font-family1'>{singleproduct.product_name}</h3>
                    <div className='font-size14 produdeta-star pt-3 pt-lg-0'>
                       
                                      <span><img src={star} alt="star" /></span>
                                      <span><img src={star} alt="star" /></span>
                                      <span><img src={star} alt="star" /></span>
                                      <span><img src={star} alt="star" /></span>
                                      <span><img src={star} alt="star" /></span>
                                     
                                    
                        ({singleproduct.review})</div>
                </div>
                <div className='font-size22 color-main font-weight600 py-3'>${caratprice[selectedCarat]}</div>
                <div className='productD-text font-size14 font-weight300'>{singleproduct.product_desc}</div>
                <div className='avail font-size14 font-weight500 py-3'>Availability: <span className='font-weight300'>200 in stock</span></div>
                <div className='carat'>
                   <h5 className='font-size14 font-weight500 pb-2'>Carat: </h5>
                   <div className='d-flex'>
                    {['18KT', '22KT'].map((carat)=>(
                      <button key={carat} className={`font-size12 font-weight400 ${selectedCarat === carat ? 'carat-active' : ''}`} onClick={()=> setselectedCarat(carat)}>
                        {carat}
                      </button>
                     
                    ))}
                     
                   </div>
                </div>
                <div className='quantity mt-4'>
                   <h5 className='font-size14 font-weight500 pb-2'>Quantity: </h5>
                   <div className='d-flex'>
                   <div className="quantity-selector d-flex align-items-center">
                   <button className="qty-btn" onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}>-</button>
<input type="text" className="qty-input" value={quantity} readOnly />
<button className="qty-btn" onClick={() => setQuantity(prev => prev + 1)}>+</button>


                       </div>
                     <button className='btn font-size14 font-weight500 text-uppercase prodetail-btn' onClick={handleAddToCart}>Add To Cart</button>
                   </div>
                   <button className='btn font-size14 font-weight500 text-uppercase prodetail-btn1' onClick={handleBuyitNow}>BUY IT NOW</button>
                </div>
                <div className='avail font-size14 font-weight500 pt-3'>SKU: <span className='font-weight300'>NHFL5-14</span></div>
                <div className='avail font-size14 font-weight500 pt-3'>Vendor: <span className='font-weight300'>{singleproduct.Vendor}</span></div>
                <div className='avail font-size14 font-weight500 pt-3'>Category: <span className='font-weight300'>Accessories</span></div>
              </div>
           </div>
        <div className='row mt-5'>
          <div className='col-md-12'>
          <div className='produ-descr font-size26 font-weight500 font-family1'>Description</div>
          <div className='produ-descr-box font-size14 font-weight300'>
              <p className='produdescr-text'>{singleproduct.product_desc1}</p>

              <div>
                <h4 className='font-size18 font-weight500 font-family1 pb-3'>Key Features:</h4>
                <ul className='font-weight300 ps-3 ms-3'>
                  {singleproduct.key_features?.map((key_features, index)=>(
                    <li key={index}>{key_features}</li>
                  )) }
                  
                </ul>
              </div>
              <div>
              <h4 className='font-size18 font-weight500 font-family1 pb-3 pt-4'>Styling Tips:</h4>
              <p>{singleproduct.styling_tips}</p>
              </div>

          </div>
          </div>
           
           
        </div>

        

        </div>
      </div>
      <div className='container'>
  <h3 className='font-size28 font-weight500 mb-4 font-family1'>You May Also Like</h3>
  <div className='row'>
    {similarProducts.slice(0, 4).map((product) => (
      <div className="col-md-3 col-6 text-center main-product" key={product.id}>
        <div className='product-box position-relative' onClick={() => navigate(`/product/${product.handle}`)} style={{ cursor: 'pointer' }}>
        {[2, 3, 5, 12].includes(Number(product.id)) && product.mark_discount && (
  <div className='position-absolute rounded-circle mark_discount'>
    {product.mark_discount}
  </div>
)}
          <div className='bgcolor-gray'>
            <img src={product.image_url} alt={product.product_name} />
          </div>
          <h4 className='color-grayBlack font-size14 font-weight400 pt-3'>
            {product.product_name}
          </h4>
          <div>
            {[...Array(5)].map((_, i) => (
              <span key={i}><img src={star} alt="star" /></span>
            ))}
          </div>
          <div className='d-flex justify-content-center'>
          {[2, 3, 5, 12].includes(Number(product.id)) && product.marked_price && (
    <div className='text-decoration-line-through text-muted font-weight400 font-size14 me-2'>
      {currency}{product.marked_price}
    </div>
  )}
            <p className='color-main color-green font-weight600 font-size14'>
              ${product.mrp_price}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      
    </>
  )
}

export default ProductDetails

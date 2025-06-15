import React from 'react'
import shipping from '/images/shipping-icon.svg';
import moneyback from '/images/moneyback-icon.svg';
import Discounts from '/images/Discounts-icon.svg';
import support from '/images/support-icon.svg';
import category1_1x from '/images/category-1(1x).png';
import category1_2x from '/images/category-1(2x).png';
import category1_3x from '/images/category-1(3x).png';
import category2_1x from '/images/category-2(1x).png';
import category2_2x from '/images/category-2(2x).png';
import category2_3x from '/images/category-2(3x).png';
import category3_1x from '/images/category-3(1x).png';
import category3_2x from '/images/category-3(2x).png';
import category3_3x from '/images/category-3(3x).png';
import category4_1x from '/images/category-4(1x).png';
import category4_2x from '/images/category-4(2x).png';
import category4_3x from '/images/category-4(3x).png';
import category5_1x from '/images/category-5(1x).png';
import category5_2x from '/images/category-5(2x).png';
import category5_3x from '/images/category-5(3x).png';
import modelbg1x from '/images/model-bg1x.png'; 
import modelbg2x from '/images/model-bg2x.png';
import modelbg3x from '/images/model-bg3x.png';
import blog1_1x from '/images/blog-1(1x).jpg'; 
import blog1_2x from '/images/blog-1(2x).jpg';
import blog1_3x from '/images/blog-1(3x).jpg';
import blog2_1x from '/images/blog-2(1x).jpg'; 
import blog2_2x from '/images/blog-2(2x).jpg';
import blog2_3x from '/images/blog-2(3x).jpg'; 
import blog3_1x from '/images/blog-3(1x).jpg'; 
import blog3_2x from '/images/blog-3(2x).jpg';
import blog3_3x from '/images/blog-3(3x).jpg';
import Testimonials_section from './Testimonials_section';
import Banner_slider from './Banner_slider';
import MainProductList from './Main-Product/MainProductList';
import FeaturedProducts from './Main-Product/FeaturedProducts';
import { useNavigate } from 'react-router-dom';





function Home() {
  const buttonNavigate = useNavigate ()
  return (
    <>
     
     <Banner_slider navigate={buttonNavigate}/>

     <section className='ftco-section'>
        <div className='container'>
          <div className='row'>
           <div className='col-md-3 d-flex align-items-center justify-content-center item-mid pb-3 pb-md-0'>
           <img src={shipping} alt="shipping" />
           <p>
           Worldwide Shipping <span className='d-block'>For all Orders Over $100</span>
           </p>
           </div>
           <div className='col-md-3 d-flex align-items-center justify-content-center item-mid pb-3 pb-md-0'>
           <img src={moneyback} alt="shipping" />
           <p>
           Money Back Guarantee <span className='d-block'>Guarante With In 30 Days</span>
           </p>
           </div>
           <div className='col-md-3 d-flex align-items-center justify-content-center item-mid pb-3 pb-md-0'>
           <img src={Discounts} alt="shipping" />
           <p>
           Offers And Discounts <span className='d-block'>Back Returns In 7 Days</span>
           </p>
           </div>
           <div className='col-md-3 d-flex align-items-center justify-content-center item-mid pb-3 pb-md-0'>
           <img src={support} alt="shipping" />
           <p>
           24/7 Support Services <span className='d-block'>Contact us Anytime</span>
           </p>
           </div>
          
           
          
           </div>
        </div>
     </section>

   <section className='ftco-category'>
      <div className='container'>
         <div className='row'>
         <div className='col-md-12 col-lg-6'>
          <div className='color-pur-light position-relative min-hight ipad-sec'>
          <img src={category1_1x} srcSet={`${category1_2x} 2x, ${category1_3x} 3x`}  alt="Category"/>
          <div className='position-absolute category-text'>
            <h5 className='text-uppercase font-size12'>gold ring</h5>
            <h4 className='my-3'>Timeless Shine, <br/>Golden Heart</h4>
            <a href='javascript:void(0)' className='btn cate-btn' onClick={()=> buttonNavigate('/Shop')}>Shop Now</a>
          </div>
          </div>
         </div>
         <div className='col-md-12 col-lg-6'>
         <div className='color-pur-light d-flex align-items-center justify-content-around min-hight mt-4 mt-lg-0'>
          
          <div className='category-text2'>
            <h5 className='text-uppercase font-size12'>gold Pendant</h5>
            <h4 className=' my-3'>Minimal Gold, <br/>Maximum Impact</h4>
            <a href='javascript:void(0)' className='btn cate-btn' onClick={()=> buttonNavigate('/Shop')}>Shop Now</a>
          </div>
          <img src={category2_1x} srcSet={`${category2_2x} 2x, ${category2_3x} 3x`}  alt="Category"/>
          </div>

          <div className='color-pur-light d-flex align-items-center justify-content-around mt-4 min-hight'>
          <img src={category3_1x} srcSet={`${category3_2x} 2x, ${category3_3x} 3x`}  alt="Category"/>
          <div className='category-text3'>
            <h5 className='text-uppercase font-size12'>gold Bracelets</h5>
            <h4 className='my-3'>Bold, Beautiful, <br/>and Gold</h4>
            <a href='javascript:void(0)' className='btn cate-btn' onClick={()=> buttonNavigate('/Shop')}>Shop Now</a>
          </div>
          
          </div>

          
          
         </div>
         </div>
      </div>
   </section>

   <section className='product-section'>
   <div className='container text-center head-all'>
      
      <h2 className="font-family1 font-size34 color-grayBlack">Latest Products</h2>
      <p>Timeless elegance, crafted for moments that last a lifetime.</p>
      
   </div>

  
   <div className='container'>
       <MainProductList/>
   </div>
</section>

<section className='mid-section'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-7'>
        <img src={modelbg1x} srcSet={`${modelbg2x} 2x, ${modelbg3x} 3x`}  alt="modelbg"/>
        </div>
        <div className='col-md-5 d-flex align-items-center text-center text-md-start py-4 py-lg-0'>
          <div>
            <h4 className='text-uppercase font-size12'>Weekly Spotlight</h4>
            <h3 className='font-family1 py-4'>Drop Cut Blue Necklace With Earrings Set</h3>
            <p className='font-weight300 pb-4'>Stylish pieces for the modern urban lifestyle.</p>
            <a href='javascript:void(0)' className='btn mid-btn' onClick={()=> buttonNavigate('/Shop')}>Shop Now</a>
          </div>
        </div>
      </div>
    </div>
</section>


<section className='featured-section'>
   <div className='container text-center head-all'>
      
      <h2 className="font-family1 font-size34 color-grayBlack">Featured Products</h2>
      <p>A perfect blend of classic beauty and modern elegance.</p>
      
   </div>
<div className='container'>
  <FeaturedProducts/>
</div>
  
</section>

<section className='category-bottm'>
   <div className='container'>
      <div className='row'>
         <div className='col-md-6'>
         <div className='color-pur-light d-flex align-items-center justify-content-around min-hight2 mb-4 mb-md-0'>
          
          <div className='category-text2'>
            <h5 className='text-uppercase font-size12'>Stylish Earrings</h5>
            <h4 className='font-size28 my-3'>Women's Rose <br/>Gold Earrings</h4>
            <a href='javascript:void(0)' className='btn cate-btn' onClick={()=> buttonNavigate('/Shop')}>Shop Now</a>
          </div>
          
          <img src={category4_1x} srcSet={`${category4_2x} 2x, ${category4_3x} 3x`}  alt="Category"/>
          </div>
         </div>
         <div className='col-md-6'>
         <div className='color-pur-light d-flex align-items-center justify-content-around min-hight2'>
          
          <div className='category-text2'>
            <h5 className='text-uppercase font-size12'>Stylish ring</h5>
            <h4 className='font-size28 my-3'>Women's Rose <br/> Gold Ring</h4>
            <a href='javascript:void(0)' className='btn cate-btn' onClick={()=> buttonNavigate('/Shop')}>Shop Now</a>
          </div>
          <img src={category5_1x} srcSet={`${category5_2x} 2x, ${category5_3x} 3x`}  alt="Category"/>
          </div>
         </div>
      </div>
   </div>
</section>

{/* -----------testimonials-start------------ */}
<Testimonials_section/>
{/* -----------testimonials-end------------ */}

<section className='section-blog'>
<div className='container text-center head-all'>
      
      <h2 className="font-family1 font-size34 color-grayBlack">Our Latest Blog</h2>
      <p>Fresh insights, style tips, and sparkling jewellery inspiration.</p>
      
   </div>
    <div className='container text-center text-md-start'>
      <div className='row'>
         <div className='col-md-4 pb-4 pb-md-0'>
           <img src={blog1_1x} srcSet={`${blog1_2x} 2x, ${blog1_3x} 3x`}  alt="Blog"/>
          <h6 className='py-2 font-size14 color-main font-weight400'>March 10, 2025</h6>
          <h5 className='font-size16 font-family1 font-weight500'>The Art of Choosing the Perfect Engagement Ring</h5>
          <p className='font-size13 font-weight300 pt-2 pb-3'>Choosing the perfect engagement ring is a heartfelt journey, and at Elara Spark, we offer beautifully crafted rings that symbolize your unique love story.</p>
          <a href='#' className='btn cate-btn' >READ MORE</a>
         </div>
         <div className='col-md-4 pb-4 pb-md-0'> 
         <img src={blog2_1x} srcSet={`${blog2_2x} 2x, ${blog2_3x} 3x`}  alt="Blog"/>
          <h6 className='py-2 font-size14 color-main font-weight400'>March 17, 2025</h6>
          <h5 className='font-size16 font-family1 font-weight500'>The Elegance of Gold Pendants</h5>
          <p className='font-size13 font-weight300 pt-2 pb-3'>Gold pendants are timeless pieces that add effortless elegance to any look. At Elara Spark, each pendant is crafted to shine with grace and style.</p>
          <a href='#' className='btn cate-btn'>READ MORE</a>
         </div>
         <div className='col-md-4'>
         <img src={blog3_1x} srcSet={`${blog3_2x} 2x, ${blog3_3x} 3x`}  alt="Blog"/>
          <h6 className='py-2 font-size14 color-main font-weight400'>March 10, 2025</h6>
          <h5 className='font-size16 font-family1 font-weight500'>Grace in Every Curve – Gold Bracelets</h5>
          <p className='font-size13 font-weight300 pt-2 pb-3'>Gold bracelets from Elara Spark add a touch of refined elegance to any outfit. Delicately crafted, they’re perfect for everyday wear or special occasions.</p>
          <a href='#' className='btn cate-btn'>READ MORE</a>
         </div>
      </div>
    </div>
</section>




    </>
  )
}

export default Home

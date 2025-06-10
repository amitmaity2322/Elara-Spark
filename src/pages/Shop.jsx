import React, { useState, useEffect } from 'react'
import list1 from '../assets/1.svg';
import rightarrow from '../assets/right-arrow.svg';
import AllProduct from './Main-Product/AllProduct';


function Shop() {

  const [isOpen, setisOpen] =useState(window.innerWidth < 768);
  const [isOpenMobile, setisOpenMobile] =useState(window.innerWidth >= 768)

 useEffect(()=>{
    const fillterClick = ()=>{
      const mobile = window.innerWidth < 768;
      setisOpen(mobile)
      setisOpenMobile(!mobile)
      //setisOpenMobile(window.innerWidth < 768)
    };
    window.addEventListener('resize', fillterClick);
    return () => window.removeEventListener('resize', fillterClick);
 }, []);

  const handleClick = () =>{
    if(isOpen){
      setisOpenMobile(!isOpenMobile);
    }
    
  };

  //console.log(handleClick)

  return (
    <div>
     <div className='shop-banner'>
        <div className='container text-center'>
            <h3 className='font-family1 font-weight500 font-size28'>Shop</h3>
            <h5 className='font-size16 font-weight400 pt-3'>Home</h5>
        </div>
     </div>
     <div className='section-shop'>
         <div className='container'>
            <div className='row'>
           <div className='col-md-3'>
            {isOpen && (
              <div className='d-flex justify-content-between filter pb-2 mb-4' onClick={handleClick}>
              <div className=' font-size26 font-family1 font-weight500  d-block d-md-none' >Filter:</div>
              <div ><img src={rightarrow} alt="RightArrow" className={`transform_90 ${isOpenMobile ? 'rotate' : ''}`}/></div>
              </div>
            )}
            <div className='filter font-size26 font-family1 font-weight500 pb-3 mb-4 d-none d-md-block'>
            
  Filter:
</div>
             
             {isOpenMobile && (
             <div className=''>
             <h4 className='font-size18 font-family1 pb-2'>Availability</h4>
    <ul className="list-none list-price">
    <li className="shop-item">
 <label class="shop-check">In stock (16)
  <input type="checkbox"  value="in-stock"/>
  <span class="checkmark"></span>
</label>
</li>
<li className="shop-item">
 <label class="shop-check">Out of stock (0)
  <input type="checkbox"  value="Out-of-stock"/>
  <span class="checkmark"></span>
</label>
</li>
    
  </ul>
  <div className='hl'></div>
  <h4 className='font-size18 font-family1 pb-2'>Price</h4>
  <p className='font-size12 color-Blackgray pb-3'>The highest price is $200.00</p>
  <div className='d-flex price-in justify-content-between align-items-center'>
    <span>$</span>
    <input type="tel"  value="" placeholder='From'/>
    <input type="tel"  value="" placeholder='To'/>
  </div>

  <div className='hl'></div>

  <h4 className='font-size18 font-family1 pb-2'>Product type</h4>
    <ul className="list-none list-price">
    <li className="shop-item">
 <label class="shop-check">Necklace (1)
  <input type="checkbox"  value="Necklace"/>
  <span class="checkmark"></span>
</label>
</li>
<li className="shop-item">
 <label class="shop-check">Pendant (3)
  <input type="checkbox"  value="Pendant"/>
  <span class="checkmark"></span>
</label>
</li>
<li className="shop-item">
 <label class="shop-check">Ring (3)
  <input type="checkbox"  value="Ring"/>
  <span class="checkmark"></span>
</label>
</li>
<li className="shop-item">
 <label class="shop-check">Bracelet (3)
  <input type="checkbox"  value="Bracelet"/>
  <span class="checkmark"></span>
</label>
</li>
<li className="shop-item">
 <label class="shop-check">Earrings (2)
  <input type="checkbox"  value="Earrings"/>
  <span class="checkmark"></span>
</label>
</li>
    
  </ul>
  </div>
  )}
           </div>


<div className='col-md-9'>
   <div className='shop-pro d-flex justify-content-between pt-4 pt-md-0 pb-3 pb-md-5'>
       <p className=' font-size16 color-Blackgray'>Showing 14 results</p>
       <div className='d-flex'>
          <div className='list1'><img src={list1} alt="List" /></div>
          {/* <div className='list2 ms-2'><img src={list2} alt="List" /></div> */}
       </div>
   </div>

   <div className=''>
     <AllProduct columnClass="col-md-4"/>
   </div>
</div>


         </div>
         </div>
     </div>
    </div>
  )
}

export default Shop

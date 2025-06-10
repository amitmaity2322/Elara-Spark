import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';





const Banner_slider = ({navigate}) => {
  
  const BannerSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
     
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
    slidesToScroll: 1,
          dots: true,
          arrows:false,
        },
      },
      
    ],
  };
  return (
    <>
    <div className='index-banner'>
     <Slider {...BannerSlider}>
            <section className="section-slider home-slider">
          <div className="overlay">
            <div className="container h-100">
              <div className="text-white midel-div justify-content-center d-flex h-100">
                <div className='mobile-w-100 deskto-w-50'>
                <h2 className="subheading pb-4">
                Elegance Everyday
                  </h2>
                  <h1 className='pb-4'>Jewellery That
                  Speaks Your Soul</h1>
                  <p className='pb-4 text-white bann-par'>From everyday essentials to statement pieces, our jewellery is thoughtfully designed to celebrate your style and spirit.</p>
                  <p>
                    <button className="btn btn-primary banner-btn text-uppercase" onClick={()=> navigate('/Shop')}>
                     Shop Now
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-slider home-slider">
          <div className="overlay">
            <div className="container h-100">
              <div className="text-white midel-div justify-content-center d-flex h-100">
                <div className='mobile-w-100 deskto-w-50'>
                <h2 className="subheading pb-4">
                Elegance Everyday
                  </h2>
                  <h1 className='pb-4'>Jewellery That
                  Speaks Your Soul</h1>
                  <p className='pb-4 text-white bann-par'>From everyday essentials to statement pieces, our jewellery is thoughtfully designed to celebrate your style and spirit.</p>
                  <p>
                    <button className="btn btn-primary banner-btn text-uppercase" onClick={()=> navigate('/Shop')}>
                     Shop Now
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        </Slider>
        </div>
    </>
  );
};

export default Banner_slider;

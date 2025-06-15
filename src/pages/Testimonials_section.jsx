import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import star from '/images/star.svg';


const testimonials =[
    {
        name:'Garreth Smith',
        role: "Web Developer",
        message: "Absolutely in love with my Elara Spark jewellery! The pieces are stunning, and the quality exceeded my expectations. I feel like I’m wearing a piece of art every day!",
       
    },
    {
        name:'Charlotte G.',
        role: "Happy Customers",
        message: "The quality of the jewellery is amazing. I wear my gold ring daily, and it hasn’t lost its shine. Truly a timeless piece that makes me feel elegant.",
       
    },
    {
        name:'Lily B.',
        role: "Happy Customers",
        message: "I’ve bought several pieces for special occasions, and each one has been extraordinary. Elara Spark makes jewellery that I’ll cherish forever.",
       
    },
  
];

const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    arrow:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
        {
          breakpoint: 1120,
          settings: {
            slidesToShow: 2,
            dots: true,
            arrow:false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrow:false,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrow:false,
          },
        },
      ],
  };

const Testimonials_section = () => {
  return (
    <>
      <section className='testimonials mt-5'>

      <div className="container text-center head-all">
        <h2 className="font-family1 font-size34 color-grayBlack">What Our Cliens Say</h2>
        <p>Elara Spark jewellery is stunning — every piece is pure elegance!</p>
        </div>
  <div className='container' >
    
<div className='row marin-minus testimonials_slider'>
<Slider {...settings}> 
{testimonials.map((item, index) => (
  
<div>
   <div className='bg-white testi-box mx-2'>
      <div className='d-flex'>
         <span><img src={star} alt="star" /></span>
         <span><img src={star} alt="star" /></span>
         <span><img src={star} alt="star" /></span>
         <span><img src={star} alt="star" /></span>
         <span><img src={star} alt="star" /></span>
       </div>
       <p className='pt-2 pb-4'>{item.message}</p>
       <h4>{item.name}</h4>
       <h6 className='pt-1'>{item.role}</h6>

   </div>
</div>

))}
</Slider>



</div>

  </div>
</section>
    </>
  )
}

export default Testimonials_section

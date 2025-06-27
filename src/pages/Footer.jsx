import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; // ✅ Correct package
import { faLocationDot, faPhone, faEnvelope, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import location from '/images/location.svg';
import email from '/images/email.svg';
import phone from '/images/phone.svg';




const Footer = () => {

  return (
    <>
      <section className='footer-section position-relative'>
        <div className='footer-top'>
          <div className='container'> 
          
             <div className='row'>
                <div className='col-md-4 col-lg-3'>
                <h2 className="font-weight500 font-family1 font-size18 pb-3 pb-md-4">About Our Store</h2>
                <p className='font-size14'>Elara Spark crafts timeless jewellery that blends elegance with everyday luxury. Each piece is designed to celebrate your unique story with sparkle and style.</p>
                
                </div>
                <div className='col-md-4 col-lg-2'>
                <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="font-weight500 font-family1 font-size18 pb-3 pb-md-4 pt-4 pt-md-0">Quick Links</h2>
              <ul>
                <li><a href="#" >Contact Us</a></li>
                <li><a href="#" >Shipping</a></li>
                <li><a href="#" >Sitemap</a></li>
                <li><a href="#" >FAQs</a></li>
                <li><a href="#" >Size Chart</a></li>
                <li><a href="#" >About Us</a></li>
              </ul>
            </div>
                </div>
                <div className='col-md-4 col-lg-2'>
                <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="font-weight500 font-family1 font-size18 pb-3 pb-md-4">Services</h2>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Policy for Buyers</a></li>
                <li><a href="#">Policy for Sellers</a></li>
              </ul>
            </div>
                </div>
                <div className='col-md-4 col-lg-2'>
                <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="font-weight500 font-family1 font-size18 pb-3 pb-md-4">Your Account</h2>
              <ul>
                <li><a href="#">Search</a></li>
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Locality</a></li>
                <li><a href="#">Order Tracking</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Shipping & Refund</a></li>
              </ul>
            </div>
                </div>
                <div className='col-md-4 col-lg-3'>
                <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="font-weight500 font-family1 font-size18 pb-3 pb-md-4">Contact Us</h2>
              <ul className='address'>
	                <li><img src={location} alt="Location" /><span className="text">7031 N 35th Ave, Phoenix, Arkansas United States</span></li>
                  <li><img src={email} alt="Email" /><a href="#"><span className="text">support@elaraspark.com</span></a></li>
	                <li><img src={phone} alt="Phone" /><a href="#"><span className="text">+1 (800) 123-4567</span></a></li>
	                
	              </ul>
            </div>
                </div>
                
             </div>
          </div>
          </div>
          <div className='footer-bottom'>
             <div className='container d-md-flex justify-content-between align-items-center text-center text-md-center'>
               <div>
                <p>© 2025 Elara Spark. All rights reserved. </p>
               </div>
               <div>
               <ul className='social-icon p-0 d-flex justify-content-center mt-3 mt-md-0'>
                   <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                   <li><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                   <li><a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a></li>
                    <li><a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                   
                    
                </ul>
               </div>
             </div>
          </div>
      </section>
    </>
  )
}

export default Footer

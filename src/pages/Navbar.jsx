import React, {useContext, useState} from 'react';
import logo from '../assets/logo.svg';
import cart1 from '../assets/cart.svg';
import user from '../assets/user.svg';
import wishlist from '../assets/wishlist.svg';
import search from '../assets/search.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './context/CartProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileNav, setmobileNav] = useState(false);

  const toggleMenu = () =>{
    setmobileNav(!mobileNav);
    console.log('Menu open')
  }

  const {cart} =useContext(CartContext);
  //console.log(cart)
  return (
    <div>
        <div className='top_bar py-2'>
        <div className='container'>
          <div className='row d-flex text-white'>
            <div className='col-md-12 text-center font-size14'>Limited Time Offer – Up to 5% Off!</div>
          </div>
        </div>
     </div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    {/* Mobile logo only */}
    <a className="navbar-brand d-block d-lg-none" href="/"><img src={logo} alt="logo" /></a>

    {/* Toggler for mobile */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
      <span className="navbar-toggler-icon"></span>
    </button> 

    {/* Navbar content */}
    <div className={`navbar-collapse side-nav ${mobileNav ? 'open' : ''} `} id="navbarSupportedContent">
    <button className='close-btn' onClick={toggleMenu}>
    <FontAwesomeIcon icon={faTimes} />
          </button>
      <div className="w-100 d-lg-flex justify-content-between align-items-center mt-5 mt-lg-0">

        {/* 1 DIV LEFT - Logo */}
        <div className="navbar-left">
          <a className="navbar-brand d-none d-lg-block" href="/"><img src={logo} alt="logo" /></a>
        </div>

        {/* 2 DIVS MIDDLE - Navigation split in 2 parts */}
        <div className="d-flex gap-4">
          
          <ul className="navbar-nav mb-3 mb-lg-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/shop">Shop</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* 3 DIVS RIGHT - Icons (grouped logically) */}
        <div className="d-flex align-items-center gap-3">
          <div><img src={search} alt="search" /></div>
          <div><img src={wishlist} alt="wishlist" /></div>
          <div><img src={user} alt="user" /></div>
          <div className='position-relative top-cart'><Link to="/cart" onClick={toggleMenu}><img src={cart1} alt="cart" /></Link><span className=' position-absolute rounded-circle'>{cart.length}</span></div>
         
        </div>

      </div>
    </div>

    
  </div>
</nav>
 
    </div>
  )
}

export default Navbar

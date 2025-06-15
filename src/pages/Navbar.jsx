import React, {useContext, useState} from 'react';
import logo from '/images/logo.svg';
import cart1 from '/images/cart.svg';
import user from '/images/user.svg';
import wishlist1 from '/images/wishlist.svg';
import search from '/images/search.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './context/CartProvider';
import { Link, useNavigate } from 'react-router-dom';
import { WishlistContext } from './context/WishlistProvider';


const Navbar = () => {
  const [mobileNav, setmobileNav] = useState(false);

  const toggleMenu = () =>{
    setmobileNav(!mobileNav);
    //console.log('Menu open')
  }

  const {cart} =useContext(CartContext);
  const {wishlist} =useContext(WishlistContext);
  console.log(wishlist)


  const [showSearch, setShowSearch] = useState(false);
const [searchTerm, setSearchTerm] = useState('');
const navigate = useNavigate();

const handleSearchSubmit = (e) => {
  e.preventDefault();
  if (searchTerm.trim()) {
    navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
    setShowSearch(false); // close popup
    setSearchTerm('');
  }
};

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
    <a className="navbar-brand" href="/"><img src={logo} alt="logo" /></a>

    {/* Toggler for mobile */}
    <button className="navbar-toggler order-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
      <span className="navbar-toggler-icon"></span>
    </button> 

    {/* Navbar content */}
    <div className={`navbar-collapse side-nav ${mobileNav ? 'open' : ''} `} id="navbarSupportedContent">
    <button className='close-btn' onClick={toggleMenu}>
    <FontAwesomeIcon icon={faTimes} />
          </button>
      <div className="d-lg-flex justify-content-between align-items-center mt-5 mt-lg-0">

        {/* 1 DIV LEFT - Logo */}
        {/* <div className="navbar-left">
          <a className="navbar-brand d-none d-lg-block" href="/"><img src={logo} alt="logo" /></a>
        </div> */}

        {/* 2 DIVS MIDDLE - Navigation split in 2 parts */}
        <div className="d-flex gap-4">
          
          <ul className="navbar-nav mb-3 mb-lg-0">
          <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/shop">Shop</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
          </ul>
        </div>

        

      </div>
    </div>

    {/* 3 DIVS RIGHT - Icons (grouped logically) */}
    <div className="d-flex align-items-center gap-3">
        <div onClick={() => setShowSearch(true)} style={{ cursor: 'pointer' }}>
  <img src={search} alt="search" />
</div>

          <div className='position-relative top-cart cursor-pointer'>
            <Link to="/Wishlist">
            <img src={wishlist1} alt="wishlist"  />
            {wishlist.length > 0 && (
              <span className=" position-absolute rounded-circle">{wishlist.length}</span>
             )}
          </Link></div>
          <div><img src={user} alt="user" /></div>
          <div className='position-relative top-cart'><Link to="/cart" ><img src={cart1} alt="cart" /></Link><span className=' position-absolute rounded-circle'>{cart.length}</span></div>
         
        </div>
  </div>
</nav>
 

{showSearch && (
  <div className="search-popup">
    <form onSubmit={handleSearchSubmit} className="search-popup-content">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoFocus
      />
      <button type="submit">Search</button>
      <button type="button" onClick={() => setShowSearch(false)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </form>
  </div>
)}

    </div>
  )
}

export default Navbar

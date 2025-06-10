import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home"; 
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";


function Layout() {
  const location = useLocation();
  const hideNavFooter = location.pathname === '/Checkout';

  return ( 
    <>
    {!hideNavFooter && <Navbar/>}
    
     
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Shop" element={<Shop />} /> 
        <Route path="/product/:handle" element={<ProductDetails />} /> 
        <Route path="/Cart" element={<Cart />} /> 
        <Route path="/Checkout" element={<Checkout />} /> 
        <Route path="/Thankyou" element={<Thankyou />} /> 
        
      </Routes>
    
    {!hideNavFooter && <Footer/>}
    
    
    </>
  )
}


function App(){
  return(
    <>
 <Router>
 <Layout/>
 </Router>
    </>
  )
}

export default App

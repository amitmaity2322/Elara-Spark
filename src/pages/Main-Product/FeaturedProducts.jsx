import React,{useState, useEffect} from 'react'
import MainProduct from './MainProduct';

function FeaturedProducts() {
    const[featured, setfeatured]=useState([]);
    useEffect(()=>{
            fetch('http://localhost:3001/featured_products')
            .then((res)=> res.json())
            .then((data)=> setfeatured(data))
            .catch((err) => console.error('Error fetching products:', err));
         }, []);
  return (
    <div>
      <div className="row">
        {featured.map((product) => (
          <MainProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts

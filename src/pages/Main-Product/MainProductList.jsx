import React,{ useState, useEffect} from 'react'
import MainProduct from './MainProduct';

function MainProductList() {
    const[products, setproduct]=useState([]);
    

    useEffect(()=>{
       fetch('https://elaraspark.onrender.com/products')
       .then((res)=> res.json())
       .then((data)=> setproduct(data))
       .catch((err) => console.error('Error fetching products:', err));
    }, []);
    
  return (
    <div>
        <div className="row">
        {products.map((product) => (
          <MainProduct key={product.id} product={product} />
        ))}
      </div>
       
    </div>
  )
}

export default MainProductList

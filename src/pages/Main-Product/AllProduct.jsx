import React, { useEffect, useState } from 'react'
import MainProduct from './MainProduct';
import rightarrow from '../../assets/right-arrow.svg';

function AllProduct({columnClass}) {
     const[products, setproduct]=useState([]);
     const[featured, setfeatured]=useState([]);
     const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
     

    useEffect(()=>{
       fetch('http://localhost:3001/products')
       .then((res)=> res.json())
       .then((data)=> setproduct(data))
       .catch((err) => console.error('Error fetching products:', err));
    }, []);

    
        useEffect(()=>{
                fetch('http://localhost:3001/featured_products')
                .then((res)=> res.json())
                .then((data)=> setfeatured(data))
                .catch((err) => console.error('Error fetching products:', err));
             }, []);

             const allProducts = [...products, ...featured];

             // Pagination calculation
             const indexOfLast = currentPage * productsPerPage;
             const indexOfFirst = indexOfLast - productsPerPage;
             const currentProducts = allProducts.slice(indexOfFirst, indexOfLast);
             const totalPages = Math.ceil(allProducts.length / productsPerPage);
           
             const handlePageClick = (pageNumber) => {
               setCurrentPage(pageNumber);
               window.scrollTo({ top: 0, behavior: 'smooth' });
             };
           
             const handleNext = () => {
               if (currentPage < totalPages) {
                 setCurrentPage((prev) => prev + 1);
               }
             };
             const handlePrv = () => {
                if (currentPage > 1) {
                  setCurrentPage((prev) => prev - 1);
                }
              };

  return (
    <>
      <div className="row">
      {currentProducts.map((product) => (
          <MainProduct key={product.id} product={product} columnClass={columnClass} />
        ))}
      </div>
      <div className="pagination d-flex justify-content-center mt-4">
      {currentPage > 1 && (
  <button className="pagination-btn mx-1" onClick={handlePrv}>
    <img src={rightarrow} alt="LeftArrow" style={{ transform: 'rotate(180deg)' }} />
  </button>
)}

        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => handlePageClick(num + 1)}
            className={`pagination-btn mx-1 ${currentPage === num + 1 ? 'pagina-active' : ''}`}
          >
            {num + 1}
          </button>
        ))}

        {currentPage < totalPages && (
          <button className="pagination-btn mx-1" onClick={handleNext}>
            <img src={rightarrow} alt="RightArrow" />
          </button>
        )}
      </div>
    </>
  )
}

export default AllProduct

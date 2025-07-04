import React, { useEffect, useState } from 'react'
import MainProduct from './MainProduct';
import rightarrow from '/images/right-arrow.svg';

function AllProduct({columnClass, priceRange, selectedTypes, selectedAvailability, searchQuery, setFilteredCount}) {
     const[products, setproduct]=useState([]);
     const[featured, setfeatured]=useState([]);
     const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
     

    useEffect(()=>{
       fetch('https://elaraspark.onrender.com/products')
       .then((res)=> res.json())
       .then((data)=> setproduct(data))
       .catch((err) => console.error('Error fetching products:', err));
    }, []);

    
        useEffect(()=>{
                fetch('https://elaraspark.onrender.com/featured_products')
                .then((res)=> res.json())
                .then((data)=> setfeatured(data))
                .catch((err) => console.error('Error fetching products:', err));
             }, []);

             const allProducts = [...products, ...featured];

             //console.log(allProducts);
             
             // Filter by priceRange (if provided)
             function escapeRegex(str) {
              return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            }
             const filtered = allProducts.filter((p) => {
              const escapedQuery = escapeRegex(searchQuery);
const matchesSearch =
  searchQuery === '' ||
  new RegExp(`\\b${escapedQuery}\\b`, 'i').test(p.product_name) ||
  new RegExp(`\\b${escapedQuery}\\b`, 'i').test(p.product_type);

              const inPriceRange =
                Number(p.mrp_price) >= priceRange[0] &&
                Number(p.mrp_price) <= priceRange[1];
            
              const inType =
                selectedTypes.length === 0 || selectedTypes.includes(p.product_type);

                const isInStock = Number(p.stock) > 0;
  const availabilityMatch =
    selectedAvailability.length === 0 ||
    (isInStock && selectedAvailability.includes('in-stock')) ||
    (!isInStock && selectedAvailability.includes('out-of-stock'));
            
              return inPriceRange && inType && availabilityMatch && matchesSearch;
            });
            
            

             // Pagination calculation
             const indexOfLast = currentPage * productsPerPage;
             const indexOfFirst = indexOfLast - productsPerPage;
             const currentProducts = filtered.slice(indexOfFirst, indexOfLast); // ✅ use filtered
             const totalPages = Math.ceil(filtered.length / productsPerPage);
           
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

              //priceRange [1000, 5000]
              //console.log("priceRange", priceRange);
              //console.log("allProducts", allProducts);
              console.log("Selected Types:", selectedTypes);
useEffect(()=>{
  setFilteredCount(filtered.length);
}, [filtered.length, setFilteredCount]);

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

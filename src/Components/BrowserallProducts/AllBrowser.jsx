// import { useEffect, useState } from 'react';
// import productsData from '../DataComponent/ProductData'; 
// import {Link} from 'react-router-dom';
// import { IoStarSharp } from "react-icons/io5";
// import OurAdvantages from '../../Footer/TemperoryFooter/OurAdvantages';
// import './BrowerallProducts.css'
// import StaticFooter from '../../Footer/MainStaticFooter/StaticFooter';

// function AllBrowser(){
//   const [initialData, setData] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
 


//   const latest=()=>{
//     const filtered=allProducts.slice(0,6);
//     setData(filtered);
//   }


//   const feature = ()=>{
//     const featureFilter = allProducts.filter(special => special.tag === "featured-product");
//     setData(featureFilter);
    
//   }

//   const toprated = ()=>{
//     const TopRatedProducts = allProducts.filter(rateCount => rateCount.rateCount === 5);
//     setData(TopRatedProducts)
//   }

//   const lowest = ()=>{
//     const sortedByPrice = [...allProducts].sort((a, b) => a.finalPrice - b.finalPrice);
//     setData(sortedByPrice);
//   } 


//   const highest = ()=>{
//     const sortedByPrice = [...allProducts].sort((a, b) => b.finalPrice - a.finalPrice);
//     setData(sortedByPrice);
//   }


//   useEffect(() => {
//     setData(productsData);
//     setAllProducts(productsData);

//     const sideContent = document.querySelector('.side-content');
//     if (sideContent) {
//         sideContent.style.setProperty('--webkit-scrollbar-width', '10px');
//         sideContent.style.setProperty('--webkit-scrollbar-thumb-background-color', 'darkgrey');
       
//     }
//   }, []);

  
//   return (
//    <>
//     <div className='display-items'>
//       <div className='side-content'>
//         <button className='btn-styling btn btn-danger'>Clear All</button>
//         <h4>Sort By</h4>
//         <hr />
//         <ul>
//           <li onClick={latest}>Latest</li>
//           <li onClick={feature} >Featured</li>
//           <li onClick={toprated}>Top Rated</li>
//           <li onClick={lowest}>Price(Lowest)</li>
//           <li onClick={highest}>Price(Highest)</li>
//         </ul>
        
//         <h4>Filter By</h4>
//         <hr className='bold' />
//         <h5>Brands</h5>
//         <input type="checkbox"/>
//         <label>JBL</label>
//         <br />
//         <input type="checkbox"/>
//         <label>BoAt</label>
//         <br />
//         <input type="checkbox"/>
//         <label>Sony</label>

//         <h5>Category</h5>
//         <input type="checkbox"/>
//         <label>HeadPhones</label>
//         <br />
//         <input type="checkbox"/>
//         <label>EarBuds</label>
//         <br />
//         <input type="checkbox"/>
//         <label>Ear Phones</label>
//         <br />
//         <input type="checkbox"/>
//         <label>Neckband</label>
//       </div>
//      <div className=' my-4 p-2 m-4'>
//       <div className='row'>
//         {initialData.map((products) => (
          
//           <div key={products.id} className='col-md-3 mb-4'>
            
//             <Link to={`/${products.id}`} className='text-decoration-none'>
//               <div className='card bg-black text-white border p-2 '>
//             <div className='img-card ' style = {{height: "220px"}}>
//             <img src={products.images[0]} alt={products.title} 
//             className='card-img-top p-4 img-fluid' 
//             style={{ height: '220px', width:'300px', objectFit:'contain'}}/>
//             </div>
//             <span className='iconTag'>
//               {
//                 [...Array(products.rateCount)].map(i=><IoStarSharp key={i} className='coni'/>)
//               }
//             </span>
            
//             <div className='card-body'>
//               <h3 className='card-title text-truncate pe-4'>{products.title}</h3>
//               <p className='card-text text-truncate fw-bolder'>{products.info}</p>
//               <hr className='pt-2 pb-2' />
//               <div className='d-flex align-items-center'>
//                 <h3 className='card-title text-truncate p-2 mb-0'>₹{products.finalPrice}</h3>
//                 <h5 className='card-title text-truncate p-2 mb-0 ms-3' 
//                 style={{ textDecoration: 'line-through' }}>₹{products.originalPrice}</h5>
//               </div>
//               <div className='d-flex justify-content-center mt-2 button_division'>
//                 <button className='btn  px-5 mt-2 '><h4>Add to cart</h4></button>
//               </div>
//             </div>
            
//           </div>
//         </Link>
        
//       </div>
      
//     ))}
//   </div>
 
  
// </div>

// </div>
// <OurAdvantages/>

// <StaticFooter/>
//    </>
//   );
// }

// export default AllBrowser;





import { useEffect, useState } from 'react';
import productsData from '../DataComponent/ProductData'; 
import { Link } from 'react-router-dom';
import { IoStarSharp } from "react-icons/io5";
import OurAdvantages from '../../Footer/TemperoryFooter/OurAdvantages';
import './BrowerallProducts.css';
import StaticFooter from '../../Footer/MainStaticFooter/StaticFooter';

function AllBrowser() {
  const [initialData, setData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [activeSort, setActiveSort] = useState(null); 

  const latest = () => {
    setData(allProducts.slice(0, 6));
    setActiveSort('latest'); 
  };

  const feature = () => {
    setData(allProducts.filter(special => special.tag === "featured-product"));
    setActiveSort('feature'); 
  };

  const toprated = () => {
    setData(allProducts.filter(rateCount => rateCount.rateCount === 5));
    setActiveSort('toprated'); 
  };

  const lowest = () => {
    setData([...allProducts].sort((a, b) => a.finalPrice - b.finalPrice));
    setActiveSort('lowest'); 
  };

  const highest = () => {
    setData([...allProducts].sort((a, b) => b.finalPrice - a.finalPrice));
    setActiveSort('highest'); 
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  useEffect(() => {
    let filteredProducts = productsData;

    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedBrands.includes(product.brand));
    }

    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.category));
    }

    setAllProducts(filteredProducts);
    setData(filteredProducts);

    const sideContent = document.querySelector('.side-content');
    if (sideContent) {
      sideContent.style.setProperty('--webkit-scrollbar-width', '10px');
      sideContent.style.setProperty('--webkit-scrollbar-thumb-background-color', 'darkgrey');
    }
  }, [selectedBrands, selectedCategories]);

  return (
    <>
      <div className='display-items'>
        <div className='side-content'>
          <button className='btn-styling btn btn-danger' onClick={() => { setSelectedBrands([]); setSelectedCategories([]); setActiveSort(null); }}>Clear All</button>
          <h4>Sort By</h4>
          <hr />
          <ul>
            <li onClick={latest} className={activeSort === 'latest' ? 'active' : ''}>Latest</li>
            <li onClick={feature} className={activeSort === 'feature' ? 'active' : ''}>Featured</li>
            <li onClick={toprated} className={activeSort === 'toprated' ? 'active' : ''}>Top Rated</li>
            <li onClick={lowest} className={activeSort === 'lowest' ? 'active' : ''}>Price(Lowest)</li>
            <li onClick={highest} className={activeSort === 'highest' ? 'active' : ''}>Price(Highest)</li>
          </ul>

          <h4>Filter By</h4>
          <hr className='bold' />
          <h5>Brands</h5>
          <input type="checkbox" onChange={() => handleBrandChange('JBL')} 
          checked={selectedBrands.includes('JBL')} />
          <label>JBL</label>
          <br />
          <input type="checkbox" onChange={() => handleBrandChange('boAt')} 
          checked={selectedBrands.includes('boAt')} />
          <label>BoAt</label>
          <br />
          <input type="checkbox" onChange={() => handleBrandChange('Sony')} 
          checked={selectedBrands.includes('Sony')} />
          <label>Sony</label>

          <h5>Category</h5>
          <input type="checkbox" onChange={() => handleCategoryChange('Headphones')} 
          checked={selectedCategories.includes('Headphones')} />
          <label>HeadPhones</label>
          <br />
          <input type="checkbox" onChange={() => handleCategoryChange('Earbuds')} 
          checked={selectedCategories.includes('Earbuds')} />
          <label>EarBuds</label>
          <br />
          <input type="checkbox" onChange={() => handleCategoryChange('Earphones')}
           checked={selectedCategories.includes('Earphones')} />
          <label>Ear Phones</label>
          <br />
          <input type="checkbox" onChange={() => handleCategoryChange('Neckbands')} 
          checked={selectedCategories.includes('Neckbands')} />
          <label>Neckband</label>
        </div>
        <div className='my-4 p-2 m-4'>
          <div className='row'>
            {initialData.map((products) => (
              <div key={products.id} className='col-md-3 mb-4'>
                <Link to={`/${products.id}`} className='text-decoration-none'>
                  <div className='card bg-black text-white border p-2'>
                    <div className='img-card' style={{ height: "220px" }}>
                      <img src={products.images[0]} alt={products.title} 
                        className='card-img-top p-4 img-fluid' 
                        style={{ height: '220px', width: '300px', objectFit: 'contain' }} />
                    </div>
                    <span className='iconTag'>
                      {[...Array(products.rateCount)].map((_, i) => <IoStarSharp key={i} className='coni' />)}
                    </span>
                    <div className='card-body'>
                      <h3 className='card-title text-truncate pe-4'>{products.title}</h3>
                      <p className='card-text text-truncate fw-bolder'>{products.info}</p>
                      <hr className='pt-2 pb-2' />
                      <div className='d-flex align-items-center'>
                        <h3 className='card-title text-truncate p-2 mb-0'>₹{products.finalPrice}</h3>
                        <h5 className='card-title text-truncate p-2 mb-0 ms-3' 
                          style={{ textDecoration: 'line-through' }}>₹{products.originalPrice}</h5>
                      </div>
                      <div className='d-flex justify-content-center mt-2 button_division'>
                        <button className='btn px-5 mt-2'><h4>Add to cart</h4></button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <OurAdvantages />
      <StaticFooter />
    </>
  );
}

export default AllBrowser;

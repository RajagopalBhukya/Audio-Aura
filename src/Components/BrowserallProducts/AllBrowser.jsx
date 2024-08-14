import { useEffect, useState } from 'react';
import productsData from '../DataComponent/ProductData'; 
import {Link} from 'react-router-dom';
import { IoStarSharp } from "react-icons/io5";
import OurAdvantages from '../../Footer/TemperoryFooter/OurAdvantages';
import './BrowerallProducts.css'
import StaticFooter from '../../Footer/MainStaticFooter/StaticFooter';

function AllBrowser(){
  const [initialData, setData] = useState([]);

  useEffect(() => {
    setData(productsData);
  }, []);

  
  return (
   <>
    <div className='display-items'>
      <div className='side-content'>
        <button className='btn-styling'>Clear All</button>
        <h4>Sort By</h4>
        <hr />
        <ul>
          <li>Latest</li>
          <li>Featured</li>
          <li>Top Rated</li>
          <li>Price(Lowest)</li>
          <li>Price(Highest)</li>
        </ul>
        <h4>Filter By</h4>
        <hr />
        <h5>Brands</h5>
        <input type="checkbox"/>
        <label>JBL</label>
        <br />
        <input type="checkbox"/>
        <label>BoAt</label>
        <br />
        <input type="checkbox"/>
        <label>Sony</label>

        <h5>Category</h5>
        <input type="checkbox"/>
        <label>HeadPhones</label>
        <br />
        <input type="checkbox"/>
        <label>EarBuds</label>
        <br />
        <input type="checkbox"/>
        <label>Ear Phones</label>
        <br />
        <input type="checkbox"/>
        <label>Neckband</label>
      </div>
     <div className=' my-4 p-2 m-4'>
      <div className='row'>
        {initialData.map((products) => (
          
          <div key={products.id} className='col-md-3 mb-4'>
            
            <Link to={`/${products.id}`} className='text-decoration-none'>
              <div className='card bg-black text-white border p-2 '>
            <div className='img-card ' style = {{height: "220px"}}>
            <img src={products.images[0]} alt={products.title} 
            className='card-img-top p-4 img-fluid' 
            style={{ height: '220px', width:'300px', objectFit:'contain'}}/>
            </div>
            <span className='iconTag'>
              {
                [...Array(products.rateCount)].map(i=><IoStarSharp key={i} className='coni'/>)
              }
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
                <button className='btn  px-5 mt-2 '><h4>Add to cart</h4></button>
              </div>
            </div>
            
          </div>
        </Link>
        
      </div>
      
    ))}
  </div>
 
  
</div>

</div>
<OurAdvantages/>

<StaticFooter/>
   </>
  );
}

export default AllBrowser;
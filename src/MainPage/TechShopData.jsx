
import { useEffect, useState } from 'react';
import productsData from '../Components/DataComponent/ProductData'; // Adjust path if needed
import {Link} from 'react-router-dom';
import './Main.css'

function TechShopData() {
  const [initialData, setData] = useState([]);

  useEffect(() => {
    // Set the data directly without fetching
    setData(productsData);
  }, []);

  return (
   <>

    <div className=' my-4 p-2'>
  <div className='row'>
    {initialData.map((products) => (
      <div key={products.id} className='col-md-3 mb-4'>
        <Link to={`/${products.id}`} className='text-decoration-none'>
          <div className='card bg-black text-white border p-3 '>
            <div className='img-card'>
            <img src={products.images[0]} alt={products.title} 
            className='card-img-top p-4 img-fluid' style={{ height: '300px', width:'300px', objectFit: 'contain' }} />
            </div>
            <div className='card-body'>
              <h2 className='card-title text-truncate pe-4'>{products.title}</h2>
              <p className='card-text text-truncate fw-bolder'>{products.info}</p>
              <hr className='pt-2 pb-2' /> 
              <div className='d-flex align-items-center'>
                <h2 className='card-title text-truncate p-2 mb-0'>₹{products.finalPrice}</h2>
                <h4 className='card-title text-truncate p-2 mb-0 ms-2 ' style={{ textDecoration: 'line-through' }}>₹{products.originalPrice}</h4>
              </div>
              <div className='d-flex justify-content-center mt-3'>
                <button className='btn btn-danger px-5 mt-2'><h4>Add to cart</h4></button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>

   </>
  );
}

export default TechShopData;



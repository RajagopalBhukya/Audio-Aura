import { useState } from "react";
import productsData from '../DataComponent/ProductData'; 
import TechShopData from "../MainPage/TechShopData";
function TopProducts() {

    const [initialProducts, UpdatedProducts] = useState([]);

    const allProducts = ()=>{
        UpdatedProducts([]);
};

    const CategoryFiltere = (category) =>{
        const filteredProducts = productsData.filter(items => items.category === category);
        UpdatedProducts(filteredProducts);
    }

    return (
      <>
      <div className="text-center">
        <h2>Top-Products</h2>
      </div>

      <div>
        <ul>
            <li onClick={allProducts}>All</li>
            <li onClick={CategoryFiltere('headphones')}>Headphones</li>
            <li  onClick={CategoryFiltere('earbuds')}>Earbuds</li>
            <li onClick={CategoryFiltere('earphones')}>Earphones</li>
            <li onClick={CategoryFiltere('neckbands')}>Neckbands</li>
        </ul>
      </div>

      <div>
        {
            (initialProducts.lenght>0? initialProducts : productsData).slice(0, 11).map(item =>(
                <TechShopData key={item.id} products={item}/>
            )) 
        }
      </div>
      </>
    );
}

export default TopProducts;
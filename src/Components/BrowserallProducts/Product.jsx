import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../DataComponent/ProductData";
import './Product.css';
import { IoStarSharp } from "react-icons/io5";
function Product() {
    const [product, setProduct] = useState(null); // Initialize as null
    const { id } = useParams();

    useEffect(() => {
        const clickedProduct = productsData.find(items => items.id === parseInt(id));
        setProduct(clickedProduct); 
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className="text">Single Product</h2>
            <div className=" col-md-3 mb-4">
                <img src={product.images[0]} alt={product.title} className='card-img-top p-4 img-fluid' 
                          style={{ height: '400px', width: '800px', objectFit: 'contain' }}/>
                          <span className='iconTag'>
                    {[...Array(product.rateCount)].map((i) => <IoStarSharp key={i} className='coni' />)}
                    </span>
                <h2>{product.title}</h2>
                <p>{product.info}</p>
                <div className='d-flex align-items-center'>
                <h2 className='card-title text-truncate p-2 mb-0'>{product.finalPrice}</h2>
                <h5 className='card-title text-truncate p-2 mb-0 ms-2' 
                            style={{ textDecoration: 'line-through' }}>₹{product.originalPrice}</h5>
                            </div>
                <button className="btn btn-danger p-2 ">Add to cart</button>
            </div>
        </div>
    );
}

export default Product;

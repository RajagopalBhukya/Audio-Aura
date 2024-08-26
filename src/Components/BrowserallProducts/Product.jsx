import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../DataComponent/ProductData";
import './Product.css';

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
            <img src={product.images[0]} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <h5>{product.brand}</h5>
            <h6>{product.rateCount}</h6>
            <p>{product.info}</p>
            <h2>{product.finalPrice}</h2>
        </div>
    );
}

export default Product;

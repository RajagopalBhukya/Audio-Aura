import { BsCartXFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Cart.css';

function Cart() {
    return (
        <>
        <div className="cart-container">
            <div className="cart-icon-div">
                <BsCartXFill className="cart-icon" />
            </div>
            <h1 className="text-center">Your Cart is Empty</h1>
            <Link to = "all-products"><button className="button-tag">Satrt shopping</button></Link>
        </div>
        </>
    );
}

export default Cart;

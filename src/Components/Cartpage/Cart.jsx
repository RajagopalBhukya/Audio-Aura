import { BsCartXFill } from "react-icons/bs";
import './Cart.css';

function Cart() {
    return (
        <>
        <div className="cart-container">
            <div className="cart-icon-div">
                <BsCartXFill className="cart-icon" />
            </div>
            <h1 className="text-center">Your Cart is Empty</h1>
        </div>
        </>
    );
}

export default Cart;

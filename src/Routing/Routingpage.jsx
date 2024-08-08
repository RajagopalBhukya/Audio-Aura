import { Route, Routes } from "react-router-dom";
import TechShopData from "../Components/MainPage/TechShopData";
import Cart from "../Components/Cartpage/Cart";


function Routingpage() {
    return (
        <>
        <Routes>
            <Route path="/" element = {<TechShopData/>}/>
            <Route path="cart" element={<Cart/>}/>
        </Routes>
        </>
    );
}

export default Routingpage;
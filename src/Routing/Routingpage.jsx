import { Route, Routes } from "react-router-dom";
import TechShopData from "../Components/MainPage/TechShopData";
import Cart from "../Components/Cartpage/Cart";
import AllBrowser from "../Components/BrowserallProducts/AllBrowser";


function Routingpage() {
    return (
        <>
        <Routes>
            <Route path="/" element = {<TechShopData/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="all-products" element = {<AllBrowser/>}/>
            {/* <Route path="all-products" element = {<AllBrowser/>}/> */}
        </Routes>
        </>
    );
}

export default Routingpage;
import { Route, Routes } from "react-router-dom";
import TechShopData from "../Components/MainPage/TechShopData";
import Cart from "../Components/Cartpage/Cart";
// import BrowseProducts from "../Components/BrowseAll/BrowseProducts";


function Routingpage() {
    return (
        <>
        <Routes>
            <Route path="/" element = {<TechShopData/>}/>
            <Route path="cart" element={<Cart/>}/>
            {/* <Route path="all-products"  element={<BrowseProducts/>}/> */}
        </Routes>
        </>
    );
}

export default Routingpage;
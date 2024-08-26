
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function BrowseProducts() {
    return (
        <>
        <div className="card bg-black text-white  align-items-center justify-content-center" >
            <Link to = "all-products" className='text-decoration-none'>
            <div className="text-white">
            <h3>Browse All <br />
            Products<FaArrowRightLong />
            </h3>
            </div>
            </Link>
        </div>
        </>
    );
}

export default BrowseProducts;
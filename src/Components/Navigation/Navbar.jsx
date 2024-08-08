import {Link} from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
function Navbar() {
    return (
        <>

<nav className="navbar navbar-expand-lg bg-black sticky-top">
        <div className="container-fluid">
          <Link  to = "/"  class="navbar-brand">
            <h2 className='text-white '>Tech-Shop</h2></Link>

            
          <ul className='d-flex list-unstyled flex-row gap-5'>
            <li ><BsSearch size={20}/></li>
            <li className='nav'><Link  className='text-decoration-none text-white' to='cart'><FaCartShopping size={20}/></Link><span>0</span></li>
            <li><FaUser size={20}/></li>
          </ul>

          </div>
    
      </nav>
            
     </>
    );
}

export default Navbar;
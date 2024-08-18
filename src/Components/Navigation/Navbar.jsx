import {Link} from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import './Navbar.css'
import Login from './Signup/Login';
function Navbar() {



    return (
        <>

<nav className="navbar navbar-expand-lg bg-black sticky-top">
        <div className="container-fluid">
          <Link  to = "/"  class="navbar-brand">
            <h2 className='text-white '>Tech-Shop</h2></Link>

            
          <ul className='d-flex list-unstyled flex-row gap-5'>
            <li className='lens'><BsSearch size={20}/>
            <button> Search</button>
            </li>


            <li className='nav lens'><Link className='text-decoration-none text-white' to='/cart'>
            <FaCartShopping size={20}/></Link>
            <button> cart</button>
            </li>
            <li className='lens' ><FaUser size={20}/> <span><Login/></span></li>
          </ul>

          </div>
    
      </nav>
            
     </>
    );
}

export default Navbar;
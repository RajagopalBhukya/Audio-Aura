
import './StaticFoter.css'
import {  FaFacebookSquare,  FaLinkedin  } from "react-icons/fa";
import { FaSquareInstagram , FaSquareTwitter} from "react-icons/fa6";



function StaticFooter() {
    return (
        <>
            <footer className="footerwork">
                <div className="footerfoot">
                    <div className="emailfoot">
                        <div>
                            <h2>Tech-Shop</h2>
                            <p>Subscribe to our Email alerts to receive <br /> early discount offers, and new products <br /> info.</p>
                        </div>
                        <div>
                            <input type="email" placeholder="Email Address*" />
                        </div>
                        <div>
                            <button>Subscribe</button>
                        </div>
                    </div>
                    
                    <div>
                        <h2>HELP</h2>
                        <p>FAQs</p>
                        <p>Track Order</p>
                        <p>Cancel Order</p>
                        <p>Return Order</p>
                        <p>Warranty Info</p>
                    </div>
                    <div>
                        <h2>Policies</h2>
                        <p>Return Policy</p>
                        <p>Security</p>
                        <p>Sitemap</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div>
                        <h2>Company</h2>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Service Center</p>
                        <p>Careers</p>
                        <p>Affiliates</p>
                    </div>
                </div>
                <hr style={{color: "rgb(204, 189, 189)"}} />
                <div className="font-awesome">
                    <div>
                        <p className='pt-4'>2023 | All Rights Reserved. Built by | RAJAGOPAL BHUKYA</p>
                    </div>
                    <div className="brands ms-4">
                       
                        < FaFacebookSquare className='icons'/>
                        <FaSquareInstagram  className='icons'/>
                        <FaSquareTwitter  className='icons'/>
                        <FaLinkedin  className='icons'/>
                        
                    </div>
                </div>
            </footer>
        </>
    );
}

export default StaticFooter;

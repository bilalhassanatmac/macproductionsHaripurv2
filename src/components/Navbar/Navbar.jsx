import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {  
  return (
    <div className="navbar" >
        <div className="navbar-logo">
            <h3>Ma<span>c</span></h3>
        </div>
        <div className="navbar-info-section-mid">
                <div>
                    <Link to="/" >Home</Link>
                </div>
                <div>
                    <Link to="/about-us" >About us</Link>
                </div>
                <div>
                    <Link to="/portfolio" >Portfolio</Link>
                </div>
                <div>
                    <Link to="/services" >Services</Link>
                </div>
                <div>
                    <Link to="/gallery">Gallery</Link>
                </div>
                <div>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
        </div>
       
        <div className="navbar-info-section">
            <a className="button button-small button-blue" href="https://api.whatsapp.com/send?phone=+923338070666&text=Mac%20Productions%20and%20Graphics%20" target="_blank" >
            <p className="text" >Let's Talk</p>              
            </a>  
        </div>
        </div>
  )
}

export default Navbar;
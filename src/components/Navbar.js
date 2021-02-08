import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdBusiness } from "react-icons/md";
import { FaBars, FaTimes} from "react-icons/fa";
import Button from "./Button";
import "./Navbar.css";
function Navbar(){
  const  [click , setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener("resize", showButton);

  return(
    <div>
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <MdBusiness className="Navbar-icon" /> Sure-Tuch Creations
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={ click ? "fas fa-times" : "fas fa-bars" }></i>
            </div>
            <ul className={ click ? "nav-menu active" : "nav-menu" }>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </div>
  )
}

export default Navbar;
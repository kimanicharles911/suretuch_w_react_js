import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdBusiness } from "react-icons/md";
import { FaBars, FaTimes} from "react-icons/fa";
import Button from "./Button.jsx";
import "./Navbar.css";
import { animateScroll as scroll } from "react-scroll";

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
                <Link activeClass="active" to="/" className="nav-links" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" to="products" className="nav-links" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" to="services" className="nav-links" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" to="about" className="nav-links" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" to="contact" className="nav-links" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>
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
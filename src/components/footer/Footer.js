import React from "react";
import logo from "../../Assets/Untitled-12.png"
import "./FooterStyles.css";
import { useLocation } from 'react-router-dom';

const Footer = () => {
	const location = useLocation();

  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span><img className="logo-Footer" src={logo}></img></span>
        </h3>

        <p className="footer-links">
          <a href="/"  className= { location.pathname === "/" ? "f-active" : ""}>
            Home
          </a>

		  <a href="/shop" className={location.pathname === "/shop" ? "f-active" : ""}>
            Shop
          </a>   <a href="/about" className={location.pathname === "/about" ? "f-active" : ""}>
            About
          </a>   <a href="/contactus" className={location.pathname === "/contactus" ? "f-active" : ""}>
          Contact us
          </a>
        </p>

        <p className="footer-company-name"> Mhmd Rizk © 2023</p>
      </div>

      <div className="footer-center">
          <div className="willhide">
            <i className="fa fa-map-marker"></i>
            <p>
            <span>Zkak el blat</span>
            </p>
          </div>

          <div className="willhide">
            <i className="fa fa-phone"></i>
            <p>+961 81 000 000</p>
          </div>

          <div className="willhide">
            <i className="fa fa-envelope"></i>
            <p>
            <a href="Amore@hotmail.com">Amore@hotmail.com</a>
            </p>
          </div>
        <div className="inf-links">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Zkak el blat</span>
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+961 81 000 000</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="Amore@hotmail.com">Amore@hotmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">
        <a href="facebook.com">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/amore.productslb/">
            <i className="fa fa-instagram"></i>
          </a>
          {/* <a href="#">
            <i className="fa fa-twitter"></i>
          </a> */}
          {/* <a href="#">
            <i className="fa fa-linkedin"></i>
          </a> */}
          {/* <a href="#">
            <i className="fa fa-github"></i>
          </a> */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
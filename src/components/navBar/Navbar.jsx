import "./navbar.css";
import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../Assets/Untitled-12.png";
import cartLogo from "../../Assets/cartIcon.png";
import cartLogoWhite from "../../Assets/cartIconWhite.png";
import { Link } from "react-router-dom";
import CartContext from "../Cart/CartContext";
import  secureLocalStorage  from  "react-secure-storage";

function Navbar({ onButtonClick }) {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState("nav-links");
  const [icon, setIcon] = useState("bx bx-menu");
  const location = useLocation();
  const token = secureLocalStorage.getItem("token");
  const Role = secureLocalStorage.getItem("Role");
  const name = secureLocalStorage.getItem("name");
  const UserId = secureLocalStorage.getItem("id");
  const loggedIn = secureLocalStorage.getItem("loggedIn");
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    const data = secureLocalStorage.getItem("cart");
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  useEffect(() => {
    setShow(false);
    setMenu("nav-links");
    setIcon("bx bx-menu");
  }, [location]);

  const toggle = () => {
    if (!show) {
      // console.log("opened");
      setMenu("nav-links open");
      setIcon("bx bx-x");
    } else {
      // console.log("closed");
      setMenu("nav-links");
      setIcon("bx bx-menu");
    }
    setShow(!show);
  };


  const logOut = () => {
    window.location.href = "/";

    secureLocalStorage.clear();
  };

  return (
    <header className={`hello ${active ? "active" : "sticky-header"}`}>
      <a href="/" className="logo">
        <span>
          {" "}
          <img src={logo} alt="logo" className="header-logo" />
        </span>
      </a>
      <ul className={menu}>
        <li className="li">
          {" "}
          <Link
            className={`user${active ? "-b" : ""}${
              location.pathname === "/" ? " lol" : ""
            }`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="li">
          <Link
            className={`user${active ? "-b" : ""}${
              location.pathname === "/shop" ? " lol" : ""
            }`}
            to="/shop"
          >
            Shop
          </Link>
        </li>
        <li className="li">
          <Link
            className={`user${active ? "-b" : ""}${
              location.pathname === "/about" ? " lol" : ""
            }`}
            to="/about"
          >
            About us
          </Link>
        </li>
        <li className="li">
          <Link
            className={`user${active ? "-b" : ""}${
              location.pathname === "/contactus" ? " lol" : ""
            }`}
            to="/contactus"
          >
            Contact us
          </Link>
          </li>
       <li className="li hidden">
          <Link
            className={`user${active ? "-b" : ""}${
              location.pathname === "/cart" ? " lol" : ""
            }`}
            to="/cart"
          >
         Cart
          </Link>
        </li>
       {loggedIn?<li className="li hidden">
          <p
          onClick={logOut}
          >
            Logout
          </p>
        </li>:null}
      </ul>
      <div className="header-icons">
        <div className="image_logo">
          <Link className={active ? "user-b" : "user"} to="/cart">
            <img
              src={active ? cartLogoWhite : cartLogo}
              alt="edit"
              className="edit"
            />        <span>{ cart.products.length}</span>

          </Link>
        </div>
        {loggedIn ? (
          <h2> <Link
          className={`user${active ? "-b" : ""}${
            location.pathname === "/user" ? " lol" : ""
          }`}
          to="/user"
        >Hello, {name}
        </Link>
        <p onClick={logOut} className={active ? "user-b" : "user"}>
            <i className="ri-user-fill"></i>Logout
          </p>
        </h2>
        ) : (
          <a href="/login">
            <i className="ri-user-fill"></i>Sign-in
          </a>
        )}
        <div className={icon} id="menu-icon" onClick={toggle}></div>
      </div>
    </header>
  );
}

export default Navbar;

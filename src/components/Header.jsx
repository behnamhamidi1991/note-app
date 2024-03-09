import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { LuSunMedium } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <ul className="header-ul">
        <li className="header-ul-li">
          <Link to="/" className="header-ul-li-link">
            Homepage
          </Link>
        </li>
        <li className="header-ul-li">
          <Link to="/" className="header-ul-li-link">
            Blog
          </Link>
        </li>
        <li className="header-ul-li">
          <Link to="/" className="header-ul-li-link">
            About
          </Link>
        </li>
        <li className="header-ul-li">
          <Link to="/" className="header-ul-li-link">
            Contact
          </Link>
        </li>
      </ul>

      <ul className="box-icon">
        <div className="sun-box">
          <LuSunMedium className="icon" />
        </div>
        <div className="cart-box">
          <FaShoppingCart className="icon cart-icon" />
          <span className="cart-num">1</span>
        </div>
      </ul>
    </header>
  );
};

export default Header;

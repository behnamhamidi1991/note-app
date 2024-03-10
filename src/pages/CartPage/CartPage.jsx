import React from "react";
import "./cart.css";
import { RxCross2 } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";

const CartPage = () => {
  return (
    <div className="cart-page">
      <div className="cart-page-header">
        <h2>Shopping Cart</h2>
        <FaShoppingCart className="cart-page-header-icon" />
      </div>

      <div className="cart-page-container">
        <div className="cart-box">
          <button className="delete-btn">
            <RxCross2 />
          </button>
          <h2>This is a sample title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>Price: $ 89</p>
          <div className="cart-btn-container">
            <button className="btn increment">+</button>
            <span className="quantity">1</span>
            <button className="btn  decrement">-</button>
          </div>
        </div>
        <div className="cart-box">
          <button className="delete-btn">
            <RxCross2 />
          </button>
          <h2>This is a sample title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>Price: $ 89</p>
          <div className="cart-btn-container">
            <button className="btn increment">+</button>
            <span className="quantity">1</span>
            <button className="btn  decrement">-</button>
          </div>
        </div>
        <div className="cart-box">
          <button className="delete-btn">
            <RxCross2 />
          </button>
          <h2>This is a sample title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>Price: $ 89</p>
          <div className="cart-btn-container">
            <button className="btn increment">+</button>
            <span className="quantity">1</span>
            <button className="btn  decrement">-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

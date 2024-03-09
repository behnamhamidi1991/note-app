import React from "react";
import { production } from "../data";
import "./productions.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Productions = () => {
  return (
    <div className="productions">
      <div className="productions-title">
        <h2>Productions</h2>
        <p>Take a look at our top productions</p>
      </div>
      <div className="productions-container">
        {production.map((item) => (
          <div key={item.key} className="production-box">
            <div className="production-image-container">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="prodution-content">
              <h3>{item.name}</h3>
              <p>
                {item.description.substring(1, 299)} <br />
                <Link to="/">Read More</Link>
              </p>
              <p>Price: $ {item.price}</p>
              <button className="addbtn">
                <FaShoppingCart />
                Add To cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productions;

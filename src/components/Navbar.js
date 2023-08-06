import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);
  return (
    <nav className="navbar">
      <h3 className="navbar-title">Kurs Uygulaması</h3>
      <div className="navbar-cart">
        <div className="navbar-cart-count">
          <p>{quantity}</p>
        </div>
        <BsFillBasketFill />
      </div>
    </nav>
  );
};

export default Navbar;

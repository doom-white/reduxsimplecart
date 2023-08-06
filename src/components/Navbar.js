import React from "react";
import { BsFillBasketFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h3>Kurs Uygulaması</h3>
        <div>
          <p>0</p>
        </div>
        <BsFillBasketFill />
      </div>
    </nav>
  );
};

export default Navbar;

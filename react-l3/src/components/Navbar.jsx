import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/about" style={{ marginInlineStart: "20px" }}>
        About
      </Link>
      <Link to="/products" style={{ marginInlineStart: "20px" }}>
        Products
      </Link>
    </div>
  );
};

export default Navbar;

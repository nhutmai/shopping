import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">Vựa Nông Sản</a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="Search products" />
        <button>Search</button>
      </div>
      <div className="login">
        <NavLink to="/login">đăng nhập</NavLink>
      </div>
      <div className="cart">
        <NavLink to="/cart">giỏ hàng (0)</NavLink>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="Search products" />
        <button>Search</button>
      </div>
      <div className="cart">
        <a href="/cart">giỏ hàng (0)</a>
      </div>
    </div>
  );
}

export default Header;

import {
  HomeOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          {" "}
          <HomeOutlined style={{ fontSize: 50 }} />
          Vựa Nông Sản
        </a>
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
      <div className="header_account">
        <LoginOutlined />
        <NavLink to="/account">tài khoản</NavLink>
      </div>
      <div className="cart">
        <ShoppingCartOutlined style={{ color: "#ff6600", fontSize: 20 }} />
        <NavLink to="/cart">giỏ hàng (0)</NavLink>
      </div>
    </div>
  );
}

export default Header;

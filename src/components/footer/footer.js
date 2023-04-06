import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <div className="logo">
          <a href="/">Vựa Nông Sản</a>
        </div>
        <div className="links">
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
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="social">
          <a href="https://facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

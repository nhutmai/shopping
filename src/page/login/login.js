import React, { useState } from "react";
import "./style.css";
import "./validate.js";

function Login() {
  const handleonblurrequire = (e) => {
    var inputElement = e.target;
    var warning = e.target.parentElement.querySelector("span");
    if (inputElement.value === "") {
      console.log(warning.textContent);
      warning.textContent = "vui lòng nhập trường này ";
      inputElement.classList.add("error");
    }
  };
  const handleonblurmin = (e) => {
    var inputElement = e.target;
    var warning = e.target.parentElement.querySelector("span");
    if (inputElement.value.length < 6) {
      warning.textContent = "vui lòng nhập nhiều hơn 6 ký tự ";
      inputElement.classList.add("error");
    }
  };
  const handleonInput = (e) => {
    var warning = e.target.parentElement.querySelector("span");
    warning.textContent = "";
    e.target.classList.remove("error");
  };
  return (
    <div id="main">
      <form action="#link" method="post" id="form1">
        <div classNames="form-group">
          <input
            className="input"
            name="name"
            rule="require"
            type="text"
            placeholder="nhập email hoặc số điện thoại"
            id="name"
            onBlur={handleonblurrequire}
            onInput={handleonInput}
          />
          <span className="warning" id="nameerr"></span>
        </div>
        <div className="form-group">
          <input
            className="input"
            name="pass"
            rule="require|min:6"
            type="password"
            placeholder="mật khẩu"
            id="pass"
            onBlur={handleonblurmin}
            onInput={handleonInput}
          />
          <span className="warning" id="passerr"></span>
        </div>
        <button type="submit" className="logina">
          đăng nhập
        </button>
        <a href="">quên mật khẩu</a>
        <hr classNameh="90%" text-align="center" />
        <button type="menu" className="loginb">
          tạo tài khoản mới
        </button>
      </form>
    </div>
  );
}
export default Login;

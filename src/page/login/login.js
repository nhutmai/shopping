import React from "react";
import "./style.css";
import "./validate.js";

function Login() {
  return (
    <div id="main">
      <div className="wrapper">
        <div id="right">
          <form action="#link" method="post" id="form1">
            <div classNames="form-group">
              <input
                className="input"
                name="name"
                rule="require"
                type="text"
                placeholder="nhập email hoặc số điện thoại"
                id="name"
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
      </div>
    </div>
  );
}
export default Login;

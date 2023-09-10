import React, { useState } from "react";
import getproduct from "../../API/post";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/Slice/Authslice";

function Login() {
  // khai báo lên authenticated
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handleinput
  const handleonblurrequire = (e) => {
    var inputElement = e.target;
    var warning = e.target.parentElement.querySelector("span");
    if (inputElement.value === "") {
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

  // lấy dữ liệu đăng nhập
  const [formaccount, setAccount] = useState({ username: "", password: "" });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...formaccount, [name]: value });
  };
  const [useraccountcheck, setuseraccountcheck] = useState([]);
  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      const getlogin = async () => {
        const user = await getproduct(formaccount);
        setuseraccountcheck(user);
      };
      getlogin();
      if (useraccountcheck.token) {
        localStorage.setItem("user", JSON.stringify(useraccountcheck));
        dispatch(login(useraccountcheck));
        navigate("/account");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="main">
      <form action="#link" method="post" id="form1" onSubmit={handlesubmit}>
        <div className="form-group">
          <input
            className="input"
            name="username"
            rule="require"
            type="text"
            placeholder="nhập email hoặc số điện thoại"
            id="name"
            onBlur={handleonblurrequire}
            onInput={handleonInput}
            onChange={handlechange}
          />
          <span className="warning" id="nameerr"></span>
        </div>
        <div className="form-group">
          <input
            className="input"
            name="password"
            rule="require|min:2"
            type="password"
            placeholder="mật khẩu"
            id="pass"
            onBlur={handleonblurmin}
            onInput={handleonInput}
            onChange={handlechange}
          />
          <span className="warning" id="passerr"></span>
        </div>
        <button type="submit" className="logina">
          đăng nhập
        </button>
        <a className="quenmk" href="#stop">
          quên mật khẩu
        </a>
        <hr className="90%" />
        <button type="button" className="loginb">
          tạo tài khoản mới
        </button>
      </form>
    </div>
  );
}
export default Login;

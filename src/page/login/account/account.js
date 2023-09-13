import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import checkLogin from "../../../API/checklogin";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/Slice/Authslice";
import "./account.css";

function Account() {
  // khai báo lên authenticated
  const isLogin = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const userData = await checkLogin(storedUser);
          setUser(userData);
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <>
      {isLogin ? (
        <div className="account">
          <h3>Thông tin tài khoản</h3>
          <div>Tên tài khoản: {user.name}</div>
          <button
            className="logout"
            onClick={() => {
              localStorage.removeItem("user");
              dispatch(logout());
              navigate("/login");
            }}
          >
            Đăng xuất
          </button>
        </div>
      ) : (
        navigate("/login")
      )}
    </>
  );
}

export default Account;

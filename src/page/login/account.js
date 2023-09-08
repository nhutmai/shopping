import React, { useEffect, useState } from "react";
import checkLogin from "../../API/checklogin";

function Account() {
  const [userID, setUserID] = useState("");
  useEffect(() => {
    const check = async () => {
      setUserID(await checkLogin(localStorage.getItem("token")));
    };
    check();
    console.log(userID);
  }, []);
  return <>{userID ? { userID } : <div>not things are here</div>}</>;
}
export default Account;

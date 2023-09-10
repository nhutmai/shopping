import axios from "axios";
import { linkCallApi } from "../resources/link.js";
var url = linkCallApi + "/account";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const checkLogin = (accounttoken) => {
  return axios
    .post(url, accounttoken, config)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
};

export default checkLogin;

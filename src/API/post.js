import axios from "axios";
import { linkCallApi } from "../resources/link.js";
var url = linkCallApi + "/login";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const getproduct = (account) => {
  return axios
    .post(url, account, config)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
};

export default getproduct;

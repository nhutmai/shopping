import axios from "axios";
import { linkCallApi } from "../resources/link.js";
var url = linkCallApi + "/product";

const getproduct = () => {
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
};

export default getproduct;

import axios from "axios";

var url = "http://localhost:4000/product";

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

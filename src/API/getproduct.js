import axios from "axios";

const getproduct = () => {
  return axios
    .get("https://64305f60b289b1dec4c720aa.mockapi.io/getproduct")
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export default getproduct;

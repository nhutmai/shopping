import axios from "axios";
var url = "https://agriculturalshopserver.vercel.app/login";
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

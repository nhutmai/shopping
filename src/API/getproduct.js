import axios from "axios";

var url = "https://agriculturalshopserver.vercel.app/product";

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

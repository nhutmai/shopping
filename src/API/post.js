import axios from "axios";

var url = "http://localhost:4000/account";
// var account = { name: "student", pass: "1" };

const getproduct = (account) => {
  return axios
    .post(url, account)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
};

export default getproduct;

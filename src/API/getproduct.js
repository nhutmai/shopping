import axiosClient from "./axiosClient";

const getproduct = {
  getAll() {
    const url = "/getproduct";
    return axiosClient.get(url);
  },
};

export default getproduct;

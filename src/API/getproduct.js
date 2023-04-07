import React, { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  axios
    .get("https://64305f60b289b1dec4c720aa.mockapi.io/getproduct")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export default Product;

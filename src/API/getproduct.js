import { useState, useEffect } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/apisever/getApi-product.php")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      // Giải phóng tài nguyên khi component bị xóa khỏi giao diện
    };
  }, []);

  return products;
}

export default Products;

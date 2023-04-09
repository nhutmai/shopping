import React, { useEffect, useState } from "react";
import getproduct from "../../API/getproduct";
import "./style.css";

function ProductList() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getproduct.getAll();
      setProduct(product);
    };
    fetchProduct();
  }, []);
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              giá: {product.price}vnd/{product.unit}
            </p>
            <button>Thêm vào giỏ hàng</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ProductList from "./components/productlist/productlist";
import Product from "./API/getproduct";
import { useEffect, useState } from "react";
import getproduct from "./API/getproduct";
import { Route, Routes } from "react-router-dom";
import about from "./components/about/about";
import product from "./components/products/product";
import cart from "./components/cart/cart";
import Login from "./page/login/login";

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getproduct.getAll();
      console.log(product);
    };
    fetchProduct();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={ProductList} />
        <Route path="/products" Component={product} />
        <Route path="/cart" Component={cart} />
        <Route path="/about" Component={about} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

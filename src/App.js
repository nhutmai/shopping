import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ProductList from "./components/productlist/productlist";
import Product from "./API/getproduct";
import { useEffect, useState } from "react";

function App() {
  const sp = [
    {
      name: "ca chua",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvi.wikipedia.org%2Fwiki%2FC%25C3%25A0_chua&psig=AOvVaw30pSgEu9TFuXdX6rZUjlac&ust=1680978548423000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPi8rZuzmP4CFQAAAAAdAAAAABAE",
      description: "description 1",
      price: 20000,
      unit: "kg",
      id: "1",
    },
    {
      name: "dua",
      image:
        "https://foody24h.vn/uploads/collections/dua-xiem-ben-tre-4022-2021-11-075.jpg",
      description: "description 2",
      price: 1500,
      unit: "qua",
      id: "2",
    },
    {
      name: "name 3",
      image: "image 3",
      description: "description 3",
      price: 72,
      unit: "unit 3",
      id: "3",
    },
    {
      name: "name 4",
      image: "image 4",
      description: "description 4",
      price: 79,
      unit: "unit 4",
      id: "4",
    },
    {
      name: "name 5",
      image: "image 5",
      description: "description 5",
      price: 8,
      unit: "unit 5",
      id: "5",
    },
    {
      name: "name 6",
      image: "image 6",
      description: "description 6",
      price: 42,
      unit: "unit 6",
      id: "6",
    },
  ];
  return (
    <div className="App">
      <Header />
      <ProductList products={sp} />

      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ProductList from "./components/productlist/productlist";
import Products from "./API/getproduct";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ProductList products={Products} /> */}
      <Products />
      <Footer />
    </div>
  );
}

export default App;

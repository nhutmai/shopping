import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ProductList from "./components/productlist/productlist";
import { Route, Routes } from "react-router-dom";
import about from "./components/about/about";
import cart from "./components/cart/cart";
import Login from "./page/login/login";
import Homepage from "./components/home/home";
import Account from "./page/login/account";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/account" Component={Account} />
        <Route path="/login" Component={Login} />
        <Route path="/" Component={Homepage} />
        <Route path="/products" Component={ProductList} />
        <Route path="/cart" Component={cart} />
        <Route path="/about" Component={about} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

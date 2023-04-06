import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ProductList from "./components/productlist/productlist";

function App() {
  const products = [
    {
      id: 1,
      name: "cà chua",
      image:
        "data:image/jpeg;base64,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",
      description: "sản phẩm việt nam",
      price: 15000,
      unit: "kg",
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://via.placeholder.com/150",
      description: "This is product 2",
      price: 20000,
      unit: "quả",
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://via.placeholder.com/150",
      description: "This is product 3",
      price: 30000,
      unit: "bó",
    },
    {
      id: 4,
      name: "Product 4",
      image: "https://via.placeholder.com/150",
      description: "This is product 3",
      price: 30000,
      unit: "bó",
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://via.placeholder.com/150",
      description: "This is product 3",
      price: 30000,
      unit: "bó",
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://via.placeholder.com/150",
      description: "This is product 3",
      price: 30000,
      unit: "bó",
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://via.placeholder.com/150",
      description: "This is product 3",
      price: 30000,
      unit: "bó",
    },
  ];
  return (
    <div className="App">
      <Header />
      <ProductList products={products} />
      <Footer />
    </div>
  );
}

export default App;

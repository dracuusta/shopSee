import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./routes/navbar";
import { Shop } from "./pages/shop/shop";
import Product from "./pages/product/product";
import { Cart } from "./pages/cart/cart";
import { Authentication } from "./routes/authentication/authentication";
import { Banner } from "./components/banner";
import Welcome from "./pages/welcome/welcome";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Banner />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Authentication" element={<Authentication />} />
            <Route path="/product/:product" element={<Product />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

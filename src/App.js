import Home from "./Pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import "aos/dist/aos.css";
import Aos from "aos";
//Used Styled Component : npm install styled-components
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;

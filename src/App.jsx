import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import AppNavbar from "./components/AppNavbar";
import ProductDetails from "./components/ProductDetails";


function App() {
  return (
    <>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

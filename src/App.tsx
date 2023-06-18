import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import Footer from "./components/Footer/Footer";
import ShoppingCardPage from "Pages/ShoppingCardPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/women" />} />
        <Route path="/:rootRoute" element={<HomePage />} />
        <Route path="/:root/products" element={<ProductsPage />} />
        <Route path="/:root/products/:productId" element={<ProductPage />} />
        <Route path="/shopping-card" element={<ShoppingCardPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

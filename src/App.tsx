import { Routes, Route, Navigate } from "react-router-dom";

// import useAppStore from "./store/app";

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import Footer from "./components/Footer/Footer";

function App() {
  // const products = useAppStore((state) => state.products);

  // const productTypes = Array.from(
  //   new Set(
  //     products.map((product) => product.productType).flatMap((type) => type)
  //   )
  // );

  // console.log(productTypes);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/women" />} />
        <Route path="/:rootRoute" element={<HomePage />} />
        <Route path="/:root/products" element={<ProductsPage />} />
        <Route path="/:root/products/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

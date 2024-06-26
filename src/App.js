import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.css";
import Home from "../src/pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import DishDetails from "./pages/DishDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import { useState } from "react";
import { CartProvider } from "./context/CartContext.jsx";
function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (dish) => {
    setCart([...cart, dish]);
  };
  return (
    <>
      <CartProvider value={{ cart, addToCart }}>
        <Routes>
          <Route element={<Layout cart={cart} />}>
            <Route index element={<Home />} />
            <Route path="a-propos" element={<About />} />
            <Route
              path="plat/:slug"
              element={<DishDetails addToCart={addToCart} />}
            />
            <Route path="panier" element={<Cart cart={cart} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;

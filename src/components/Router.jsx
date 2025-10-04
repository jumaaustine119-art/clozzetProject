import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import { useState, useEffect } from "react";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login-page";
import Sign from "../pages/Sign-Up";
import Admin from "../pages/Admin";
import About from "../pages/About-Us";
import Single from "./Single-pg";

function Router() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout cart={cart}>
              <Home cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout cart={cart}>
              <Shop cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout cart={cart}>
              <Cart cart={cart} />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout cart={cart}>
              <NotFound />
            </Layout>
          }
        />
        <Route
          path="/logIn"
          element={
            <Layout cart={cart}>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Layout cart={cart}>
              <Sign />
            </Layout>
          }
        />
        <Route
          path="/admin"
          element={
            <Layout cart={cart}>
              <Admin />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout cart={cart}>
              <About />
            </Layout>
          }
        />
        <Route
          path="/single"
          element={
            <Layout cart={cart}>
              <Single />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

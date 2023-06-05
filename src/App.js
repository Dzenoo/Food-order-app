import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Hero from "./screens/Hero";
import Checkout from "./screens/Checkout";
import { useSelector } from "react-redux";

function App() {
  const cartItems = useSelector((state) => state.cart.items);
  const submitOrderHandler = async (enteredData) => {
    await fetch(
      "https://foodor-1810c-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          CartItems: cartItems,
          OrderData: enteredData,
        }),
      }
    );
    alert("Order sent");
  };
  

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route
          path="/checkout"
          element={<Checkout onConfirm={submitOrderHandler} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;

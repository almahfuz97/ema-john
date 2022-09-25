import React, { useEffect, useState } from "react";
import OrderSummary from "../OrderSummary/OrderSummary";
import ShopItem from "../ShopItem/ShopItem";
import "./Shop.css";
export default function Shop() {
  const [products, setProducts] = useState([]);
  // const [clickedId, setClickedId] = useState(0);
  // const [count, setCount] = useState(0);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCartBtnHandler = (product) => {
    // setClickedId(id);
    // setCount(count + 1);
    setCart((prevCart) => [...prevCart, product]);
  };
  return (
    <div className="shop-div">
      <ShopItem onClick={addToCartBtnHandler} products={products} />
      <OrderSummary cart={cart} />
    </div>
  );
}

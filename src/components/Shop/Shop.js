import React, { useEffect, useState } from "react";
import OrderSummary from "../OrderSummary/OrderSummary";
import ShopItem from "../ShopItem/ShopItem";
import "./Shop.css";
export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-div">
      <ShopItem products={products} />
      <OrderSummary products={products} />
    </div>
  );
}

import React from "react";
import CardItem from "../Card/CardItem";
import "./ShopItem.css";

export default function ShopItem(props) {
  return (
    <div className="shop-item-container">
      {props.products.map((product) => (
        <CardItem onClick={props.onClick} key={product.id} products={product} />
      ))}
    </div>
  );
}

import React from "react";
import "./CardItem.css";

export default function CardItem(props) {
  const product = props.products;
  return (
    // <div className="card-container">
    //   <div>
    //     <img
    //       src={product.img ? product.img : "logo192.png"}
    //       alt="product picture"
    //     />
    //   </div>
    //   <div className="card-upper">
    //     <h4>{product.name}</h4>
    //     <p>Price: $ {product.price}</p>
    //   </div>
    //   <div className="card-lower">
    //     <p>Manufacturer: {product.seller}</p>
    //     <p>Rating: {product.ratings} star</p>
    //   </div>
    //   <button onClick={() => props.onClick(product)} className="add-to-cart">
    //     <strong> Add to Cart</strong>
    //   </button>
    // </div>

    <div className="card-container">
      <img
        src={product.img ? product.img : "logo192.png"}
        alt="product picture"
      />
      <div className="card-info">
        <p>
          {" "}
          <strong> {product.name}</strong>
        </p>
        <p>Price: $ {product.price}</p>
        <p>Manufacturer: {product.seller}</p>
        <p>Rating: {product.ratings} star</p>
      </div>
      <button onClick={() => props.onClick(product)} className="add-to-cart">
        <strong> Add to Cart</strong>
      </button>
    </div>
  );
}

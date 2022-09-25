import React, { useEffect, useState } from "react";
import "./OrderSummary.css";
export default function OrderSummary({ cart }) {
  console.log();
  // const product = props.products.find((product) => {
  //   console.log(product.id, props.clickedItem);
  //   return product.id === props.clickedItem;
  // });
  // const [count, setCount] = useState(0);
  // console.log(product.price);
  const cartReducer = (prevValue, currentValue) =>
    prevValue + currentValue.price;

  const totalPrice = cart.reduce(cartReducer, 0);
  // const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="fixed-summury">
      <div>
        <h4>Order Summary</h4>
        <p>Items: {cart.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Shipping Charge: </p>
        <p>Tax: </p>
        <p>
          <strong>Grand Total:</strong>
        </p>
        <div>
          <button>Clear Cart</button>
        </div>
        <div>
          <button>Review Cart</button>
        </div>
      </div>
    </div>
  );
}

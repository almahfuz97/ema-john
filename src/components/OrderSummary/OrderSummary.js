import React from "react";
import "./OrderSummary.css";
export default function OrderSummary() {
  return (
    <div className="summary-container">
      <h4>Order Summary</h4>
      <p>Selected Items: </p>
      <p>Total Price: </p>
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
  );
}

import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="title-div">
          <h1>Ema-John</h1>
          <img className="logo" src="amazon-logo.png" alt="arrow-logo" />
        </div>
        <div className="ul-div">
          <ul className="nav-ul">
            <li className="nav-item">Order</li>
            <li className="nav-item">Order Review</li>
            <li className="nav-item">Manage Inventory</li>
            <li className="nav-item">Login</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

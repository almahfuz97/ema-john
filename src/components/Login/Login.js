import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="main-div">
      <div className="parent-div">
        <div className="login-div">
          <div>
            <p className="login-text">Login</p>
            <form action="">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
              <button className="reg-btn" type="submit">
                Login
              </button>
              <p>
                <small>
                  New to Ema-John?{" "}
                  <span className="create-new-text"> Create New Account</span>
                </small>
              </p>
              <div className="horizontal-line">
                <hr />
                <small>or</small>
                <hr />
              </div>
              <button className="continue-google"> Continue with google</button>
            </form>
          </div>
        </div>
        <div className="wrapper-login"></div>
      </div>
    </div>
  );
}

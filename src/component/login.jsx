import React from "react";
import "./component.css";

function login() {
  return (
    <>
      <div className="container-login">
        <div className="sub-container-login">
          <div className="content-login">
            <h3>Login</h3>
            <input type="text" placeholder="Email" />
            <br />
            <input type="password" placeholder="Password" />
            <div className="button">Login</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;

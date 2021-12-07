/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(Email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(Email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.pushState("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://image.shutterstock.com/z/stock-photo-montreal-canada-july-amazon-gift-card-on-a-white-background-706518910.jpg"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>By signing-In you agree to the AMAZON terms and conditions.</p>
        <button className="login__registerButton" onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;

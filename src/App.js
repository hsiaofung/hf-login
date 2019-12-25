import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import Login from "./Login";
import memberLogoWhite from "./img/member-logo-white.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Login />
          </Route>
          <Route path="/login-page">
            <LoginPage />
          </Route>
          <Route path="/register-page">
            <RegisterPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="login-dialog">
      <div className="login-dialog-header">
        <img className="login-dialog-logo" src={memberLogoWhite}></img>
      </div>
      <div className="login-dialog-body">
        <div className="login-dialog-content">
          <h2 className="title">登入</h2>
          <form className="login-dialog-form">
            <p className="phone-number">手機號碼</p>
            <p className="email-login">以電郵登入</p>
            <div style={{ clear: "both" }}></div>
            <select>
              <option>+852</option>
            </select>
            <input></input>
            <p>手機號碼長度為8位數字</p>
            <span>密碼</span>
            <span>忘記密碼</span>
            <input></input>
            <button>登入</button>
            <button>立即登記</button>
          </form>
        </div>
      </div>
    </div>
  );
}
function RegisterPage() {
  return <h2>Register Page</h2>;
}

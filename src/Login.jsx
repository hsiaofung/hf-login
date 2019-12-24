import React, { Component } from "react";
import ScrollableLightbox from "hf-lightbox";
import "./css/login.css";
const CAS_HOST_URL = "https://loginuat.emphasis.com";
const lang = "zhTW";

export default class Login extends Component {
  state = { showLogin: false };

  openLogin = () => {
    this.setState({
      showLogin: true
    });
  };
  closeLogin() {
    this.setState({
      showLogin: false
    });
  }
  openRegister = () => {
    this.setState({
      showRegister: true
    });
  };
  closeRegister() {
    this.setState({
      showRegister: false
    });
  }
  render() {
    return (
      <div className="login">
        <button className="login-btn" onClick={this.openLogin}>
          登入
        </button>
        /
        <button className="register-btn" onClick={this.openRegister}>
          註冊
        </button>
        <div className="login-wrap">
          <ScrollableLightbox
            show={this.state.showLogin}
            close={this.closeLogin.bind(this)}
          >
            <iframe
              id="login-iframe"
              title="Login"
              src={
                "https://loginuat.emphasis.com/cas/login?style=popup&service=https%3A%2F%2Fhktest-pks.emphasis.com/eshop-hk/api/user/login/success/event&locale=zh_tw"
              }
              // src={`${CAS_HOST_URL}/cas/login?style=popup&service=${encodeURIComponent(
              //   "https://loginuat.emphasis.com"
              // )}/eshop-hk/api/user/login/success/event${
              //   lang === "zhTW" ? "&locale=zh_tw" : "&locale=en"
              // }`}
              frameBorder={0}
            />
          </ScrollableLightbox>
        </div>
        <div className="register-wrap">
          <ScrollableLightbox
            show={this.state.showRegister}
            close={this.closeRegister.bind(this)}
            title={"註冊"}
          >
            註冊
          </ScrollableLightbox>
        </div>
      </div>
    );
  }
}

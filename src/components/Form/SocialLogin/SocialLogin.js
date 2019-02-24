import React, { Component } from "react";
import "./SocialLogin.css";

class SocialLogin extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="loginWrapper socialLogin">
          <div className="loginItem social">
            <button type="button" className="loginItem btn btn-outline-danger">
              Google 로그인
            </button>
          </div>
          <div className="loginItem social">
            <button type="button" className="loginItem btn btn-outline-primary">
              Facebook 로그인
            </button>
          </div>
          <div className="loginItem social">
            <button type="button" className="loginItem btn btn-outline-success">
              Naver 로그인
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SocialLogin;

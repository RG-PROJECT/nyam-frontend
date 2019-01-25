import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css"; // temp css
import "./login.css";

const Login = () => {
  return (
    <div className="pageWrapper">
      <div className="loginWrapper commonLogin">
        <div className="loginItem email">
          <label>Email 주소</label>
          <input name="email" className="form-control" placeholder="Email" />
        </div>
        <div className="loginItem passward">
          <label>비밀번호</label>
          <input
            type="password"
            className="form-control"
            name="passward"
            placeholder="Password"
          />
        </div>
        <div className="loginButton">
          <button type="button" className="loginItem btn btn-outline-dark">
            로그인
          </button>
        </div>
      </div>
      or
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
    </div>
  );
};

export default Login;

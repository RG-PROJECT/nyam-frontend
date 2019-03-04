import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css"; // temp css
import "./login.css";
import SocialLogin from "components/Form/SocialLogin";
import CommonLogin from "components/Form/CommonLogin";
import HeaderNav from "components/Nav";

const Login = () => {
  return (
    <>
      <HeaderNav />
      <div className="pageWrapper">
        <CommonLogin />
        or
        <SocialLogin />
      </div>
    </>
  );
};

export default Login;

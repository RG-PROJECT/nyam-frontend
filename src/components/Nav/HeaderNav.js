import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const HeaderNav = () => {
  return (
    <React.Fragment>
      <div className="nav-header-wrapper">
        <div className="header-item">
          <Link to="/">Nyam</Link>
        </div>
        <div className="header-item">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderNav;

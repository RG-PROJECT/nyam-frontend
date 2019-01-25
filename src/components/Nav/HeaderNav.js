import React, { Component } from "react";
import "./nav.css";

const HeaderNav = () => {
  return (
    <React.Fragment>
      <div className="nav-header-wrapper">
        <div className="header-item">Nyam</div>
        <div className="header-item">Login</div>
      </div>
    </React.Fragment>
  );
};

export default HeaderNav;

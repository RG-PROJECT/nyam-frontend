import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, Login } from "pages";
import HeaderNav from "./components/Nav";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <HeaderNav />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </React.Fragment>
  );
};

export default App;

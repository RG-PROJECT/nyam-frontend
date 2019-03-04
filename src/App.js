import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { Home, Login, Write } from "pages";
import "./App.css";

const NoMatch = ({ location }) => (
  <>
    {/* <Redirect from="/old-match" to="/" /> */}
    <Redirect to="/" />
  </>
);

const Error404 = () => (
  <>
    <h1>No Page! 😰</h1>
  </>
);

const Error403 = () => (
  <>
    <h1>Not Logged in! 😰</h1>
  </>
);
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/write" component={Write} />
        <Route component={Error404} />
      </Switch>
    </>
  );
};

export default App;

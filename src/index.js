import React from "react";
import ReactDOM from "react-dom";
import AppTest from "./AppTest";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { createStore } from "redux";
// Provider: it is component that surround and wrap root app component
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

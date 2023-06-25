import React from "react";
// import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

import thunk from "redux-thunk";
import reducers from "./reducers";

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const container = document.getElementById("root");
const rooter = createRoot(container);
rooter.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// ReactDom.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

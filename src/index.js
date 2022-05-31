import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CarouselApi from "./context/CarouselApi";
import reportWebVitals from "./reportWebVitals";

import store from "./redux/store";

import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <CarouselApi>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </CarouselApi>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CarouselApi from "./context/CarouselApi";
import reportWebVitals from "./reportWebVitals";

import { user } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import {
  setUsername,
  setEmail,
  setToken,
  setEntry,
} from "./actionTypes/newUser";
import { Provider, connect } from "react-redux";
let store = configureStore({
  reducer: user,
});

let unSuscribe = store.subscribe(() => console.log(store.getState()));

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    setUsername: function (username) {
      dispatch(setUsername(username));
    },
    setEmail: function (email) {
      dispatch(setEmail(email));
    },
    setEntry: function (entry) {
      dispatch(setEntry(entry));
    },
    setToken: function (token) {
      dispatch(setToken(token));
    },
  };
};

unSuscribe();

const Container = connect(mapStateToProps, mapActionToProps)(App);
ReactDOM.render(
  <React.StrictMode>
    <CarouselApi>
      <BrowserRouter>
        <Provider store={store}>
          {" "}
          <Container />
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

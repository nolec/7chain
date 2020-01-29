import React from "react";
import GlobalStyles from "./Globalstyles";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "../store";
import { hot } from "react-hot-loader";
import LangProvider from "../LangProvider";

function App() {
  return (
    <Provider store={store}>
      <LangProvider>
        <GlobalStyles />
        <Router />
      </LangProvider>
    </Provider>
  );
}

export default hot(module)(App);

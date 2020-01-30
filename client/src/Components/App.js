import React from "react";
import GlobalStyles from "./Globalstyles";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "../store";
import { hot } from "react-hot-loader";
import LangProvider from "../LangProvider";
import { theme } from "./Main/Main";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <Provider store={store}>
      <LangProvider>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </LangProvider>
    </Provider>
  );
}

export default hot(module)(App);

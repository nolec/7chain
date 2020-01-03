import React from "react";
import GlobalStyles from "./Globalstyles";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  );
}

export default App;

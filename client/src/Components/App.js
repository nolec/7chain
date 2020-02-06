import React, { useEffect } from "react";
import GlobalStyles from "./Globalstyles";
import Router from "./Router";
import { Provider, useDispatch } from "react-redux";
import store from "../store";
import { hot } from "react-hot-loader";
import LangProvider from "../LangProvider";
import { theme } from "./Main/Main";
import { ThemeProvider } from "styled-components";
import SubProvider from "../SubProvider";
import publicIp from "public-ip";
import setIpAddress from "../utils/setIpAddress";
import { ipConfirm } from "../actions/ip";
const getIp = async () => {
  let ip = await publicIp.v4();
  console.log(ip);
  setIpAddress(ip);
};
getIp();
function App() {
  useEffect(() => {
    store.dispatch(ipConfirm());
  }, []);
  return (
    <Provider store={store}>
      <LangProvider>
        <SubProvider>
          <GlobalStyles />
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </SubProvider>
      </LangProvider>
    </Provider>
  );
}

export default hot(module)(App);

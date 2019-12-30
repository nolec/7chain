import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Nav from "./Navigation";
import Main from "./Main";
import BtnTop from "./BtnTop";

export default () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Redirect from="/*" to="/" />
      </Switch>
      <BtnTop />
    </Router>
  );
};

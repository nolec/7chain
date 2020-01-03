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
import Footer from "./Footer";
import Media from "./MediaPage";
import Press from "./PressPage";
import AdminPress from "./Admin/AdminPress";
import AdminMedia from "./Admin/AdminMedia";

export default () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/press" component={Press} />
        <Route path="/media" component={Media} />
        <Route path="/admin/press" component={AdminPress} />
        <Route path="/admin/media" component={AdminMedia} />
        <Redirect from="/*" to="/" />
      </Switch>
      <BtnTop />
      <Footer />
    </Router>
  );
};

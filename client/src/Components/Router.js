import React, { useState, useEffect } from "react";
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
import Contact from "./ContactPage";
import ip from "ip";

export default () => {
  console.log(ip.isV4Format(ip.address()));
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/press" component={Press} />
        <Route path="/media" component={Media} />
        <Route path="/contact" component={Contact} />
        {ip.isV4Format(ip.address()) ? (
          <>
            <Route path="/admin/press" component={AdminPress} />
            <Route path="/admin/media" component={AdminMedia} />
          </>
        ) : null}
        <Redirect from="/*" to="/" />
      </Switch>
      <BtnTop />
      <Footer />
    </Router>
  );
};

import React, { useState } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "~/pages/Home";
import Auth from "~/pages/Auth";

const HomePage = () => (
  <Route exact path="/">
    <Home />
  </Route>
);

const AuthPage = () => (
  <Route exact path="/">
    <Auth />
  </Route>
);

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>{isLoggedIn ? HomePage() : AuthPage()}</Switch>
    </Router>
  );
};

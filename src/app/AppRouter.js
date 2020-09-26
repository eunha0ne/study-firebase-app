import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import useLoggedInState from "hooks/useLoggedInState";

import Home from "pages/Home";
import Auth from "pages/Auth";
import Settings from "pages/Settings";

const MainTemplate = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/settings">
      <Settings />
    </Route>
  </Switch>
);

const AuthTemplate = () => (
  <Switch>
    <Route exact path="/">
      <Auth />
    </Route>
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = () => {
  const isLoggedIn = useLoggedInState();

  return isLoggedIn ? MainTemplate() : AuthTemplate();
};

export default AppRouter;

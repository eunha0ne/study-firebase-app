import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import useLoggedInState from "hooks/useLoggedInState";

import Home from "pages/Home";
import Auth from "pages/Auth";
import Settings from "pages/Settings";

const MainTemplate = () => (
  <>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/settings">
      <Settings />
    </Route>
  </>
);

const AuthTemplate = () => (
  <Route exact path="/">
    <Auth />
  </Route>
);

const AppRouter = () => {
  const isLoggedIn = useLoggedInState();

  return (
    <Switch>
      {isLoggedIn ? MainTemplate() : AuthTemplate()}
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default AppRouter;
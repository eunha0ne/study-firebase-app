import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "pages/Home";
import Auth from "pages/Auth";
import Settings from "../pages/Settings";

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

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Switch>
      {isLoggedIn ? MainTemplate() : AuthTemplate()}
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default AppRouter;

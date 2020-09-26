import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "pages/Home";
import Auth from "pages/Auth";
import Settings from "../pages/Settings";

const MainPage = () => (
  <>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/settings">
      <Settings />
    </Route>
  </>
);

const AuthPage = () => (
  <Route exact path="/">
    <Auth />
  </Route>
);

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Switch>
      {isLoggedIn ? MainPage() : AuthPage()}
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default AppRouter;

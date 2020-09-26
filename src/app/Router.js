import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "pages/Home";
import Auth from "pages/Auth";

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

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? HomePage() : AuthPage()}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;

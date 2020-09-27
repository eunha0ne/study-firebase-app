import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import useLoggedInState from "hooks/useLoggedInState";

import Home from "pages/Home";
import Auth from "pages/Auth";
import Settings from "pages/Settings";
import { authService } from "./firebaseInstance";

const MainTemplate = ({ user }) => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/settings">
      <Settings user={user} />
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
  const [user, setUser] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return isLoggedIn ? MainTemplate({ user }) : AuthTemplate();
};

export default AppRouter;

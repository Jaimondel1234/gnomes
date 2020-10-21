import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { GnomeScreen } from "../components/gnome/GnomeScreen";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { LoginScreen } from "../auth/LoginScreen";

export function AppRouter() {
  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={LoginScreen}
          isAuthenticated={false}
        />
        <PrivateRoute
          exact
          path="/"
          component={GnomeScreen}
          isAuthenticated={false}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

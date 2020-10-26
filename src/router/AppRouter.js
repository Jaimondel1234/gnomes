import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { LoginScreen } from "../auth/LoginScreen";
import { DashboardRoutes } from "./DashboardRoute";
import { ContainerStyle } from "../styles/core";

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
          path="/"
          component={DashboardRoutes}
          isAuthenticated={false}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

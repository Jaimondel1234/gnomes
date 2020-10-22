import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { LoginScreen } from "../auth/LoginScreen";
import { DashboardRoutes } from "./DashboardRoute";

export function AppRouter() {
  console.log("router");
  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={LoginScreen}
          isAuthenticated={true}
        />
        <PrivateRoute
          path="/"
          component={DashboardRoutes}
          isAuthenticated={true}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { HomeScreen } from "../components/home/HomeScreen";
import { SearchScreen } from "../components/search/SearchScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={HomeScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};

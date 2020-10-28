import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { HomeScreen } from "../components/home/HomeScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { GnomeScreen } from "../components/gnome/GnomeScreen";
import { store } from "../store/store";
import { loadGnomes } from "../actions/gnome";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/home" component={HomeScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Route exact path="/all-gnomes" component={GnomeScreen} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};

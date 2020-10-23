import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { HomeScreen } from "../components/home/HomeScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { ContainerStyle } from "../styles/core";
import { GnomeScreen } from "../components/gnome/GnomeScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <ContainerStyle m={5}>
        <Switch>
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/all-gnomes" component={GnomeScreen} />
          <Redirect to="/home" />
        </Switch>
      </ContainerStyle>
    </>
  );
};

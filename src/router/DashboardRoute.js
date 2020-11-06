import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { HomeScreen } from '../components/home/HomeScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { GnomeScreen } from '../components/GnomeList/GnomeScreen';
import { GnomeDetailScreen } from '../components/GnomeDetail/GnomeDetailScreen';

/* 
  Routes if logged
*/
export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={HomeScreen} />
        <Route exact path='/search' component={SearchScreen} />
        <Route exact path='/all-gnomes' component={GnomeScreen} />
        <Route exact path='/gnome-detail' component={GnomeDetailScreen} />
        <Redirect to='/home' />
      </Switch>
    </>
  );
};

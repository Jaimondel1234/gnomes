import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../auth/LoginScreen';
import { DashboardRoutes } from './DashboardRoute';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../actions/auth';

/* AppRouter (root)
 */

export function AppRouter() {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(login(user.uid, user.displayName));
    }
  }, [dispatch, localStorage, login]);

  useEffect(() => {
    setIsAuthenticated(!!uid);
  }, [uid, setIsAuthenticated]);

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path='/login'
          component={LoginScreen}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path='/'
          component={DashboardRoutes}
          isAuthenticated={isAuthenticated}
        />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

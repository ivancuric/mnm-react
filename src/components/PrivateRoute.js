import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authManager } from '../authManager';

const PrivateRoute = props => {
  if (authManager.isAuthenticated) {
    return <Route {...props} />;
  }
  return <Redirect to="/" />;
};

export default PrivateRoute;

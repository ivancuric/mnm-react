import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authManager } from '../authManager';
import { useHello } from '../useHello';

const PrivateRoute = ({ component: Component, helloMessage, ...rest }) => {
  useHello(helloMessage, PrivateRoute);

  if (authManager.isAuthenticated) {
    return (
      <Route
        {...rest}
        render={props => <Component {...props} helloMessage={helloMessage} />}
      />
    );
  }
  return <Redirect to="/" />;
};

export default PrivateRoute;
